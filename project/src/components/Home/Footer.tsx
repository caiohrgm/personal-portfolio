import senai_logo from "../../assets/logo_nova_senai_solucoes_digitais.png";
import pactomais_logo from "../../assets/logo_pacto_white.png";
import lsd_logo from "../../assets/lsd_02.png";
import dell_logo from "../../assets/dell_reviewd_logo.png";

export default function Footer() {
    return (
      <footer className="w-full bg-dark-purple-900 py-8 mt-12">
        <div className="max-w-screen-lg mx-auto px-4 sm:px-8">
          <p className="text-center text-[#9C9C9C] font-mono mb-4">Worked with</p>
          <div className="grid grid-cols-4 gap-4 w-full justify-items-center">
            <img src={senai_logo} alt="Senai" className="h-12 mx-auto grayscale opacity-70 hover:opacity-100 transition duration-300" />
            <img src={pactomais_logo} alt="PactoMais" className="h-12 mx-auto grayscale opacity-70 hover:opacity-100 transition duration-300" />
            <img src={lsd_logo} alt="LSD" className="h-12 mx-auto grayscale opacity-70 hover:opacity-100 transition duration-300" />
            <img src={dell_logo} alt="Dell" className="h-12 mx-auto grayscale opacity-70 hover:opacity-100 transition duration-300" />
          </div>
        </div>
      </footer>
    );
  }
  
