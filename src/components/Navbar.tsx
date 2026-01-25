type Props = {
  setActiveSection: (section: 'home' | 'about') => void;
};

export default function Navbar({ setActiveSection }: Props) {
  return (
    <nav className="w-full flex items-center justify-between px-20 py-6">
      <h1 className="text-2xl font-bold text-lime-400">RK</h1>

      <ul className="flex gap-8 text-sm text-gray-300">
        <li
          onClick={() => setActiveSection('home')}
          className="cursor-pointer hover:text-lime-400"
        >
          Home
        </li>
        <li
          onClick={() => setActiveSection('about')}
          className="cursor-pointer hover:text-lime-400"
        >
          About
        </li>
        <li className="cursor-pointer hover:text-lime-400">Services</li>
        <li className="cursor-pointer hover:text-lime-400">Projects</li>
        <li className="cursor-pointer hover:text-lime-400">Contact</li>
      </ul>

      <button className="bg-lime-400 text-black px-5 py-2 rounded-full font-semibold">
        Download CV
      </button>
    </nav>
  );
}
