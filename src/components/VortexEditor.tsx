import { LoadingRing, GU } from "@1hive/1hive-ui";
import { useState } from "react";
import MonacoEditor from "@monaco-editor/react";
import theme from "../editor/theme.json";
import { conf, contribution, language } from "../editor/vortex";

type VortexEditorProps = {
  onEditorMounting(mounting: boolean): void;
};

const Loading = () => (
  <div style={{ display: "flex", gap: 1 * GU }}>
    <LoadingRing />
    Loading vortex...
  </div>
);

export const VortexEditor = ({ onEditorMounting }: VortexEditorProps) => {
  const [code, setCode] = useState("");

  return (
    <MonacoEditor
      height="50vh"
      theme="theme"
      language="vortex"
      loading={<Loading />}
      value={code}
      onChange={(str) => setCode(str || "")}
      beforeMount={(monaco) => {
        monaco.editor.defineTheme("theme", theme);
        monaco.languages.register(contribution);
        monaco.languages.setLanguageConfiguration("vortex", conf);
        monaco.languages.setMonarchTokensProvider("vortex", language);

        onEditorMounting(true);
      }}
      onMount={(editor) => {
        editor.setPosition({ lineNumber: 10000, column: 0 });
        editor.focus();

        console.log("aaaa");

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
