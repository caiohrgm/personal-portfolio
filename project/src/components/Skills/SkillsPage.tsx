import { useTranslation } from "react-i18next";


export default function Skills() {
  const { t } = useTranslation();
  return (
    <section className="relative bg-white mt-[-20px] sm:mt-[-30px] md:mt-[-40px] lg:mt-[-60px] py-6 rounded-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-start mb-6">
          <h2 className="text-sm font-bold text-zinc-700 opacity-25">{t("skillsSection.title")}</h2>
          <div className="w-full h-px bg-zinc-700 opacity-25 mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h1 className="text-3xl font-raleway-100 text-light-purple-300">
              {t("skillsSection.technicalSkillsTitle")}
            </h1>
            <p className="text-gray-600">
              {t("skillsSection.technicalSkillsDescription")}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Linguagens */}
          <div> 
            <h3 className="font-raleway-700 text-light-purple-300 tracking-wider uppercase mb-2">
              {t("skillsSection.programmingLanguagesTitle")}
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Python</li>
              <li>JavaScript / TypeScript</li>
              <li>Java</li>
            </ul>
          </div>

          {/* Frameworks Backend */}
          <div>
            <h3 className="font-raleway-700 text-light-purple-300 tracking-wider uppercase mb-2">
              Frameworks
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Django</li>
              <li>NestJS</li>
              <li>Node.js / Express</li>
            </ul>
          </div>

          {/* Deploy & Containerização */}
          <div>
            <h3 className="font-raleway-700 text-light-purple-300 tracking-wider uppercase mb-2">
              Deploy
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Docker</li>
              <li>Heroku</li>
              <li>Vercel</li>
            </ul>
          </div>

          {/* Versionamento & DevOps */}
          <div>
            <h3 className="font-raleway-700 text-light-purple-300 tracking-wider uppercase mb-2">
              {t("skillsSection.versionControlTitle")}
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Git / GitHub / GitLab</li>
              <li>Docker Hub</li>
            </ul>
          </div>

          {/* Database and Other tools */}
          <div>
            <h3 className="font-raleway-700 text-light-purple-300 tracking-wider uppercase mb-2">
              {t("skillsSection.databasesAndToolsTitle")}
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>PostgreSQL, MySQL, MongoDB</li>
              <li>Jupyter Notebook, VS Code</li>
              <li>Tensorflow, MLFlow</li>
              <li>Windows, Linux</li>
              <li>Microsoft Office 365</li>
            </ul>
          </div>

          {/* Soft Skills (opcional) */}
          <div>
            <h3 className="font-raleway-700 text-light-purple-300 tracking-wider uppercase mb-2">
              {t("skillsSection.softSkillsTitle")}
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>{t("skillsSection.softSkills.0")}</li>
              <li>{t("skillsSection.softSkills.1")}</li>
              <li>{t("skillsSection.softSkills.2")}</li>
              <li>{t("skillsSection.softSkills.3")}</li>
              <li>{t("skillsSection.softSkills.4")}</li>
              <li>{t("skillsSection.softSkills.5")}</li>
            </ul>
          </div>
        </div>
        <footer className="mt-16 text-sm text-gray-400 border-t pt-4">
          {t("skillsSection.footer")}
        </footer>
      </div>
    </section>
  );
}
