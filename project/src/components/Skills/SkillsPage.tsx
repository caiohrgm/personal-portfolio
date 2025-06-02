export default function Skills() {
  return (
    <section className="relative bg-white mt-[-20px] sm:mt-[-30px] md:mt-[-40px] lg:mt-[-60px] py-6 rounded-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-start mb-6">
          <h2 className="text-sm font-bold text-zinc-700 opacity-25">Skills</h2>
          <div className="w-full h-px bg-zinc-700 opacity-25 mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div>
            <h1 className="text-3xl font-raleway-100 text-light-purple-300">
              Technical Skills
            </h1>
            <p className="text-gray-600">
              Throughout my professional journey, I have developed skills in various programming languages, backend frameworks, modern version control and deployment practices, as well as experience with some containerization tools.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Linguagens */}
          <div> 
            <h3 className="font-raleway-700 text-light-purple-300 tracking-wider uppercase mb-2">
              Programming Language
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
              Version Control
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Git / GitHub / GitLab</li>
              <li>Docker Hub</li>
            </ul>
          </div>

          {/* Database and Other tools */}
          <div>
            <h3 className="font-raleway-700 text-light-purple-300 tracking-wider uppercase mb-2">
              Databases & Other Tools
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
              Soft Skills
            </h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Clear and objective communication</li>
              <li>Organization and teamwork</li>
              <li>Fluency in English</li>
              <li>Strong problem-solving skills</li>
              <li>Analytical thinking</li>
              <li>Ease in communicating and interacting with others</li>
            </ul>
          </div>
        </div>
        <footer className="mt-16 text-sm text-gray-400 border-t pt-4">
          © 2025 Caio Medeiros. All rights reserved.
        </footer>
      </div>
    </section>
  );
}
