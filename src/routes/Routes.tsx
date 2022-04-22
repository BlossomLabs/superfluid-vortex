import { Redirect, Route } from "wouter";

export const Routes = () => (
  <div>
    <Route path="/terminal">Terminal</Route>
    <Route path="/">
      <Redirect to="/terminal" />
    </Route>
  </div>
);
