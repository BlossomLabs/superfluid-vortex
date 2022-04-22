import { GU, textStyle } from "@1hive/1hive-ui/";
import styled from "styled-components";

import { LoadingRing } from "../LoadingRing";
import { useAccounModuleStore } from "../use-account-module-store";

export const ScreenPromptedAction = () => {
  const { promptedAction } = useAccounModuleStore();

  if (!promptedAction) {
    return null;
  }

  const { title, subtitle, image } = promptedAction;

  return (
    <Container>
      <ActionContainer>
        <SpinnerContainer>
          <LoadingRing />
          {image && <ActionImage src={image} />}
        </SpinnerContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </ActionContainer>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${2 * GU}px;
  height: 100%;
`;

const ActionContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const SpinnerContainer = styled.div`
  position: relative;
  width: ${10.5 * GU}px;
  height: ${10.5 * GU}px;
`;

const ActionImage = styled.div<{ src: string }>`
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

const Subtitle = styled.p`
  width: ${36 * GU}px;
  margin-top: ${1 * GU}px;
  color: ${(props) => props.theme.surfaceContentSecondary};
`;
