// import Header from "../components/Header";
import Hero from "../components/Hero";
// import Footer from "../components/Footer";
import senai_logo from "../assets/logo_nova_senai_solucoes_digitais.png";
import pacto_logo from "../assets/logo_pacto_white.png";
import lsd_logo from "../assets/lsd_02.png";
import dell_logo from "../assets/dell_reviewd_logo.png";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function Home() {
  return (
    <div className="text-white min-h-screen w-full bg-[#080808]">
      <div className="max-w-[1366px] m-auto">
        <Hero />
      </div>
      <section className="py-8 px-8 text-center bg-[#080808]">
        <p
          className="text-[#9C9C9C] text-left tracking-wide font-mono w-full 3
        px-75 mt-30"
        >
          Worked with
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-4 py-auto">
          <div className="bg-[#080808] border border-[#1B1B1B] px-6 py-6 rounded-lg">
            <img src={senai_logo} alt="SENAI-PB" className="w-24 h-9 mr-2" />
          </div>
          <div className="bg-[#080808] border border-[#1B1B1B] px-6 py-3 rounded-lg">
            <img
              src={pacto_logo}
              alt="lpc-pacto"
              className="w-27 h-8 mr-2 mt-4"
            />
          </div>
          <div className="bg-[#080808] border border-[#1B1B1B] px-6 py-3 rounded-lg">
            <img src={lsd_logo} alt="lsd-dell" className="w-24 h-16 mr-2" />
          </div>
          <div className="bg-[#080808] border border-[#1B1B1B] px-6 py-3 rounded-lg">
            <img src={dell_logo} alt="splab" className="w-26 h-10 mr-2 mt-3" />
          </div>
        </div>
      </section>
      {/* Add the LanguageSwitcher here */}
      <LanguageSwitcher />
    </div>
  );
}
