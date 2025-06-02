export default function Expertise() {
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
              About Me
            </h2>
            <div className="w-full h-px bg-zinc-700 opacity-30 mt-2"></div>
          </div>

          <h2 className="text-3xl font-raleway-100 text-light-purple-300">
            Expertise
          </h2>
          <p className="mt-4 text-lg font-raleway-100 text-dark-purple-900 text-justify">

            With a strong foundation in software development and a passion for
            solving real-world problems, I’ve worked across both academic and
            industry settings. From distributed systems to AI research, my
            journey has been shaped by continuous learning, collaboration, and
            the desire to make technology more meaningful and accessible.
          </p>
          <h3 className="mt-6 font-raleway-700 text-light-purple-300">
            From Teaching to Tech
          </h3>
          <p className="text-sm font-raleway-100 text-dark-purple-900 text-justify">

            My journey began as an English teacher, where I developed strong
            communication and analytical thinking skills. These abilities proved
            incredibly valuable when I transitioned into programming — helping
            me read, interpret, and write clean code while collaborating with
            diverse teams.
          </p>
          <h3 className="mt-4 font-raleway-700 text-light-purple-300">
            Bridging Academia and Practice
          </h3>
          <p className="text-sm font-raleway-100 text-dark-purple-900 text-justify">

            Pursuing a Master's Degree has allowed me to combine theoretical
            research with practical development. From building AI systems to
            working with data-driven projects in partnership with private
            companies, I’ve gained experience across the full lifecycle of
            innovation.
          </p>
        </div>

        {/* RIGHT SIDE: CONNECTED STACKED BLOCKS */}
        <div className="bg-[#F6F8F9]  shadow-lg overflow-hidden border-l border-light-purple-100 rounded-tr-lg">
          <div className="divide-y divide-gray-300">
            {/* CURRENT ROLE */}
            <div className="p-6 text-center flex flex-col sm:flex-row sm:items-center">
              <div className="sm:w-1/2">
                <h3 className="text-lg font-bold text-dark-purple-900 font-raleway-100">
                  Software Engineer
                </h3>
                <p className="text-sm text-light-purple-300 font-raleway-100">
                  SENAI
                </p>
              </div>
              <div className="sm:w-1/2 sm:text-right">
                <p className="text-md text-mint-medium font-ibm-mono">2024 - current</p>
              </div>
            </div>
        
            {/* PREVIOUS ROLE */}
            <div className="p-6 text-center flex flex-col sm:flex-row sm:items-center">
              <div className="sm:w-1/2">
                <h3 className="text-lg font-bold text-dark-purple-900 font-raleway-100">
                  Software Developer
                </h3>
                <p className="text-sm text-light-purple-300 font-raleway-100">
                Distributed System Laboratory in partnership with DELL
                </p>
              </div>
              <div className="sm:w-1/2 sm:text-right">
                <p className="text-md text-mint-medium font-ibm-mono">2022 - 2024</p>
              </div>
            </div>
            
            {/* Specialization */}
            <div className="p-6 text-center flex flex-col sm:flex-row sm:items-center">
              <div className="sm:w-1/2">
                <h3 className="text-lg font-bold text-dark-purple-900 font-raleway-100">
                  Master’s Degree candidate
                </h3>
                <p className="text-sm text-light-purple-300 font-raleway-100">
                Universidade Federal de Campina Grande
                </p>
              </div>
              <div className="sm:w-1/2 sm:text-right">
                <p className="text-md text-mint-medium font-ibm-mono">2023 - current</p>
              </div>
            </div>

            {/* Education */}
            <div className="p-6 text-center flex flex-col sm:flex-row sm:items-center">
              <div className="sm:w-1/2">
                <h3 className="text-lg font-bold text-dark-purple-900 font-raleway-100">
                Computer Sciente Major
                </h3>
                <p className="text-sm text-light-purple-300 font-raleway-100">
                Universidade Federal de Campina Grande
                </p>
              </div>
              <div className="sm:w-1/2 sm:text-right">
                <p className="text-md text-mint-medium font-ibm-mono">2019 - 2022</p>
              </div>

            </div>

            {/* BOTTOM ROLES (SIDE-BY-SIDE) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-x divide-gray-300">
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-dark-purple-900 font-raleway-100">
                  Developer & Researcher
                </h3>
                <p className="text-sm text-light-purple-300 font-raleway-100">
                  LPC in partnership with Pactomais
                </p>
                <p className="text-sm text-mint-medium font-ibm-mono">
                  AI & Computer Vision
                </p>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-dark-purple-900 font-raleway-100">
                  Developer & Researcher
                </h3>
                <p className="text-sm text-light-purple-300 font-raleway-100">
                  SPLab in partnership with Siteware
                </p>
                <p className="text-sm text-mint-medium font-ibm-mono">
                 Big Data & Data Analysis

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
