import React from "react";
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";

import { getCssText, globalCss } from "../../stitches.config";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="jmes" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>

        <body style={{ margin: 0, backgroundColor: "#c7b6fc" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// class Document extends NextDocument {
//   static async getInitialProps(
//     ctx: DocumentContext
//   ): Promise<DocumentInitialProps> {
//     const initialProps = await Document.getInitialProps(ctx);

//     return initialProps;
//   }
// }
// export default Document;
