import { useLanguage } from "../LanguageProvider";
import brazilFlag from "../assets/brazil-flag.png";
import usaFlag from "../assets/usa-flag.png";

export default function LanguageSwitcher() {
  const { setLanguage } = useLanguage();

  return (
    <div className="flex justify-center gap-4 p-4 bg-[#1B1B1B]">
      <button onClick={() => setLanguage("pt")}>
        <img src={brazilFlag} alt="Português" className="w-8 h-5" />
      </button>
      <button onClick={() => setLanguage("en")}>
        <img src={usaFlag} alt="English" className="w-8 h-5" />
      </button>
    </div>
  );
}
