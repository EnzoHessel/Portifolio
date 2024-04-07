import NavBar from "./components/NavBar";
import Home from './components/Home';
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Works from "./components/Works";
import Experience from "./components/Experience";
// import Contact from "./components/Contact";
// import Portfolio from "./components/Portfolio";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Works />
      <Experience />
      {/* <Contact /> */}

      <SocialLinks />
    </div>
  );
}

export default App;
