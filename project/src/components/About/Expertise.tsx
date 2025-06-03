import { useTranslation } from "react-i18next";

export default function Expertise() {
  const { t } = useTranslation();
  
  return (
    <div className="relative mt-[-20px] sm:mt-[-30px] md:mt-[-40px] lg:mt-[-60px]">
      {/* CONNECTING BAR */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-light-purple-100 transform -translate-x-1/2 z-0" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative z-10">
        {/* LEFT SIDE */}
        <div className="bg-white p-6 shadow-lg border-r border-light-purple-100 rounded-tl-lg">
          {/* ABOUT ME LABEL WITH LINE */}
          <div className="flex flex-col items-start mb-6">
            <h2 className="text-sm font-bold font-ibm-mono text-zinc-700 opacity-35">
              {t('aboutMe.sectionTitle')}
            </h2>
            <div className="w-full h-px bg-zinc-700 opacity-30 mt-2"></div>
          </div>

          <h2 className="text-3xl font-raleway-100 text-light-purple-300">
            {t('aboutMe.expertiseTitle')}
          </h2>
          <p className="mt-4 text-lg font-raleway-100 text-dark-purple-900 text-justify">

            {t('aboutMe.expertiseParagraph')}
          </p>
          <h3 className="mt-6 font-raleway-700 text-light-purple-300">
            {t('aboutMe.teachingToTechTitle')}
          </h3>
          <p className="text-sm font-raleway-100 text-dark-purple-900 text-justify">

            {t('aboutMe.teachingToTechParagraph')}
          </p>
          <h3 className="mt-4 font-raleway-700 text-light-purple-300">
            {t('aboutMe.academiaAndPracticeTitle')}
          </h3>
          <p className="text-sm font-raleway-100 text-dark-purple-900 text-justify">
            {t('aboutMe.academiaAndPracticeParagraph')}
          </p>
        </div>

        {/* RIGHT SIDE: CONNECTED STACKED BLOCKS */}
        <div className="bg-[#F6F8F9]  shadow-lg overflow-hidden border-l border-light-purple-100 rounded-tr-lg">
          <div className="divide-y divide-gray-300">
            {/* CURRENT ROLE */}
            <div className="p-6 text-center flex flex-col sm:flex-row sm:items-center">
              <div className="sm:w-1/2">
                <h3 className="text-lg font-bold text-dark-purple-900 font-raleway-100">
                  {t('timeline.0.role')}
                </h3>
                <p className="text-sm text-light-purple-300 font-raleway-100">
                  {t('timeline.0.organization')}
                </p>
              </div>
              <div className="sm:w-1/2 sm:text-right">
                <p className="text-md text-mint-medium font-ibm-mono">{t('timeline.0.date')}</p>
              </div>
            </div>
        
            {/* PREVIOUS ROLE */}
            <div className="p-6 text-center flex flex-col sm:flex-row sm:items-center">
              <div className="sm:w-1/2">
                <h3 className="text-lg font-bold text-dark-purple-900 font-raleway-100">
                  {t('timeline.1.role')}
                </h3>
                <p className="text-sm text-light-purple-300 font-raleway-100">
                  {t('timeline.1.organization')}
                </p>
              </div>
              <div className="sm:w-1/2 sm:text-right">
                <p className="text-md text-mint-medium font-ibm-mono">{t('timeline.1.date')}</p>
              </div>
            </div>
            
            {/* Specialization */}
            <div className="p-6 text-center flex flex-col sm:flex-row sm:items-center">
              <div className="sm:w-1/2">
                <h3 className="text-lg font-bold text-dark-purple-900 font-raleway-100">
                  {t('timeline.2.role')}
                </h3>
                <p className="text-sm text-light-purple-300 font-raleway-100">
                  {t('timeline.2.organization')}
                </p>
              </div>
              <div className="sm:w-1/2 sm:text-right">
                <p className="text-md text-mint-medium font-ibm-mono">{t('timeline.2.date')}</p>
              </div>
            </div>

            {/* Education */}
            <div className="p-6 text-center flex flex-col sm:flex-row sm:items-center">
              <div className="sm:w-1/2">
                <h3 className="text-lg font-bold text-dark-purple-900 font-raleway-100">
                {t('timeline.3.role')}
                </h3>
                <p className="text-sm text-light-purple-300 font-raleway-100">
                {t('timeline.3.organization')}
                </p>
              </div>
              <div className="sm:w-1/2 sm:text-right">
                <p className="text-md text-mint-medium font-ibm-mono">{t('timeline.3.date')}</p>
              </div>

            </div>

            {/* BOTTOM ROLES (SIDE-BY-SIDE) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-x divide-gray-300">
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-dark-purple-900 font-raleway-100">
                  {t('timeline.4.role')}
                </h3>
                <p className="text-sm text-light-purple-300 font-raleway-100">
                  {t('timeline.4.organization')}
                </p>
                <p className="text-sm text-mint-medium font-ibm-mono">
                  {t('timeline.4.specialization')}
                </p>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-dark-purple-900 font-raleway-100">
                  {t('timeline.5.role')}
                </h3>
                <p className="text-sm text-light-purple-300 font-raleway-100">
                  {t('timeline.5.specialization')}
                </p>
                <p className="text-sm text-mint-medium font-ibm-mono">
                 {t('timeline.5.specialization')}

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
