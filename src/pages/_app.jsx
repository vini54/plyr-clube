import { MantineProvider } from "@mantine/core";
import Head from "next/head";

export const metadata = {
  title: "",
  description: "",
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Front-end project create with next.js"
        />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Clube plyr.me</title>
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          globalStyles: (theme) => ({
            "*, *::before, *::after": {
              boxSizing: "border-box",
              padding: 0,
              margin: 0,
              color: "inherit",
              textDecoration: "none",
            },
          }),
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
