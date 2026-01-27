import Image from "next/image";

import NavBar from "../components/NavBar";
import Landing from "../components/Landing";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Landing />
      <Technologies />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
