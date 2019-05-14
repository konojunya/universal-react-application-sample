import { RouteConfig } from "react-router-config";

// components
import { AppShell } from "../foundation/components/pages/AppShell";
import Index from "../foundation/components/pages/Index";
import About from "../foundation/components/pages/About";

const routes: RouteConfig[] = [
  {
    component: AppShell,
    routes: [
      {
        path: "/",
        exact: true,
        ...Index
      },
      {
        path: "/about",
        exact: true,
        ...About
      }
    ]
  }
];

export { routes };
