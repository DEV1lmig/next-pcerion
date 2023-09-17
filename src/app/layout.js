import Head from "next/head";
import "./globals.css";

export default function layout({ title }) {
  return (
    <>
      <Head>
        <title>{title ? title + "- PCERION" : "PCERION"}</title>
        <meta name="description" content="PC ecommerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header>header</header>
        <footer>footer</footer>
      </div>
    </>
  );
}
