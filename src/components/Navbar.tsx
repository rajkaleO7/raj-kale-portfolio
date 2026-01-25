export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-6">
      <h1 className="text-3xl font-bold text-lime-400">RK</h1>

      <ul className="flex gap-8 text-sm text-gray-300">
        <li className="text-lime-400">Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <button className="bg-lime-400 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition">
        Download CV
      </button>
    </nav>
  );
}
