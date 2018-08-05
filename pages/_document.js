import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="description" content="Home Inspectors California" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta name="author" content="Home Inspectors California " />
          <meta property="og:url" content="https://homeinspectorscalifornia.com/" />
          <meta property="og:site_name" content="Home Inspectors California " />
          <meta property="og:title" content="Welcome to Home Inspectors California " />
          <meta property="og:description" content="Bringing Peace Of Mind Back To Your Home" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="http://img1.wsimg.com/isteam/stock/jypqgY" />
          <meta property="og:locale" content="en_US" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="Home Inspectors California " />
          <meta name="twitter:description" content="Welcome to Home Inspectors California" />
          <meta name="twitter:image" content="http://img1.wsimg.com/isteam/stock/jypqgY" />
          <meta name="twitter:image:alt" content="Home Inspectors California " />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-117085950-1" />
          <script
            dangerouslySetInnerHTML={{
              __html:
                "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments); }gtag('js', new Date());gtag('config', 'UA-117085950-1');"
            }}
          />
          {/* animate css */}
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
          {/* font awesome */}
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          {/* bootstrap v4 */}
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css"
            integrity="sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb"
            crossOrigin="anonymous"
          />

          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
