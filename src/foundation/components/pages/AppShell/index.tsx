import * as React from "react";
import { renderRoutes, RouteConfig } from "react-router-config";
import { Link } from "react-router-dom";

interface Props {
  route: RouteConfig;
}
export const AppShell: React.FunctionComponent<Props> = props => (
  <>
    <header>header</header>
    <ul>
      <li>
        <Link to="/">index</Link>
      </li>
      <li>
        <Link to="/about">about</Link>
      </li>
    </ul>

    <div>{renderRoutes(props.route.routes)}</div>
  </>
);
