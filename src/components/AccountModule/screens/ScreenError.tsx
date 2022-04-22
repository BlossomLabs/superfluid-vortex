import {
  Button,
  GU,
  IconError,
  Link,
  textStyle,
  useTheme,
} from "@1hive/1hive-ui";
import { useMemo } from "react";
import styled from "styled-components";
import {
  Chain,
  ChainNotConfiguredError,
  useAccount,
  useConnect,
  useNetwork,
} from "wagmi";
import { getNetworkLogo } from "../../../utils/icons";
import { getNetworkError } from "../helpers";
import type { PromptedAction } from "../use-account-module-store";

const buildSwitchAction = (chain: Chain): PromptedAction => ({
  title: `Connecting to ${chain.name} network`,
  subtitle: `Creating and/or switching to the ${chain.name} network (id: ${chain.id}) in your wallet. You may be temporarily redirected to a new screen.`,
  image: getNetworkLogo(chain.id),
});

type ScreenErrorProps = {
  onSwitchNetwork(switchAction: PromptedAction, chain: Chain): void;
  onBack(): void;
};

export const ScreenError = ({ onSwitchNetwork, onBack }: ScreenErrorProps) => {
  const theme = useTheme();
  const [{ data: networkData, error: networkError }, switchNetwork] =
    useNetwork();
  const [{ error: connectError }] = useConnect();
  const [{ error: accountError }] = useAccount();

  const error =
    getNetworkError(networkError, networkData) || connectError || accountError;

  const [title, secondary] = useMemo(() => {
    if (
      error instanceof ChainNotConfiguredError ||
      networkData.chain?.unsupported
    ) {
      return [
        "Wrong network",
        <span key="">
          Please select one of these networks:{" "}
          {networkData.chains.map((chain, index, chains) =>
            switchNetwork ? (
              <span key={chain.id}>
                <Link
                  onClick={() => {
                    onSwitchNetwork(buildSwitchAction(chain), chain);
                  }}
                >
                  {chain.name}
                  {index < chains.length - 1 ? "," : ""}
                </Link>
                {index < chains.length - 1 ? " " : ""}
              </span>
            ) : (
              <span key={chain.id}>
                {chain.name}
                {index < chains.length - 1 ? ", " : ""}
              </span>
            )
          )}
        </span>,
      ];
    }

    return [
      "Failed to enable your account",
      "You can try another Ethereum wallet.",
    ];
  }, [error, networkData, onSwitchNetwork, switchNetwork]);

  return (
    <Container>
      <ErrorContainer>
        <div style={{ marginBottom: -2 * GU }}>
          <IconError
            style={{ width: "130px", height: "130px" }}
            color={theme.negative}
          />
        </div>
        <Title>{title}</Title>
        <p
          style={{
            width: 36 * GU,
            color: theme.surfaceContentSecondary,
          }}
        >
          {secondary}
        </p>
      </ErrorContainer>
      <ButtonContainer>
        <Button onClick={onBack} wide>
          Go back
        </Button>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${2 * GU}px;
  padding-top: ${1 * GU}px;
  height: 100%;
`;

const ErrorContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: 600;
  ${textStyle("body1")};
`;

const ButtonContainer = styled.div`
  flex-grow: 0;
  margin-top: ${1 * GU}px;
  width: 100%;
`;
