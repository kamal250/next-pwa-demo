import React from "react";
import Head from "next/head";

const Header = () => {
  return (
    <Head>
      <title>NextJS PWA Demo</title>
      <meta name="application-name" content="NextJS PWA Demo" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="NextJS PWA Demo" />
      <meta name="description" content="Demonstrate the capability of NextJS to build PWA" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="msapplication-TileColor" content="#2B5797" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="theme-color" content="#000000" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />

      <link rel="manifest" href="/static/manifest.json" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content="https://confident-kowalevski-0f2dd6.netlify.app" />
      <meta name="twitter:title" content="NextJS PWA Demo" />
      <meta name="twitter:description" content="Demonstrate the capability of NextJS to build PWA" />
      <meta
        name="twitter:image"
        content="https://confident-kowalevski-0f2dd6.netlify.app/static/icons/android-chrome-192x192.png"
      />
      <meta name="twitter:creator" content="@joshi_kamal250" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="NextJS PWA Demo" />
      <meta property="og:description" content="Demonstrate the capability of NextJS to build PWA" />
      <meta property="og:site_name" content="NextJS PWA Demo" />
      <meta property="og:url" content="https://confident-kowalevski-0f2dd6.netlify.app" />
      <meta
        property="og:image"
        content="https://confident-kowalevski-0f2dd6.netlify.app/static/images/icons/icon-128x128.png"
      />
    </Head>
  );
};

export default Header;
