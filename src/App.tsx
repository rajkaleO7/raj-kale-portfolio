import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Stats from './components/stats';
import Timeline from './components/TimeLine';

export default function App() {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Timeline />
    </div>
  );
}
