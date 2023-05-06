import styles from "./about.module.css";
import Intro from "./Components/Intro";
import AboutCard from "./Components/AboutCard";
import { aboutData } from "@/app/constants/about";

export default function About() {
  return (
    <>
      <Intro />
      <div className="relative isolate overflow-hidden py-24 sm:py-20 lg:mt-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className={styles.headingDivider}>About Me</h2>
          <div className="grid lg:grid-cols-2">
            {aboutData.map((about, index) => (
              <AboutCard key={index} about={about} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
