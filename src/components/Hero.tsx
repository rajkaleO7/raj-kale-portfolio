import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="flex items-center px-16 py-20">
      <div className="w-1/2">
        <p className="text-lime-400 uppercase tracking-widest text-sm">
          Welcome to my portfolio
        </p>

        <h1 className="text-5xl font-bold mt-4 leading-tight">
          Hi, I am <span className="text-lime-400">Raj Kale</span>
          <br />A Full Stack Developer
        </h1>

        <p className="text-gray-400 mt-4 w-4/5">
          I build modern, scalable web applications using React, TypeScript and
          Node.js.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-6 bg-lime-400 text-black px-6 py-3 rounded-full font-semibold
                     hover:bg-black hover:text-lime-400 border border-lime-400 transition"
        >
          Contact Me
        </Link>
      </div>

      <div className="w-1/2 flex items-center justify-center">
        <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-lime-400 flex items-center justify-center">
          <img
            src="/profile.png"
            alt="Raj Kale"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
