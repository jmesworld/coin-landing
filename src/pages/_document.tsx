import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

import { getCssText } from "../../stitches.config";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="jmes" dangerouslySetInnerHTML={{ __html: getCssText() }} />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>

        <body
          style={{
            margin: 0,
            backgroundColor: "#c7b6fc",
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
