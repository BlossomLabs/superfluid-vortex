import { Route } from "wouter";
import { Terminal } from "./Terminal";

export const Routes = () => (
  <div>
    <Route path="/">
      <Terminal />
    </Route>
  </div>
);
