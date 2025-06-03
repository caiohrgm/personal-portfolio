import { useState } from "react";
import { Link } from "react-router-dom";
import github_logo from "../../assets/home_images/github_white_logo.png";
import linkedin_logo from "../../assets/home_images/linkedin_white_logo.png";
import company_logo from "../../assets/logo/logo-reviewed.png";
import brazilFlag from "../../assets/flags/brazil.png"; // bandeira do Brasil
import usaFlag from "../../assets/flags/usa.png"; // bandeira dos EUA
import { useTranslation } from "react-i18next";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  // Função para trocar idioma
  const changeLanguage = (lang: string | undefined) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-light-purple-300 border-b border-gray-700">
      <div className="max-w-6xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center">
        {/* Logo or site name - Left aligned */}
        <div className="flex items-center space-x-2">
          <img src={company_logo} alt="Logo" className="w-10 h-10" />
          <div className="text-vanilla-gray-300 font-bold text-xl font-mono">
            CM Technology
          </div>
        </div>

        {/* Menu e Links (GitHub, LinkedIn, Language Switch) - Right aligned */}
        <div className="ml-auto flex items-center space-x-6 text-lg text-vanilla-gray-300 font-mono">
          {/* Desktop Menu */}
          <nav className="hidden sm:flex space-x-6 text-lg text-vanilla-gray-300 font-mono">
            <Link to="/" className="hover:text-mint-300">{t('home-header.nav-bar-home')}</Link>
            <Link to="/about" className="hover:text-mint-300">{t('home-header.nav-bar-about')}</Link>
            <Link to="/projects" className="hover:text-mint-300">{t('home-header.nav-bar-projects')}</Link>
            <Link to="/skills" className="hover:text-mint-300">{t('home-header.nav-bar-skills')}</Link>
            <Link to="/contact" className="hover:text-mint-300">{t('home-header.nav-bar-contact')}</Link>
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

          {/* Language Switch */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => changeLanguage("pt")}
              aria-label="Mudar para Português"
              className={`w-8 h-6 cursor-pointer rounded-sm border-2 ${i18n.language === "pt" ? "border-mint-300" : "border-transparent"} transition`}
            >
              <img src={brazilFlag} alt="Português" className="w-full h-full object-cover" />
            </button>

            <button
              onClick={() => changeLanguage("en")}
              aria-label="Switch to English"
              className={`w-8 h-6 cursor-pointer rounded-sm border-2 ${i18n.language === "en" ? "border-mint-300" : "border-transparent"} transition`}
            >
              <img src={usaFlag} alt="English" className="w-full h-full object-cover" />
            </button>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <button
            className="sm:hidden text-vanilla-gray-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden px-6 py-4 bg-light-purple-300 border-t border-gray-700 text-vanilla-gray-300 font-mono space-y-2">
          <Link to="/" className="block hover:text-mint-300" onClick={() => setIsOpen(false)}>{t('home-header.nav-bar-home')}</Link>
          <Link to="/about" className="block hover:text-mint-300" onClick={() => setIsOpen(false)}>{t('home-header.nav-bar-about')}</Link>
          <Link to="/projects" className="block hover:text-mint-300" onClick={() => setIsOpen(false)}>{t('home-header.nav-bar-projects')}</Link>
          <Link to="/skills" className="block hover:text-mint-300" onClick={() => setIsOpen(false)}>{t('home-header.nav-bar-skills')}</Link>
          <Link to="/contact" className="block hover:text-mint-300" onClick={() => setIsOpen(false)}>{t('home-header.nav-bar-contact')}</Link>
        </div>
      )}
    </header>
  );
}
