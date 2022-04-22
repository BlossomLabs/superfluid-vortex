import { Button, GU, IconConnect } from "@1hive/1hive-ui";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Chain, Connector, useAccount, useConnect, useNetwork } from "wagmi";
import { getNetworkError } from "./helpers";
import {
  PromptedAction,
  ScreenType,
  actions,
  useAccounModuleStore,
} from "./use-account-module-store";
import { AccountButton } from "./AccountButton";
import { HeaderPopover } from "./HeaderPopover";
import {
  ScreenConnected,
  ScreenConnecting,
  ScreenError,
  ScreenPromptedAction,
  ScreenWallets,
} from "./screens";

const SCREENS = [
  ScreenWallets,
  ScreenConnecting,
  ScreenError,
  ScreenPromptedAction,
  ScreenConnected,
];

const { Connecting, Error, Action, Connected } = ScreenType;

export const AccountModule = ({ compact }: { compact?: boolean }) => {
  const buttonRef = useRef();
  const timer = useRef<NodeJS.Timeout>();
  const [{ data: accountData, error: accountError }, disconnect] = useAccount();
  const [{ error: connectError }, connect] = useConnect();
  const [{ data: networkData, error: networkError }, switchNetwork] =
    useNetwork();
  const [promptedActionSucceeded, setPromptedActionSucceeded] = useState(false);
  const error =
    getNetworkError(networkError, networkData) || accountError || connectError;

  const { currentScreen, opened, screenDirection } = useAccounModuleStore();

  const displayAccountButton =
    currentScreen === Connected && !error && accountData?.address;

  const Screen = SCREENS[currentScreen];

  const handlePopoverClose = () => {
    if (
      currentScreen === Connecting ||
      currentScreen === Error ||
      currentScreen === Action
    ) {
      // Reject closing the popover
      return false;
    }
    actions.opened(false);
  };

  const handleSwitchNetwork = (switchAction: PromptedAction, chain: Chain) => {
    if (switchNetwork) {
      actions.promptedAction(switchAction);
      actions.goToScreen(Action);
      switchNetwork(chain.id)
        .then(({ data, error }) => {
          if (data) {
            setPromptedActionSucceeded(true);
          } else {
            console.error(error);
            actions.goToInitialScreen();
            actions.promptedAction(null);
          }
        })
        .catch((err) => console.error(err));
    }
  };

  const handleConnect = (connector: Connector) => {
    actions.selectedConnector(connector);
    actions.goToScreen(Connecting);
    /**
     * Set a timer to always display connecting screen for
     * a period of time
     */
    timer.current = setTimeout(() => {
      connect(connector).then(({ data, error }) => {
        if (data?.chain?.unsupported || error) {
          actions.goToScreen(Error);
        } else {
          actions.goToScreen(Connected);
        }
      });
    }, 500);
  };

  const handleBack = () => {
    actions.goToInitialScreen();
    disconnect();
  };

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  /**
   * Wait until network switching process is completed before going to
   * the connected screen.
   */
  useEffect(() => {
    if (promptedActionSucceeded && !networkData.chain?.unsupported) {
      actions.goToScreen(Connected);
      actions.promptedAction(null);
      setPromptedActionSucceeded(false);
    }
  }, [promptedActionSucceeded, networkData.chain]);

  return (
    // @ts-ignore
    <Container ref={buttonRef}>
      {displayAccountButton ? (
        <AccountButton onClick={actions.toggleOpened} />
      ) : (
        <Button
          icon={<IconConnect />}
          label="Connect account"
          onClick={actions.toggleOpened}
          display={compact ? "icon" : "all"}
        />
      )}
      <HeaderPopover
        direction={screenDirection}
        onClose={handlePopoverClose}
        opener={buttonRef.current}
        screenId={currentScreen}
        visible={opened}
        width={(currentScreen === Connected ? 41 : 51) * GU}
      >
        <Screen
          onConnect={handleConnect}
          onSwitchNetwork={handleSwitchNetwork}
          onBack={handleBack}
        />
      </HeaderPopover>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  outline: 0;
`;
