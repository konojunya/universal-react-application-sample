import * as React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routes } from "./router";
import { Navigator } from "./client/Navigator";

hydrate(
  <BrowserRouter>
    <Navigator>{renderRoutes(routes)}</Navigator>
  </BrowserRouter>,
  document.getElementById("app")
);
