import { Link } from "react-router-dom";
import profileImage from "../../assets/home_images/profile_image.jpg";
import { useTranslation } from "react-i18next";


export default function Hero() {
  const { t } = useTranslation();
  return (
    <section className="w-full max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 py-16 md:py-24 bg-dark-purple-900 mt-2">
      {/* Texto e Botão */}
      <div className="text-center md:text-left max-w-lg">
        <h1 className="text-5xl font-bold font-raleway text-white">
          Caio Medeiros
        </h1>
        <p className="text-gray-400 mt-4 font-mono text-lg">
          {t('home-hero.description')}
        </p>
        <Link to="/about" className="inline-block mt-6">
          <button
            className="bg-mint-300 hover:bg-mint-medium text-light-purple-300 font-bold 
                            font-mono px-6 py-3 rounded-lg shadow-md transition duration-300 
                            cursor-pointer border border-mint-medium hover:text-vanilla-gray-300"

          >
            {t('home-hero.lets_start')}
          </button>
        </Link>
      </div>

      {/* Imagem de Perfil */}
      <div className="mt-12 md:mt-0">
        <img
          src={profileImage}
          alt="Profile"
          className="w-48 h-48 md:w-96 md:h-96 rounded-full object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
