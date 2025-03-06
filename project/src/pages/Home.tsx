import Header from "../components/Header";
import Hero from "../components/Hero";
import Companies from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Companies />
    </div>
  );
}
