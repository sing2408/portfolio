import React, { useState, useEffect } from 'react'; // Import useEffect
import './App.css';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import "./index.css";
import { Home } from './components/sections/Home';
import { MobileMenu } from './components/MobileMenu';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!document.getElementById('T9m4atKcm_3koYAj_o7fD')) {
      const script = document.createElement('script');
      script.id = 'T9m4atKcm_3koYAj_o7fD';
      script.src = 'https://www.chatbase.co/embed.min.js';
      script.domain = 'www.chatbase.co';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []); 

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}{" "}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;