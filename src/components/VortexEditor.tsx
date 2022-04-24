import MonacoEditor, { useMonaco } from "@monaco-editor/react";
import theme from "../vortex/theme.json";
import { conf, contribution, language } from "../vortex/vortex";
import { Loading } from "../components/Loading";
import { Command, ParameterType } from "../vortex/types";
import { commands, getCommand } from "../vortex/commands";
import { useSuperfluid } from "../providers/Superfluid";
import { useEffect, useMemo } from "react";
import { ISuperToken } from "@superfluid-finance/sdk-core";

type SuggestionLists = {
  commands: Command[];
  tokenSymbols: string[];
};

const getTokenSymbols = (superTokens: ISuperToken[]): string[] => {
  const prefix = "token:";
  const symbols = superTokens.reduce((symbols, sT) => {
    // We assume it's the same but without the x.
    const underlyingSymbol = sT.symbol.substring(0, sT.symbol.length - 1);

    symbols.push(`${prefix}${sT.symbol}`);
    symbols.push(`${prefix}${underlyingSymbol}`);
    return symbols;
  }, [] as string[]);
  return symbols;
};

type VortexEditorProps = {
  code: string;
  onChange(value: string): void;
  onEditorMounting(mounting: boolean): void;
};

const getSuggestionsFromParam = (
  c: Command,
  index: number,
  currentWord: string,
  { tokenSymbols }: SuggestionLists
): string[] => {
  if (!c.params || !c.params.length) {
    return [];
  }

  const param = c.params![index];

  if (param && param.type === ParameterType.Address && param.name === "token") {
    return tokenSymbols.filter((s) => s.includes(currentWord));
  }

  return [];
};

const parseLineContent = (
  lineContent: string,
  suggestionLists: SuggestionLists
): string[] => {
  const { commands } = suggestionLists;
  const lineWords = lineContent.split(" ");
  const length = lineWords.length;
  const currentWord = lineWords[length - 1];

  // Cursor on the initial position, return all available root commands.
  if (!length) {
    return commands.map((c) => c.name.toString());
  }

  if (length >= 1) {
    const c = getCommand(lineWords[0]);
    if (length === 1) {
      if (!c) {
        return commands
          .filter((c) => c.name.includes(currentWord))
          .map((c) => c.name.toString());
      }
    }

    if (!c) {
      return [];
    }

    if (length === 2) {
      if (c.subCommands) {
        return c.subCommands
          .filter((c) => c.name.includes(currentWord))
          .map((c) => c.name.toString());
      }

      return getSuggestionsFromParam(
        c,
        length - 1 - 1,
        currentWord,
        suggestionLists
      );
    }

    const subCommandName = lineWords[1] as keyof typeof c.subCommands;
    const subCommand =
      c.subCommands && c.subCommands.find((c) => c.name === subCommandName);

    if (!subCommand) {
      return [];
    }

    if (length > 2) {
      return getSuggestionsFromParam(
        subCommand,
        length - 1 - 2,
        currentWord,
        suggestionLists
      );
    }
  }
  return [];
};

export const VortexEditor = ({
  code,
  onChange,
  onEditorMounting,
}: VortexEditorProps) => {
  const { allSuperTokens } = useSuperfluid();
  const monaco = useMonaco();
  const tokenSymbols = useMemo(
    () => getTokenSymbols(allSuperTokens),
    [allSuperTokens]
  );

  /**
   * Set monaco completion logic
   */
  useEffect(() => {
    if (!monaco) {
      return;
    }

    const completionProvider = monaco.languages.registerCompletionItemProvider(
      "vortex",
      {
        triggerCharacters: [":"],
        provideCompletionItems: (model, currentPosition) => {
          const lineContent = model.getLineContent(currentPosition.lineNumber);
          const { startColumn, endColumn } =
            model.getWordUntilPosition(currentPosition);

          const range = {
            startLineNumber: currentPosition.lineNumber,
            endLineNumber: currentPosition.lineNumber,
            startColumn: startColumn,
            endColumn: endColumn,
          };

          const values = parseLineContent(lineContent, {
            commands,
            tokenSymbols,
          });

          return {
            suggestions: values.map((v) => ({
              label: v,
              range,
              insertText: v,
              kind: 1,
            })),
          };
        },
      }
    );

    return () => {
      completionProvider.dispose();
    };
  }, [monaco, tokenSymbols]);

  return (
    <MonacoEditor
      height="50vh"
      theme="theme"
      language="vortex"
      loading={<Loading />}
      value={code}
      onChange={(str) => onChange(str || "")}
      beforeMount={(monaco) => {
        // @ts-ignore
        monaco.editor.defineTheme("theme", theme);
        monaco.languages.register(contribution);
        // @ts-ignore
        monaco.languages.setLanguageConfiguration("vortex", conf);
        monaco.languages.setMonarchTokensProvider("vortex", language);

        onEditorMounting(true);
      }}
      onMount={(editor) => {
        editor.setPosition({ lineNumber: 10000, column: 0 });
        editor.focus();

        onEditorMounting(false);
      }}
      options={{
        fontSize: 22,
        fontFamily: "Ubuntu Mono",
        detectIndentation: false,
        tabSize: 2,
        language: "vortex",
        minimap: {
          enabled: false,
        },
        scrollbar: {
          useShadows: false,
          verticalScrollbarSize: 7,
          vertical: "hidden",
        },
      }}
    />
  );
};
