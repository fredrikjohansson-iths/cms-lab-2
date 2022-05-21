import React from "react";
import Header from "./header";
import Details from "./details";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Footer from "./footer";
export default function Layout() {
  return (
    <main>
      <Header />
      <Details />
      <Education />
      <Experience />
      <Skills />
      <Footer />
    </main>
  );
}
