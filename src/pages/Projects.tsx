const projects = [
  {
    title: "Project One",
    description:
      "Description of project one with technologies used, impact, or role.",
    url: "https://project-link-1.com",
  },
  {
    title: "Project Two",
    description:
      "Description of project two with technologies used, impact, or role.",
    url: "https://project-link-2.com",
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto space-y-8">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map(({ title, description, url }) => (
          <a
            key={title}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-700">{description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
