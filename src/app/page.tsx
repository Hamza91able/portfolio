import Head from "next/head";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";
import Experience from "./Pages/Experience/Experience";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="/eurostile.ttf" />
      </Head>
      <Header />
      <About />
      <Experience />
    </>
  );
}
