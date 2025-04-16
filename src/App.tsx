import React from 'react';
import { Hero } from './components/Hero';
import { Slideshow } from './components/Slideshow';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { LanguageToggle } from './components/LanguageToggle';

function App() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            Brilliant Esystems
          </div>
          <LanguageToggle />
        </nav>
      </header>
      <main>
        <Slideshow />
        <Hero />
        <Stats />
        <Features />
      </main>
    </>
  );
}

export default App;
