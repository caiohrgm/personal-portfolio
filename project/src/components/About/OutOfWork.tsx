import playing_videogame_img from "../../assets/about_images/play_videogame.png";
import couple_having_dinner from "../../assets/about_images/wine_and_dinner.jpg";
import couple_watching_movie from "../../assets/about_images/couple_movie.png";
import study_biology from "../../assets/about_images/microscope_and_virus.png";
import { useTranslation } from "react-i18next";

export default function OutOfWork() {
  const { t } = useTranslation();
  return (
    <div className="relative mb-16">
      {/* CONNECTING BAR */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-light-purple-100 transform -translate-x-1/2 z-0" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative z-10">
        {/* Left side */}
        <div className="bg-white p-6 shadow-lg border-r border-light-purple-100 rounded-bl-lg">
          <h2 className="text-3xl font-raleway-100 text-light-purple-300">
            {t('outOfWork.sectionTitle')}
          </h2>
          <p className="mt-4 text-lg font-raleway-100 text-dark-purple-900 text-justify">
            {t('outOfWork.paragraph1')}
          </p>
          <p className="mt-4 text-lg font-raleway-100 text-dark-purple-900 text-justify">

            {t('outOfWork.paragraph2')}
          </p>
          <footer className="mt-16 text-sm text-gray-400 border-t pt-4">
            {t('footer')}
          </footer>
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
