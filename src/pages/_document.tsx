import * as React from 'react';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { setup } from 'twind';
import { virtualSheet, getStyleTagProperties } from 'twind/server';
import twindConfig from '../twind.config';

const sheet = virtualSheet();

setup({ ...twindConfig, sheet });

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    sheet.reset();
    const initialProps = await Document.getInitialProps(ctx);
    const { id, textContent } = getStyleTagProperties(sheet);
    const styleProps = {
      id,
      key: id,
      dangerouslySetInnerHTML: {
        __html: textContent,
      },
    };

    return {
      ...initialProps,
      styles: [
        ...initialProps.styles,
        React.createElement(`style`, styleProps), // Insere o estilo do Twind diretamente
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script async src="https://scripts.simpleanalyticscdn.com/latest.js" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
