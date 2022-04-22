import styled from "styled-components";
import { Redirect, Route } from "wouter";
import { Terminal } from "./Terminal";

export const Routes = () => (
  <div style={{ height: "90%" }}>
    <Route path="/terminal">
      <Terminal />
    </Route>
    <Route path="/">
      <Redirect to="/terminal" />
    </Route>
  </div>
);
