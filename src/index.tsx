/* @refresh reload */
import { render } from "solid-js/web";
import { lazy, Component } from "solid-js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import { Router, Route } from "@solidjs/router";
import { FlowSwitch} from './pages/FlowSwitch';

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

// const NotFound1 = lazy(() => import("./pages/NotFound1"));
// const NotFound2 = lazy(() => import('./pages/NotFound2'));
// const NotFound3 = lazy(() => import('./pages/NotFound3'));
// const NotFound4 = lazy(() => import('./pages/NotFound4'));
// const NotFound5 = lazy(() => import('./pages/NotFound5'));
// const NotFound6 = lazy(() => import('./pages/NotFound6'));


render(
  () => (
    <Router root={App}>
      <Route path="nf2" component={NotFound2} />
      <Route path="nf6" component={NotFound6} />
      <Route path="/flow-switch" component={FlowSwitch} />
    </Router>
  ),
  root!
);
