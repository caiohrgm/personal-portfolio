import Expertise from "../components/About/Expertise";
import OutOfWork from "../components/About/OutOfWork";

export default function About() {
  return (
    <section className="bg-dark-purple-900 text-light-purple-300 px-8 py-16">
      <div className="max-w-6xl mx-auto">

        <Expertise />
        <OutOfWork />
      </div>
    </section>
  );
}
