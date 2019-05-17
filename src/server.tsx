import * as express from "express";
import * as React from "react";
import { join } from "path";
import { renderRoutes } from "react-router-config";
import { routes } from "./router";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Html } from "./foundation/layouts/Html";
import { ChunkExtractor } from "@loadable/server";

const app = express();

app.use("/assets", express.static(join(__dirname, "../public")));

app.get("*", async (req, res) => {
  const context = {};
  const statsFile = join(__dirname, "../public/loadable-stats.json");
  const extractor = new ChunkExtractor({ statsFile });
  const jsx = extractor.collectChunks(
    <StaticRouter location={req.url} context={context}>
      {renderRoutes(routes)}
    </StaticRouter>
  );
  const markup = renderToString(jsx);
  const scriptTags = extractor.getScriptTags();
  res.send(
    renderToString(
      <Html markup={markup} state={"state"} scripts={scriptTags} />
    )
  );
});

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`listen on: http://0.0.0.0:${PORT}`);
});
