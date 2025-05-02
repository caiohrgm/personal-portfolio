import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

interface ProjectData {
  projectName: string,
  companyName: string;
  industry: string;
  description: string;
  roleTitle: string;
  roleDescription: string;
  images: string[];
  additionalRoles: { title: string; text: string }[];
}

const images = import.meta.glob('../../assets/projects_images/*.{png,jpg,jpeg,svg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

export default function ProjectTemplate() {
  const { projectId } = useParams();
  const [data, setData] = useState<ProjectData | null>(null);

  useEffect(() => {
    console.log("Tentando carregar:", `../data/${projectId}.json`);
    import(`./Data/projectsData/${projectId}.json`)
      .then((module) => setData(module.default))
      .catch((err) => {
        console.error("Erro ao carregar dados do projeto:", err);
        console.error("projectId:", projectId);
        alert("Erro ao carregar projeto: " + projectId);
      });
  }, [projectId]);

  if (!data) {
    return <div className="text-center mt-16 text-white">Project Not found.</div>;
  }

  const getImageSrc = (filename: string): string | undefined => {
    const entry = Object.entries(images).find(([path]) =>
      path.endsWith(`/assets/projects_images/${filename}`)
    );
    return entry?.[1];
  };

  return (
    <section className="bg-white text-gray-800 py-6 mt-16 rounded-b-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-start mb-6">
          <button
            onClick={() => window.history.back()}
            className="text-sm text-light-purple-300 hover:underline mb-4"
          >
            ← Back to Projects
          </button>
          <h2 className="text-sm font-bold text-zinc-700 opacity-25">
            {data.projectName}
          </h2>
          <div className="w-full h-px bg-zinc-700 opacity-25 mt-2"></div>
        </div>
        {/* Company Intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-2">
              {data.industry}
            </h2>
            <h1 className="text-4xl font-bold text-light-purple-300 mb-4">

              {data.companyName}
            </h1>
            <p className="text-gray-600">{data.description}</p>
          </div>
          <div className="bg-gray-200 flex items-center justify-center rounded-md w-64 h-auto mx-auto">
            <img
              src={getImageSrc(data.images[0])}
              alt="time-series-forecast"
              className="h-full object-contain rounded-md"
            />
          </div>
        </div>

        {/* Role at Company */}
        <div>
          <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-2">
            My Role
          </h3>
          <h2 className="text-2xl font-bold text-light-purple-300 mb-2">

            {data.roleTitle}
          </h2>
          <p className="text-gray-600 mb-8">{data.roleDescription}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.images.slice(1).map((img, i) => (
              <div
                key={i}
                className="flex items-center justify-center rounded-md"
              >
                <img
                  src={getImageSrc(img)}
                  alt={`project-image-${i + 1}`}
                  className="w-auto h-64 object-contain rounded-md"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            {data.additionalRoles.map((role, i) => (
              <div key={i}>
                <h4 className="font-bold text-dark-blue-900 mb-1">
                  {role.title}
                </h4>
                <p className="text-gray-600">{role.text}</p>
              </div>
            ))}
          </div>

          <footer className="mt-16 text-sm text-gray-400 border-t pt-4">
            © 2025 Caio Medeiros. All rights reserved.

          </footer>
        </div>
      </div>
    </section>
  );
}
