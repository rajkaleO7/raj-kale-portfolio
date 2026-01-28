import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-20 py-6">
      <h1 className="text-2xl font-bold text-lime-400">RK</h1>

      <ul className="flex gap-8 text-sm text-gray-300">
        <li className="hover:text-lime-400">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-lime-400">
          <Link to="/about">About</Link>
        </li>
        {/* <li className="hover:text-lime-400">
          <Link to="/services">Services</Link>
        </li> */}
        <li className="hover:text-lime-400">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="hover:text-lime-400">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <a
        href="/public/Raj-Kale-CV.pdf"
        className="bg-lime-400 text-black px-5 py-2 rounded-full font-semibold"
        download
      >
        Download CV
      </a>
    </nav>
  );
}
