import Header from "../components/Home/Header";
import Hero from "../components/Home/Hero";
import Footer from "../components/Home/Footer";

export default function Home() {
  return (
    <div className="text-white w-full bg-dark-purple-900 flex flex-col justify-between">
      <div className="max-w-[1366px] m-auto">
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}