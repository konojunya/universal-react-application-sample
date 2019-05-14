import * as express from "express";
import * as React from "react";
import { join } from "path";
import { matchRoutes, renderRoutes } from "react-router-config";
import { routes } from "./router";
import { renderToNodeStream } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Html } from "./foundation/layouts/Html";
import { loadMatchPathData } from "./foundation/utils/loadMatchPathData";

const app = express();

app.use("/assets", express.static(join(__dirname, "../public")));

app.get("*", (req, res) => {
  loadMatchPathData(req.path).then(() => {
    const context = {};
    renderToNodeStream(
      <Html state={"state"}>
        <StaticRouter location={req.url} context={context}>
          {renderRoutes(routes)}
        </StaticRouter>
      </Html>
    ).pipe(res);
  });
});

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`listen on: http://0.0.0.0:${PORT}`);
});
