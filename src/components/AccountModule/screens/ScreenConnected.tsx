import {
  Button,
  ButtonBase,
  GU,
  IconCheck,
  IconCopy,
  IdentityBadge,
  RADIUS,
  textStyle,
  useTheme,
} from "@1hive/1hive-ui";
import { useCallback, useEffect } from "react";
import styled from "styled-components";
import { useAccount, useNetwork } from "wagmi";

import { useCopyToClipboard } from "../../../hooks/useCopyToClipboard";
import { getWalletIconPath } from "../helpers";
import { ScreenType, actions } from "../use-account-module-store";

type ScreenConnectedProps = {
  onBack(): void;
};

export const ScreenConnected = ({ onBack }: ScreenConnectedProps) => {
  const theme = useTheme();
  const copy = useCopyToClipboard();
  const [{ data: networkData }] = useNetwork();
  const [{ data: accountData }] = useAccount();

  const chain = networkData.chain;
  const wallet = accountData?.connector;
  const accountAddress = accountData?.address;

  useEffect(() => {
    if (networkData.chain?.unsupported || !accountAddress) {
      actions.goToScreen(ScreenType.Error);
    }
  }, [networkData.chain, accountAddress]);

  const handleCopyAddress = useCallback(
    () => copy(accountAddress),
    [accountAddress, copy]
  );

  return (
    <div
      style={{
        padding: 2 * GU,
      }}
    >
      <Title>Active Wallet</Title>
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            marginRight: 3 * GU,
          }}
        >
          <WalletIcon
            src={getWalletIconPath(wallet?.id)}
            alt=""
            size={3 * GU}
          />
          <span>{wallet?.id === "unknown" ? "Wallet" : wallet?.name}</span>
        </div>
        <div style={{ width: "100%" }}>
          <CopyButton onClick={handleCopyAddress} focusRingRadius={RADIUS}>
            <IdentityBadge
              entity={accountAddress}
              compact
              badgeOnly
              style={{ cursor: "pointer" }}
            />
            <IconCopy style={{ verticalAlign: "middle" }} color={theme.hint} />
          </CopyButton>
        </div>
      </div>
      <div style={{ padding: `${2 * GU}px 0` }}>
        <NetworkInfo>
          <IconCheck size="small" />
          <span style={{ marginLeft: 0.5 * GU }}>
            {`Connected to ${chain ? chain.name : "Unknown"} Network`}
          </span>
        </NetworkInfo>
      </div>
      <Button onClick={onBack} wide style={{ marginTop: 1 * GU }}>
        Disconnect wallet
      </Button>
    </div>
  );
};

const Title = styled.h4`
  color: ${(props) => props.theme.contentSecondary};
  margin-bottom: ${2 * GU}px, ${textStyle("label2")};
  ${textStyle("label2")};
`;

const WalletIcon = styled.img<{ size: string | number }>`
  ${({ size }) => size && `width: ${size}px; height: ${size}px;`};
  margin-right: ${0.5 * GU}px;
  transform: translateY(-2px);
`;

const CopyButton = styled(ButtonBase)`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  padding: ${0.5 * GU}px;
  &:active {
    background: ${(props) => props.theme.surfacePressed};
  }
`;

const NetworkInfo = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.positive};
  ${textStyle("label2")};
`;
