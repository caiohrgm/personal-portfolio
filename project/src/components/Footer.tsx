import senai_logo from "../assets/logo_nova_senai_solucoes_digitais.png";
import lsd_dell_logo from "../assets/lsd_log_03.jpg";

export default function Footer() {
  return (
    <section className="py-8 px-8 text-center bg-[#080808]">
      <p className="text-[#9C9C9C] text-left tracking-wide font-mono w-full px-120">
        Worked with
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-4">
        <div className="bg-[#080808] border border-[#1B1B1B] px-6 py-3 rounded-lg">
          <img src={senai_logo} alt="SENAI-PB" className="w-24 h-9 mr-2" />
        </div>
        <div className="bg-[#080808] border border-[#1B1B1B] px-6 py-3 rounded-lg">
          <img src={lsd_dell_logo} alt="lsd-dell" className="w-24 h-16 mr-2" />
        </div>
        <div className="bg-[#080808] border border-[#1B1B1B] px-6 py-3 rounded-lg">
          💳 PactoMais
        </div>
        <div className="bg-[#080808] border border-[#1B1B1B] px-6 py-3 rounded-lg">
          🌐 SPLAB/Siteware
        </div>
      </div>
    </section>
  );
}
