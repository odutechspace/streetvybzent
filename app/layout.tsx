import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import React from "react";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import Script from "next/script";

const GA_TRACKING_ID = "G-8WR6PQ0HF6";

export const metadata: Metadata = {
  title: {
    default: "Streetvybz Entertainment",
    template: `%s - We help you create the event everyone will love`,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html suppressHydrationWarning lang="en">
      <head>
        {/* Load Google Analytics */}
        <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />

        {/* Initialize Google Analytics */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', { page_path: window.location.pathname });
          `}
        </Script>
        <title>Streetvybz Entertainment</title>
      </head>
      <body
          className={clsx(
              "min-h-screen bg-background font-body antialiased",
              fontSans.variable,
          )}
      >
      <Providers themeProps={{attribute: "class", defaultTheme: "light"}}>
        {children}
      </Providers>
      </body>
      </html>
  );
}
