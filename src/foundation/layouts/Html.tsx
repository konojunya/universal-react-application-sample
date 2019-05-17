import * as React from "react";
import * as serialize from "serialize-javascript";

interface Props {
  markup: string;
  state: string;
  scripts: any;
}
export const Html: React.FunctionComponent<Props> = props => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="format-detection"
          content="telephone=no,address=no,email=no"
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,viewport-fit=cover"
        />
      </head>
      <body>
        <div id="app">{props.children}</div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__STATE__=${serialize({ hoge: 1 }).replace(
              /</g,
              "\\u003c"
            )};`
          }}
        />
        <script src={`/assets/vendor.js`} />
        <script async={true} src={`/assets/app.js`} />
      </body>
    </html>
  );
};
