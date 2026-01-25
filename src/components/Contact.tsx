export default function Contact() {
  return (
    <section className="min-h-screen w-full px-20 pt-32">
      <h2 className="text-4xl font-bold mb-4">
        Contact <span className="text-lime-400">Me</span>
      </h2>

      <p className="text-gray-400 max-w-2xl mb-10">
        Feel free to reach out to me for collaborations, projects, or any
        queries. I am always open to discussing new opportunities.
      </p>

      <div className="grid grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-lime-400 mb-4">
            Get In Touch
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>
              <b>Name:</b> Raj Kale
            </li>
            <li>
              <b>Email:</b> rajramnathkale841@gmail.com
            </li>
            <li>
              <b>Phone:</b> +91 9307148073
            </li>
            <li>
              <b>Location:</b> India
            </li>
            <li>
              <b>GitHub:</b>{' '}
              <a
                href="https://github.com/rajkaleO7"
                target="_blank"
                className="text-lime-400 hover:underline"
              >
                github.com/rajkale07
              </a>
            </li>

            <li>
              <b>LinkedIn:</b>{' '}
              <a
                href="https://www.linkedin.com/in/rajkale07"
                target="_blank"
                className="text-lime-400 hover:underline"
              >
                linkedin.com/in/rajkale07
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
