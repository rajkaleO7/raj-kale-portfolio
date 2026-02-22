export default function Projects() {
  const projects = [
    {
      title: 'Task Manager',
      repo: 'rajkale07/TaskManager',
      desc: 'Full-stack task management application with authentication and CRUD features.',
      tech: 'React, TypeScript, Node.js, Prisma',
      link: 'https://github.com/rajkaleO7/TaskManager',
    },
    {
      title: 'Personal Finance Manager',
      repo: 'rajkale07/Personal-Finance-Manager',
      desc: 'Web app to track income, expenses and savings with charts and reports.',
      tech: 'React, Tailwind, Node.js',
      link: 'https://github.com/rajkaleO7/Personal-Finance-Manager',
    },
    // {
    //   title: 'Final Year Project',
    //   repo: 'ghugekrushna21/Final-Year-Project',
    //   desc: 'Academic final year project demonstrating full-stack development and problem solving.',
    //   tech: 'Java / Web Tech',
    //   link: 'https://github.com/ghugekrushna21/Final-Year-Project',
    // },
    {
      title: 'Anna Daan Website',
      repo: 'rajkale07/Anna_daan',
      desc: 'NGO website for food donation awareness and management.',
      tech: 'HTML, CSS, JavaScript',
      link: 'https://github.com/rajkaleO7/Anna_daan',
    },
    {
      title: 'MahaLand',
      repo: 'rajkale07/MahaLand',
      desc: 'Web-based tool to measure land by selecting map points and calculate total area and estimated land value.',
      tech: 'HTML, CSS, JavaScript, Leaflet, PDF.js',
      link: 'https://github.com/rajkaleO7/MahaLand',
    },
    {
      title: 'Amazon Front Page Clone',
      tech: 'HTML, CSS',
      desc: 'Responsive clone of Amazon homepage UI.',
    },
    {
      title: 'Calculator App',
      tech: 'Java Swing',
      desc: 'Multi-functional calculator with converters.',
    },
    {
      title: 'Age & BMI Calculator',
      tech: 'Java',
      desc: 'Interactive app to calculate age and BMI.',
    },
    {
      title: 'Tic Tac Toe Game',
      tech: 'Java',
      desc: 'User vs User and User vs Computer modes.',
    },
  ];

  return (
    <section className="px-16 py-20">
      <h2 className="text-4xl font-bold text-lime-400 mb-10">My Projects</h2>

      <div className="grid grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111] border border-lime-400/30 rounded-xl p-6 hover:border-lime-400 transition"
          >
            <h3 className="text-xl font-semibold text-lime-400">
              {project.title}
            </h3>
            <p className="text-sm text-gray-400 mt-1">{project.tech}</p>
            <p className="text-gray-300 mt-3">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
