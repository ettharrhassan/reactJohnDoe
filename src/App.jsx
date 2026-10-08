import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./components/Skills/Skills"

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills/>
      <Experience/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
