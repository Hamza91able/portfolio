import Header from "./Components/Header/Header";
import About from "./Pages/About/About";
import Experience from "./Pages/Experience/Experience";
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
      </Scroll>
    </>
  );
}
