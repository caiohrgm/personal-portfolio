import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="text-white min-h-screen w-full bg-primary">
      <div className="max-w-[1366px] m-auto">
        <Header />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}
