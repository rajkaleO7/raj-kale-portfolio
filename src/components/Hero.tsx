export default function Hero() {
  return (
    <section className="flex px-10 py-20 items-center">
      <div className="w-1/2">
        <p className="text-lime-400 uppercase">Welcome to my portfolio</p>
        <h1 className="text-5xl font-bold mt-4">Hi, I am Raj Kale</h1>
        <p className="mt-4 text-gray-400">
          A passionate full stack developer building modern web applications.
        </p>
        <button className="mt-6 bg-lime-400 text-black px-6 py-3 rounded-full">
          Contact Me
        </button>
      </div>
      <div className="w-1/2 flex justify-center">
        <img
          src="/profile.png"
          className="w-72 h-72 rounded-full object-cover border-4 border-lime-400"
        />
      </div>
    </section>
  );
}
