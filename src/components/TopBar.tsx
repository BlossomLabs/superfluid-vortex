import { GU, textStyle } from "@1hive/1hive-ui";
import styled from "styled-components";
import { AccountModule } from "./AccountModule";
import logo from "../assets/animated-logo.gif"

export const TopBar = () => (
  <Container>
    <Title><img src={logo} alt="logo" width="120" />Superfluid Vortex</Title>
    <AccountModule compact={false} />
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${2 * GU}px;
  max-width: 1200px;
  margin: auto;
`;

const Title = styled.div`
  ${textStyle("title2")};
  display: flex;
  align-items: center;
`;

