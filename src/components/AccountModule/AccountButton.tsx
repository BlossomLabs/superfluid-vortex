import {
  ButtonBase,
  EthIdenticon,
  GU,
  IconDown,
  RADIUS,
  shortenAddress,
  textStyle,
  useTheme,
  useViewport,
} from "@1hive/1hive-ui";
import { Fragment } from "react";
import type { ReactNode } from "react";
import styled from "styled-components";
import { useAccount, useNetwork } from "wagmi";

type AccountButtonWrapperProps = {
  content: ReactNode;
  hasPopover: boolean;
  icon?: string | ReactNode;
  onClick?: () => void;
};

const AccountButtonWrapper = ({
  content,
  hasPopover = false,
  icon,
  onClick,
}: AccountButtonWrapperProps) => {
  const { above } = useViewport();
  const theme = useTheme();

  return (
    <AccountButtonBase onClick={onClick}>
      <InnerContainer>
        <>
          {icon}
          {above("medium") && (
            <Fragment>
              <div
                style={{
                  paddingLeft: `${1 * GU}px`,
                  paddingRight: `${0.5 * GU}px`,
                }}
              >
                {content}
              </div>
              {hasPopover && (
                <IconDown size="small" color={theme.surfaceIcon} />
              )}
            </Fragment>
          )}
        </>
      </InnerContainer>
    </AccountButtonBase>
  );
};

type AccountButtonProps = {
  onClick: () => void;
};

export const AccountButton = ({ onClick }: AccountButtonProps) => {
  const theme = useTheme();
  const [{ data: accountData }] = useAccount({ fetchEns: true });
  const [{ data: networkData }] = useNetwork();
  const { address, ens } = accountData || {};

  return (
    <AccountButtonWrapper
      hasPopover
      onClick={onClick}
      icon={
        <div style={{ position: "relative" }}>
          <EthIdenticon address={address} radius={RADIUS} />
          <ConnectedCircle />
        </div>
      }
      content={
        <>
          {!!address && (
            <LabelWrapper>
              <LabelInnerWrapper>
                {ens?.name || shortenAddress(address ?? "")}
              </LabelInnerWrapper>
            </LabelWrapper>
          )}
          <div
            style={{
              fontSize: "11px", //  doesn’t exist in aragonUI
              color: theme.positive,
            }}
          >
            Connected to {networkData.chain?.name}
          </div>
        </>
      }
    />
  );
};

const AccountButtonBase = styled(ButtonBase)`
  height: 100%;
  padding: ${0.2 * GU}px;
  ${(props) =>
    props.onClick !== undefined
      ? `&:active { background: ${props.theme.surfacePressed}; }`
      : `cursor: auto;`};
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  padding: 0 ${1 * GU}px;
`;

const ConnectedCircle = styled.div`
  position: absolute;
  bottom: -3px;
  right: -3px;
  width: 10px;
  height: 10px;
  background: ${(props) => props.theme.positive};
  border: 2px solid ${(props) => props.theme.surface};
  border-radius: 50%;
`;

const LabelWrapper = styled.div`
  margin-bottom: -5px;

  ${textStyle("body2")};
`;

const LabelInnerWrapper = styled.div`
  overflow: hidden;
  max-width: ${16 * GU}px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
