import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Stats from './components/stats';
import Timeline from './components/TimeLine';

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Timeline />
    </div>
  );
}
