import Expertise from "../components/About/Expertise";
import OutOfWork from "../components/About/OutOfWork";

export default function About() {
  return (
    <section className="bg-dark-purple-900 text-dark-purple-900 px-8 py-16">
      <div className="max-w-6xl mx-auto">
        {/* <h1 className="text-4xl font-bold text-mint-300 mb-10">About Me</h1> */}
        <Expertise />
        <OutOfWork />
      </div>
    </section>
  );
}
