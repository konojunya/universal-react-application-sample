import * as React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routes } from "./router";
import { loadableReady } from "@loadable/component";

loadableReady(() => {
  hydrate(
    <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>,
    document.getElementById("app")
  );
});
