import { Analytics } from "@vercel/analytics/react";

import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import About from "./Pages/About/About";
import Experience from "./Pages/Experience/Experience";
import Testimonials from "./Pages/Testimonials/Testimonials";
import Work from "./Pages/Work/Work";
import Scroll from "./Scroll";

export default function Home() {
  return (
    <>
      <Scroll>
        <Header />
        <About />
        <Experience />
        <Work />
        <Testimonials />
        <Footer />
      </Scroll>
      <Analytics />
    </>
  );
}
