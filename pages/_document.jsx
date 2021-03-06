import Document, { Head, Main, NextScript, Html } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link href="/static/min.css" rel="stylesheet" />
          <link rel="manifest" href="/static/manifest.webmanifest" />
          <link
            rel="shortcut icon"
            href="/static/images/icons/icon-72x72.png"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/tonsky/FiraCode@4/distr/fira_code.css"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
