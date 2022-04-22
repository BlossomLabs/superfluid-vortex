import { GU } from "@1hive/1hive-ui";
import styled from "styled-components";
import { AccountModule } from "./AccountModule";

export const TopBar = () => (
  <Container>
    <AccountModule compact={false} />
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${2 * GU}px;
`;
