// import { Link } from "react-router-dom";
import github_logo from "../assets/git_logo_gray.png";
import linkedin_logo from "../assets/linkedin_logo_colored.png";
// import profileImage from "../assets/profile.png";

export default function Header() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center flex-grow px-8 py-12 md:py-2 mt-0">
      <header className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-screen-lg bg-light-purple-300 py-4 px-4 sm:px-8 flex justify-between items-center border rounded-md ">
        <nav className="flex space-x-6 text-vanilla-gray-300 font-mono">
          <a href="#" className="hover:text-mint-300">
            Home
          </a>
          <a href="#" className="hover:text-mint-300">
            About Me
          </a>
          <a href="#" className="hover:text-mint-300">
            Projects
          </a>
          <a href="#" className="hover:text-mint-300">
            Skills
          </a>

          {/* Articles Dropdown */}
          <li className="relative group list-none">
            <a href="#" className="text-soft-aqua-300 hover:text-mint-300">
              Articles
            </a>
            <div className="absolute left-0 mt-2 bg-light-purple-300 border p-4 rounded-lg opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-300">
              <ul>
                <li>
                  <a
                    href="#"
                    className="block text-vanilla-gray-300 hover:text-mint-300 py-2"
                  >
                    Scientific Papers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block text-vanilla-gray-300 hover:text-mint-300"
                  >
                    Personal Articles
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <a href="#" className="hover:text-mint-300">
            Contact
          </a>
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4 ml-36">
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
    </section>
  );
}

{
  /* <nav className="flex space-x-6 text-[#9C9C9C] font-mono">
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
</Link> */
}

{
  /* 
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
</nav> */
}
