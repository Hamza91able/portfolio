import styles from "./about.module.css";
import Intro from "./Components/Intro";
import AboutCard from "./Components/AboutCard";
import { aboutData } from "@/app/constants/about";

export default function About() {
  return (
    <div id="intro">
      <Intro />
      <div className="relative isolate overflow-hidden py-24 sm:py-20 lg:mt-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className={styles.headingDivider}>About Me</h2>
        </div>
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 border border-white rounded-xl bg-white">
            {aboutData.map((about, index) => (
              <AboutCard key={index} index={index} about={about} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
