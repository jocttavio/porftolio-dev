import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { Experience } from "./components/Experience";
import Skills from "./components/Skills";
import About from "./components/About";
// import Curve from "./components/layouts/Curve";
export default function Home() {
  return (
    <main>
        {/* <Curve backgroundColor="#000"> */}
        <Hero />

        <Experience />

        <Projects />

        <Skills />

        <About />
        {/* <Blogs /> */}
        {/* <Newsletter /> */}
    {/* </Curve> */}
      </main>
  );
}
