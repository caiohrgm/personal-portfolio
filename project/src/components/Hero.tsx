import profileImage from "../assets/profile.png";
import { useLanguage } from "../LanguageProvider";
import { FormattedMessage } from "react-intl";

export default function Hero() {
  const { setLanguage } = useLanguage();

  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center flex-grow px-8 py-12 md:py-24 bg-[#080808] mt-20">
      <div className="text-center md:text-left max-w-lg">
        <h1 className="text-5xl font-bold font-raleway">Caio Medeiros</h1>
        <p className="text-[#9C9C9C] mt-4 font-mono">
          <FormattedMessage id="description" />
        </p>
        <button className="border bg-[#3F8E00] border-[#62BA1B] mt-6 p-4 rounded-md font-mono">
          <FormattedMessage id="button" />
        </button>

        {/* Botão para trocar idioma */}
        <div className="mt-4">
          <button onClick={() => setLanguage("en")} className="mr-2 px-4 py-2 bg-gray-700 rounded">
            🇺🇸 English
          </button>
          <button onClick={() => setLanguage("pt")} className="px-4 py-2 bg-gray-700 rounded">
            🇧🇷 Português
          </button>
        </div>
      </div>

      <div className="mt-8 md:mt-0 md:ml-12">
        <img
          src={profileImage}
          alt="Profile"
          className="w-16 h-24 md:w-32 md:h-48 rounded-full object-cover"
        />
      </div>
    </section>
  );
}
