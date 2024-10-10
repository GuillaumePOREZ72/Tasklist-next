"use client";

import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";

/**
 * The root layout of the application.
 *
 * This component renders the HTML structure and Chakra Provider for the app.
 *
 * @param {{ children: React.ReactNode }} props
 * @returns {JSX.Element}
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
