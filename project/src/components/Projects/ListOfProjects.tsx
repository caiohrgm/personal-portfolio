import { Link } from "react-router-dom";
import { rawProjectsData } from "./Data/presentationProjectData/projecstsData";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

export default function ListOfProjects() {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState<Record<string, { title: string; description: string }>>({});

  // Atualiza os projetos sempre que o idioma mudar
  useEffect(() => {
    const lang = i18n.language.startsWith("pt") ? "pt" : "en";

    const newProjects = Object.entries(rawProjectsData).reduce((acc, [slug, data]) => {
      acc[slug] = {
        title: data[lang].projectName,
        description: data[lang].summary,
      };
      return acc;
    }, {} as Record<string, { title: string; description: string }>);

    setProjects(newProjects);
  }, [i18n.language]);

  return (
    <section className="relative bg-white mt-[-20px] sm:mt-[-30px] md:mt-[-40px] lg:mt-[-60px] py-6 rounded-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-4">
        <div className="flex flex-col items-start mb-6">
          <h2 className="text-sm font-bold font-ibm-mono text-zinc-700 opacity-35">
            {t("projectsSection.label")}
          </h2>
          <div className="w-full h-px bg-zinc-700 opacity-30 mt-2"></div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-raleway-100 text-light-purple-300">
            {t("projectsSection.title")}
          </h2>
          <p className="mt-4 text-lg text-dark-purple-900 text-justify">
            {t("projectsSection.description")}
          </p>
        </div>

        {/* MOBILE: sempre carrossel */}
        <div className="md:hidden overflow-x-auto flex space-x-6 pb-8 scroll-smooth custom-scrollbar snap-x snap-mandatory">
          {Object.entries(projects).map(([slug, project]) => (
            <div
              key={slug}
              className="bg-white text-light-purple-300 border border-light-purple-300 p-6 rounded-lg 
                flex flex-col justify-between flex-shrink-0 w-full max-w-xs sm:max-w-sm min-h-[320px] snap-center"
            >
              <h2 className="text-lg font-raleway-700 text-light-purple-300">
                {project.title}
              </h2>
              <p className="text-dark-purple-900 mt-2 font-raleway-100 flex-grow">
                {project.description}
              </p>
              <Link to={`/projects/${slug}`}>
                <button className="bg-mint-300 hover:bg-mint-medium text-light-purple-300 font-bold 
                                  font-mono w-full px-6 py-2 mt-6 rounded-lg shadow-md transition duration-300 
                                  cursor-pointer border border-mint-medium hover:text-vanilla-gray-300">
                  {t("projectsSection.readMore")}
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* DESKTOP: carrossel se >= 4, senão grid */}
        {Object.keys(projects).length >= 4 ? (
          <div className="hidden md:flex overflow-x-auto space-x-6 pb-8 scroll-smooth custom-scrollbar snap-x snap-mandatory">
            {Object.entries(projects).map(([slug, project]) => (
              <div
                key={slug}
                className="bg-white text-light-purple-300 border border-light-purple-300 p-6 rounded-lg 
                  flex flex-col justify-between flex-shrink-0 w-full max-w-xs md:max-w-md min-h-[320px] snap-center"
              >
                <h2 className="text-lg font-raleway-700 text-light-purple-300">
                  {project.title}
                </h2>
                <p className="text-dark-purple-900 mt-2 font-raleway-100 flex-grow">
                  {project.description}
                </p>
                <Link to={`/projects/${slug}`}>
                  <button className="bg-mint-300 hover:bg-mint-medium text-light-purple-300 font-bold 
                                    font-mono w-full px-6 py-2 mt-6 rounded-lg shadow-md transition duration-300 
                                    cursor-pointer border border-mint-medium hover:text-vanilla-gray-300">
                    {t("projectsSection.readMore")}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="hidden md:flex flex-wrap justify-center gap-6 pb-8">
            {Object.entries(projects).map(([slug, project]) => (
              <div
                key={slug}
                className="bg-white text-light-purple-300 border border-light-purple-300 p-6 rounded-lg 
                  flex flex-col justify-between w-full sm:w-[45%] md:w-[30%] min-h-[320px]"
              >
                <h2 className="text-lg font-raleway-700 text-light-purple-300">
                  {project.title}
                </h2>
                <p className="text-dark-purple-900 mt-2 font-raleway-100 flex-grow">
                  {project.description}
                </p>
                <Link to={`/projects/${slug}`}>
                  <button className="bg-mint-300 hover:bg-mint-medium text-light-purple-300 font-bold 
                                    font-mono w-full px-6 py-2 mt-6 rounded-lg shadow-md transition duration-300 
                                    cursor-pointer border border-mint-medium hover:text-vanilla-gray-300">
                    {t("projectsSection.label")}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
