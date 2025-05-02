import playing_videogame_img from "../../assets/about_images/playing_video_game.png";
import couple_having_dinner from "../../assets/about_images/couple_having_dinner.webp";
import couple_watching_movie from "../../assets/about_images/couple_watchign_movie.jpg";
import study_biology from "../../assets/about_images/study_biology.jpg";

export default function OutOfWork() {
  return (
    <div className="relative mb-16">
      {/* CONNECTING BAR */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-light-purple-100 transform -translate-x-1/2 z-0" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative z-10">
        {/* Left side */}
        <div className="bg-white p-6 shadow-lg border-r border-light-purple-100 rounded-bl-lg">
          <h2 className="text-3xl font-bold text-light-purple-300">
            Who's Caio outside of work
          </h2>
          <p className="text-dark-purple-900 text-justify leading-relaxed mt-6">
            Fun fact: I also have a degree in Biological Sciences. I loved
            studying the nature. I even interned at Greenpeace in Vancouver,
            Canada, during a 6-months exchange program. I really enjoy learning
            languages and discovering new cultures.
          </p>
          <p className="text-dark-purple-900 text-justify leading-relaxed mt-6">
            In my free time, I usually hang out with my family and go out for
            dinner with my wife, watching movies together — just enjoying her
            company. I also enjoy playing video games with some online friends.
          </p>
        </div>

        {/* Right side: Hobby images in 4 blocks */}
        <div className="grid grid-cols-2 gap-4 bg-[#F6F8F9] p-4 shadow-lg border-l border-light-purple-100 rounded-br-lg">
          <div className="h-40 rounded-lg overflow-hidden">
            <img
              src={study_biology}
              alt="Biology Studies"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-40 rounded-lg overflow-hidden">
            <img
              src={playing_videogame_img}
              alt="Playing Games"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-40 rounded-lg bg-white flex items-center justify-center text-gray-400">
            <img
              src={couple_having_dinner}
              alt="HAving Dinner"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="h-40 rounded-lg bg-white flex items-center justify-center text-gray-400">
            <img
              src={couple_watching_movie}
              alt="Watching Movies"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
