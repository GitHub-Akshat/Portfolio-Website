import About from "./Components/About";
import Education from "./Components/Education";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Skills from "./Components/skills";

const App = () => {
  return (
  <div className="overflow-x-hidden antialiased">
    <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] dark:bg-neutral-950"/>
    </div>
    <div className="container mx-auto px-8">
      <Nav/>
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  </div>
  );
};

export default App;
