import { RouteConfig } from "react-router-config";

// components
import { AppShell } from "../foundation/components/pages/AppShell";
import { Index, About } from "./route";

const routes: RouteConfig[] = [
  {
    component: AppShell,
    routes: [
      {
        path: "/",
        exact: true,
        component: Index
      },
      {
        path: "/about",
        exact: true,
        component: About
      }
    ]
  }
];

export { routes };
