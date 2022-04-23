import { Route } from "wouter";
import { Terminal } from "./Terminal";

export const Routes = () => (
  <div style={{ height: "90%" }}>
    <Route path="/">
      <Terminal />
    </Route>
  </div>
);
