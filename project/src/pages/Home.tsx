import Header from "../components/Home/Header";
import Hero from "../components/Home/Hero";
import Footer from "../components/Home/Footer";
// import senai_logo from "../assets/logo_nova_senai_solucoes_digitais.png";
// import pacto_logo from "../assets/logo_pacto_white.png";
// import lsd_logo from "../assets/lsd_02.png";
// import dell_logo from "../assets/dell_reviewd_logo.png";

export default function Home() {
  return (
    <div className="text-white min-h-screen w-full bg-dark-purple-900">
      <div className="max-w-[1366px] m-auto">
        <Header />
      </div>
      <div><Hero /></div>
      <div><Footer /></div>
    </div>
  );
}
