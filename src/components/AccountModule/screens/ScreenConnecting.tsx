import { GU, textStyle, useTheme } from "@1hive/1hive-ui";
import styled from "styled-components";

import { getWalletIconPath } from "../helpers";
import { LoadingRing } from "../LoadingRing";
import { useAccounModuleStore } from "../use-account-module-store";

export const ScreenConnecting = () => {
  const theme = useTheme();
  const { selectedConnector: wallet } = useAccounModuleStore();

  if (!wallet) {
    return null;
  }

  const walletIcon = getWalletIconPath(wallet.id);

  return (
    <Container>
      <SpinnerContainer>
        <LoadingRing />
        {walletIcon && <SpinnerImage src={walletIcon} />}
      </SpinnerContainer>
      <Title>Connecting to {wallet.name}</Title>
      <p
        style={{ width: `${36 * GU}px`, color: theme.surfaceContentSecondary }}
      >
        Log into {wallet.name || "Unknown"}. You may be temporarily redirected
        to a new screen.
      </p>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${2 * GU}px;
  height: 100%;
  text-align: center;
`;

const SpinnerContainer = styled.div`
  position: relative;
  width: ${10.5 * GU}px;
  height: ${10.5 * GU}px;
`;

const SpinnerImage = styled.div<{ src: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 50% 50% / auto ${5 * GU}px no-repeat url(${(props) => props.src});
`;

const Title = styled.h1`
  padding-top: ${2 * GU}px;
  font-weight: 600;
  ${textStyle("body1")};
`;
