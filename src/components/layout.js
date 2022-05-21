import React from "react";
import Header from "./header";
import Details from "./details";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Letter from "./letter";
export default function Layout() {
  return (
    <main>
      <Header />
      <Details />
      <Education />
      <Experience />
      <Skills />
      <Letter />
    </main>
  );
}
