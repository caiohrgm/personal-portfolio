export default function Header() {
    return (
      <header className="bg-[#1B1B1B] py-4 px-8 flex justify-between items-center">
        <nav className="flex space-x-6 text-[#9C9C9C] font-mono">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">Case Studies</a>
          <a href="#" className="hover:text-white">Testimonials</a>
          <a href="#" className="hover:text-white">Recent Work</a>
          <a href="#" className="hover:text-white">Get In Touch</a>
        </nav>
        <div className="flex space-x-4 text-[#9C9C9C]">
          <a href="#" className="hover:text-white">in</a>
          <a href="#" className="hover:text-white">Bē</a>
          <a href="#" className="hover:text-white">🐦</a>
        </div>
      </header>
    );
  }
  