import { GU, textStyle } from "@1hive/1hive-ui";
import styled from "styled-components";
import { AccountModule } from "./AccountModule";

export const TopBar = () => (
  <Container>
    <Title>Superfluid Vortex</Title>
    <AccountModule compact={false} />
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${2 * GU}px;
`;

const Title = styled.div`
  ${textStyle("title2")};
`;
