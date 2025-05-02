import { Link } from "react-router-dom";

export default function Projects() {
  const projectList = [
    { id: "dell", name: "Projeto DELL" },
    { id: "pactomais", name: "Projeto Pactomais" },
    { id: "siteware", name: "Projeto Siteware" },
  ];

  return (
    <section className="bg-dark-purple-900 text-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Meus Projetos</h1>
        <ul className="space-y-4">
          {projectList.map((project) => (
            <li key={project.id}>
              <Link
                to={`/projects/${project.id}`}
                className="text-mint-300 hover:underline"
              >
                {project.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
