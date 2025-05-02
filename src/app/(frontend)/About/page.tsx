import React from "react";
import AboutSection1 from "./components/AboutSection1";
import AboutSection2 from "./components/AboutSection2";
import AboutSection3 from "./components/AboutSection3";
import AboutSection4 from "./components/AboutSection4";
import { generatePageMetadata } from "@/utils/metadata";

function About() {
  return (
    <div>
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <AboutSection4 />
    </div>
  );
}

export const metadata = generatePageMetadata(
  "About",
  "Learn more about Namra Vamja."
);
export default About;
