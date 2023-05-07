import Head from "next/head";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="/eurostile.ttf" />
      </Head>
      <Header />
      <About />
    </>
  );
}
