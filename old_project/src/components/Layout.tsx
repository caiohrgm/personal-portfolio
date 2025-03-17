import { Link } from "react-router-dom";
import linkedin_logo from "../assets/linkedin_logo_colored.png";
import github_logo from "../assets/git_logo_gray.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-white min-h-screen w-full bg-indigo-400">
      <div className="max-w-[1366px] m-auto">
        {/* Header */}
        <header className="bg-black py-4 px-8 flex justify-between items-center border rounded-md">
          <nav className="flex space-x-6 text-[#9C9C9C] font-mono">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            <Link to="/about" className="hover:text-white">
              About Me
            </Link>
            <Link to="/projects" className="hover:text-white">
              Projects
            </Link>
            <Link to="/skills" className="hover:text-white">
              Skills & Expertise
            </Link>

            {/* Articles Dropdown */}
            <li className="relative group list-none">
              <Link to="/articles" className="text-amber-200 hover:text-white">
                Articles
              </Link>
              <div className="absolute left-0 mt-2 bg-[#1B1B1B] border border-[#1B1B1B] p-4 rounded-lg opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-300">
                <ul>
                  <li>
                    <Link
                      to="/articles/scientific-papers"
                      className="block text-[#9C9C9C] hover:text-white py-2"
                    >
                      Scientific Papers
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/articles/personal-articles"
                      className="block text-[#9C9C9C] hover:text-white py-2"
                    >
                      Personal Articles
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-4 text-[#9C9C9C]">
            <a
              href="https://www.linkedin.com/in/caiohmedeiros/"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={linkedin_logo}
                alt="LinkedIn"
                className="w-6 h-6 hover:opacity-80" // Adjusted size
              />
            </a>
            <a
              href="https://github.com/caiohrgm/"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={github_logo}
                alt="GitHub"
                className="w-6 h-6 hover:opacity-80" // Adjusted size
              />
            </a>
          </div>
        </header>

        {/* Page Content */}
        <main>{children}</main>
      </div>
    </div>
  );
}
