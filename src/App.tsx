import { useState } from 'react';
import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Stats from './components/stats';
import Timeline from './components/TimeLine';

export default function App() {
  const [activeSection, setActiveSection] = useState<'home' | 'about'>('home');

  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen">
      <Navbar setActiveSection={setActiveSection} />

      {activeSection === 'home' && (
        <>
          <Hero />
          <Stats />
          <Timeline />
        </>
      )}

      {activeSection === 'about' && <About />}
    </div>
  );
}
