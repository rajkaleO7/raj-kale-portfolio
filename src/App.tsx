import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Stats from './components/stats';
import Timeline from './components/TimeLine';

export default function App() {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Stats />
              <Timeline />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />;
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
