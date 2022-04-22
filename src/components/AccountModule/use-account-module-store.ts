import { createStore } from "@udecode/zustood";
import { Connector } from "wagmi";

export enum ScreenType {
  Wallets,
  Connecting,
  Error,
  Action,
  Connected,
}

export type PromptedAction = {
  title: string;
  subtitle?: string;
  image?: string;
};

type AccountModuleState = {
  opened: boolean;
  promptedAction: PromptedAction | null;
  selectedConnector: Connector | null;
  currentScreen: ScreenType;
  screenDirection: -1 | 1;
};

const initialState: AccountModuleState = {
  opened: false,
  promptedAction: null,
  selectedConnector: null,
  currentScreen: ScreenType.Wallets,
  screenDirection: -1,
};

const accountModuleStore = createStore("account-module")(initialState, {
  devtools: { enabled: process.env.NODE_ENV === "development" },
})
  .extendActions((set, get) => ({
    toggleOpened: () => set.opened(!get.opened()),
    reset: () => {
      const {
        opened,
        promptedAction,
        selectedConnector,
        currentScreen,
        screenDirection,
      } = initialState;

      set.opened(opened);
      set.promptedAction(promptedAction);
      set.selectedConnector(selectedConnector);
      set.currentScreen(currentScreen);
      set.screenDirection(screenDirection);
    },
    goToScreen: (screen: ScreenType) => {
      const previousScreen = get.currentScreen();
      const screenDirection = previousScreen > screen ? -1 : 1;

      set.currentScreen(screen);
      set.screenDirection(screenDirection);
    },
  }))
  .extendActions((set) => ({
    goToInitialScreen: () => {
      set.reset();
      set.opened(true);
    },
  }));

export const useAccounModuleStore = accountModuleStore.useStore;
export const actions = accountModuleStore.set;
