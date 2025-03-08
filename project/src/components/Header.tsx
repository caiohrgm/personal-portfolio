import linkedin_logo from "../assets/linkedin_logo_colored.png";

export default function Header() {
  return (
    <header className="bg-[#1B1B1B] py-4 px-8 flex justify-between items-center">
      <nav className="flex space-x-6 text-[#9C9C9C] font-mono">
        <a href="#" className="hover:text-white">
          Home
        </a>
        <a href="#" className="hover:text-white">
          Case Studies
        </a>
        <a href="#" className="hover:text-white">
          Testimonials
        </a>
        <a href="#" className="hover:text-white">
          Recent Work
        </a>
        <a href="#" className="hover:text-white">
          Get In Touch
        </a>
      </nav>
      <div className="flex space-x-4 text-[#9C9C9C]">
        <a href="https://www.linkedin.com/in/caiohmedeiros/" className="hover:text-white" target="_blank" rel="noopener noreferrer">
        <img src={linkedin_logo} alt="SENAI-PB" className="w-6 h-4 mr-2 hover:opacity-80" />
        </a>
      </div>
    </header>
  );
}
