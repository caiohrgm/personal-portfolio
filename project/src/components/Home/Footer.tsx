import senai_logo from "../../assets/home_images/logo_nova_senai_solucoes_digitais.png";
import pactomais_logo from "../../assets/home_images/pacto_mais_logo.png";
import lsd_logo from "../../assets/home_images/lsd_logo.png";
import dell_logo from "../../assets/home_images/dell_logo.png";
import { useTranslation } from "react-i18next";


export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="w-full bg-dark-purple-900">
      <div className="max-w-screen-lg mx-auto px-6 sm:px-12">
        <p className="text-vanilla-gray-300 font-mono mb-4 text-left">
          {t('home-footer.worked_with')}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full justify-items-center">
          <a
            href="https://www.fiepb.com.br/senai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={senai_logo}
              alt="Senai"
              className="h-12 grayscale opacity-70 hover:grayscale-0 transition duration-300 cursor-pointer"
            />
          </a>
          <a
            href="https://www.pactomais.com.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={pactomais_logo}
              alt="PactoMais"
              className="h-12 grayscale opacity-70 hover:grayscale-0 transition duration-300 relative left-7 cursor-pointer"
            />
          </a>
          <a
            href="https://www.lsd.ufcg.edu.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={lsd_logo}
              alt="LSD"
              className="h-12 grayscale opacity-70 hover:grayscale-0 transition duration-300 relative left-9 cursor-pointer"
            />
          </a>
          <a
            href="https://www.dell.com/pt-br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={dell_logo}
              alt="Dell"
              className="h-12 grayscale opacity-70 hover:grayscale-0 transition duration-300 cursor-pointer"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
