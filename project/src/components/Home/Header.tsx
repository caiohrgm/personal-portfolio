import { Link } from "react-router-dom";
import github_logo from "../../assets/home_images/github_logo_white.png";
import linkedin_logo from "../../assets/home_images/linkedin_logo_white.png";

export default function Header() {
  console.log(github_logo);
  return (
    <header className="fixed top-0 left-0 w-full px-6 sm:px-8 z-50">
      <div className="max-w-6xl mx-auto bg-light-purple-300 py-4 px-4 sm:px-8 flex justify-between items-center border border-gray-700 rounded-b-md">
        <nav className="flex space-x-8 text-lg text-vanilla-gray-300 font-mono">
          <Link to="/" className="hover:text-mint-300">
            Home
          </Link>
          <Link to="/about" className="hover:text-mint-300">
            About Me
          </Link>
          <Link to="/projects" className="hover:text-mint-300">
            Projects
          </Link>
          <Link to="/skills" className="hover:text-mint-300">
            Skills
          </Link>

          {/* Articles Dropdown */}
          <li className="relative group list-none">
            <Link
              to="/articles"
              className="text-soft-aqua-300 hover:text-mint-300"
            >
              Articles
            </Link>
            <div className="absolute left-0 mt-2 bg-light-purple-300 border p-4 rounded-lg opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-300">
              <ul>
                <li>
                  <Link
                    to="/articles/scientific-papers"
                    className="block text-vanilla-gray-300 hover:text-mint-300 py-2"
                  >
                    Scientific Papers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/articles/personal-articles"
                    className="block text-vanilla-gray-300 hover:text-mint-300"
                  >
                    Personal Articles
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <Link to="/contact" className="hover:text-mint-300">
            Contact
          </Link>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/caiohmedeiros/"
            className="hover:text-mint-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedin_logo}
              alt="LinkedIn"
              className="w-6 h-6 hover:invert-0"
            />
          </a>
          <a
            href="https://github.com/caiohrgm/"
            className=" hover:text-mint-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={github_logo}
              alt="GitHub"
              className="w-6 h-6 hover:invert-0"
            />
          </a>
        </div>
      </div>
    </header>
  );
}
