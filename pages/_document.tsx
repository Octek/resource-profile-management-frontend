import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <Script src="/lang-config.js" strategy="beforeInteractive" />
          <Script src="/translation.js" strategy="beforeInteractive" />
          <Script
            src="//translate.google.com/translate_a/element.js?cb=TranslateInit"
            strategy="afterInteractive"
          />
        </Head>
        <body style={{ margin: 0 }}>
          <div id="google_translate_element" />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
