import { useState } from "react";
import { Link } from "react-router-dom";
import github_logo from "../../assets/home_images/github_white_logo.png";
import linkedin_logo from "../../assets/home_images/linkedin_white_logo.png";
import company_logo from "../../assets/logo/logo_03.png"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-light-purple-300 border-b border-gray-700">
      <div className="max-w-6xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center">
        {/* Logo or site name - Left aligned */}
        <div className="flex items-center space-x-2">
          {/* Imagem com largura maior */}
          <img src={company_logo} alt="Logo" className="w-10 h-10" />
          
          {/* Nome */}
          <div className="text-vanilla-gray-300 font-bold text-xl font-mono">
            Caio Medeiros
          </div>
        </div>

        {/* Menu e Links (GitHub, LinkedIn) - Right aligned */}
        <div className="ml-auto flex space-x-6 text-lg text-vanilla-gray-300 font-mono">
          {/* Desktop Menu */}
          <nav className="hidden sm:flex space-x-6 text-lg text-vanilla-gray-300 font-mono">
            <Link to="/" className="hover:text-mint-300">Home</Link>
            <Link to="/about" className="hover:text-mint-300">About Me</Link>
            <Link to="/projects" className="hover:text-mint-300">Projects</Link>
            {/* <Link to="/skills" className="hidden hover:text-mint-300 cursor-not-allowed pointer-events-none opacity-50">Skills</Link> */}
            {/* <div className="relative group hidden">
              <Link to="/articles" className="text-soft-aqua-300 hover:text-mint-300 cursor-not-allowed pointer-events-none opacity-50">
                Articles
              </Link>
              <div className="absolute left-0 mt-2 bg-light-purple-300 border p-4 rounded-lg opacity-0 group-hover:opacity-100 group-hover:block transition-all duration-300">
                <ul>
                  <li>
                    <Link to="/articles/scientific-papers" className="block py-2 hover:text-mint-300 cursor-not-allowed pointer-events-none opacity-50">
                      Scientific Papers
                    </Link>
                  </li>
                  <li>
                    <Link to="/articles/personal-articles" className="block hover:text-mint-300 cursor-not-allowed pointer-events-none opacity-50">
                      Personal Articles
                    </Link>
                  </li>
                </ul>
              </div>
            </div> */}
            <Link to="/contact" className="hover:text-mint-300">Contact</Link>
          </nav>

          {/* Social Media Icons */}
          <div className="hidden sm:flex space-x-4">
            <a href="https://www.linkedin.com/in/caiohmedeiros/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin_logo} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://github.com/caiohrgm/" target="_blank" rel="noopener noreferrer">
              <img src={github_logo} alt="GitHub" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden px-6 py-4 bg-light-purple-300 border-t border-gray-700 text-vanilla-gray-300 font-mono space-y-2">
          <Link to="/" className="block hover:text-mint-300" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="block hover:text-mint-300" onClick={() => setIsOpen(false)}>About Me</Link>
          <Link to="/projects" className="block hover:text-mint-300" onClick={() => setIsOpen(false)}>Projects</Link>
          {/* <Link to="/skills" className=" hover:text-mint-300 " onClick={() => setIsOpen(false)}>Skills</Link> */}
          {/* <Link to="/articles/scientific-papers" className=" hover:text-mint-300 " onClick={() => setIsOpen(false)}>Scientific Papers</Link> */}
          {/* <Link to="/articles/personal-articles" className=" hover:text-mint-300 " onClick={() => setIsOpen(false)}>Personal Articles</Link> */}
          <Link to="/contact" className="block hover:text-mint-300" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
