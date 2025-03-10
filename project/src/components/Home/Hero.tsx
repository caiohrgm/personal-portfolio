import profileImage from "../../assets/profile.png";

export default function Hero() {
  return (
    <section className="w-full max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 py-16 md:py-24 bg-dark-purple-900 mt-20">
      {/* Texto e Botão */}
      <div className="text-center md:text-left max-w-lg">
        <h1 className="text-5xl font-bold font-raleway text-white">
          Your Name Here
        </h1>
        <p className="text-[#9C9C9C] mt-4 font-mono text-lg">
          Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="#" className="inline-block mt-6">
          <button className="bg-mint-300 hover:bg-light-purple-300 text-dark-purple-900 font-mono px-6 py-3 rounded-lg shadow-md transition duration-300">
            Let's get started →
          </button>
        </a>
      </div>

      {/* Imagem de Perfil */}
      <div className="mt-12 md:mt-0">
        <img
          src={profileImage}
          alt="Profile"
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
