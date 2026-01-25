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

        <button className="mt-6 bg-lime-400 text-black px-6 py-3 rounded-full font-semibold">
          Contact Me
        </button>
      </div>

      <div className="w-1/2 flex justify-center">
        <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-lime-400">
          <img src="/profile.png" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}
