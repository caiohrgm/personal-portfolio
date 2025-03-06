import profileImage from "../assets/profile.png";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center flex-grow px-8 py-12 md:py-24">
      {/* Texto */}
      <div className="text-center md:text-left max-w-lg">
        <h1 className="text-5xl font-bold font-raleway">Your Name Here</h1>
        <p className="text-[#9C9C9C] mt-4">
          Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className="btn-green mt-6">Let’s get started →</button>
      </div>

      {/* Imagem */}
      <div className="mt-8 md:mt-0 md:ml-12">
        <img src={profileImage} alt="Profile" className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover" />
      </div>
    </section>
  );
}
