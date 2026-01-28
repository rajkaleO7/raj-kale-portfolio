export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen px-20 py-24 bg-[#0b0b0b]"
    >
      <h2 className="text-4xl font-bold mb-6">
        About <span className="text-lime-400">Me</span>
      </h2>

      <p className="text-gray-400 max-w-3xl leading-relaxed">
        I am Raj Kale, a passionate Full Stack Developer with strong interest in
        building scalable and modern web applications. I enjoy working with
        technologies like React, TypeScript, Node.js, and MongoDB. I am
        currently focused on improving my problem-solving skills and creating
        real-world projects that help users and businesses.
      </p>

      <div className="grid grid-cols-2 gap-10 mt-12">
        <div>
          <h3 className="text-xl font-semibold text-lime-400 mb-4">
            Personal Info
          </h3>
          <ul className="text-gray-300 space-y-2">
            <li>
              <span className="text-white">Name:</span> Raj Kale
            </li>
            <li>
              <span className="text-white">Role:</span> Full Stack Developer
            </li>
            <li>
              <span className="text-white">Email:</span>{' '}
              rajramnathkale841@gmail.com
            </li>
            <li>
              <span className="text-white">Location:</span> India
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-lime-400 mb-4">
            Technical Skills
          </h3>
          <ul className="text-gray-300 space-y-2">
            <li>✔ React, TypeScript, JavaScript</li>
            <li>✔ Node.js, Express</li>
            <li>✔ MongoDB, MySQL</li>
            <li>✔ Git, GitHub</li>
            <li>✔ REST APIs</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
