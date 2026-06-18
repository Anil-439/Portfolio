import logo from './logo.svg';
import './App.css';


import navbar from "./components/navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import footer from "./components/footer";
import Skills  from './components/Skills';

function App() {
  return (
     <>
      <navbar />
      <Hero />
      <About />
      <Project />
      <Contact />
      <footer />
    </>

  )
}

export default App;
