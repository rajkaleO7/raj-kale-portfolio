export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6">
      <h1 className="text-2xl font-bold text-lime-400">RK</h1>
      <ul className="flex gap-6 text-sm">
        <li className="text-lime-400">Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <button className="bg-lime-400 text-black px-4 py-2 rounded-full">
        Download CV
      </button>
    </nav>
  );
}
