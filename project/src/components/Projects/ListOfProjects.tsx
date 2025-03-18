import { Link } from "react-router-dom";

export default function ListOfProjects() {
  return (
    <div className="bg-white p-8">
      <div className="flex flex-col items-start mb-6">
        <h2 className="text-sm font-bold font-ibm-mono text-zinc-700 opacity-35">
          Projects
        </h2>
        <div className="w-full h-px bg-zinc-700 opacity-30 mt-2"></div>
      </div>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-raleway-100 text-light-purple-300 text-left">
          Personal Portfolio
        </h2>
        <p className="mt-4 text-lg text-dark-purple-900 text-justify">
          Here are some case studies showcasing my work, highlighting the
          technologies and approaches I used to solve real-world problems.
        </p>
      </div>

      <div className="overflow-x-auto flex space-x-8 pb-8 scroll-smooth custom-scrollbar">
        {/* Project Block 1 */}
        <div className="bg-vanilla-gray-300 text-light-purple-300 border border-light-purple-300 p-6 rounded-lg flex-shrink-0 w-80">
          <h2 className="text-lg font-raleway-700 text-light-purple-300">
            Project One
          </h2>
          <p className="text-dark-purple-900 mt-2 font-raleway-100">
            This project focused on solving [problem], using technologies like [list technologies used].
          </p>
          <Link to="projects/toy-drones">
            <button className="bg-mint-300 hover:bg-mint-medium text-light-purple-300 font-bold 
                              font-mono w-36 px-6 py-2 mt-6 rounded-lg shadow-md transition duration-300 
                              cursor-pointer border border-mint-medium hover:text-vanilla-gray-300">
              Read More
            </button>
          </Link>
        </div>

        {/* Project Block 2 */}
        <div className="bg-vanilla-gray-300 text-light-purple-300 border border-light-purple-300 p-6 rounded-lg flex-shrink-0 w-80">
          <h2 className="text-lg font-raleway-700 text-light-purple-300">
            Project Two
          </h2>
          <p className="text-dark-purple-900 mt-2 font-raleway-100">
            In this project, I worked on [objective], utilizing technologies like [technologies used].
          </p>
          <button className="bg-mint-300 hover:bg-mint-medium text-light-purple-300 font-bold 
                            font-mono w-36 px-6 py-2 mt-6 rounded-lg shadow-md transition duration-300 
                            cursor-pointer border border-mint-medium hover:text-vanilla-gray-300">
            Read More
          </button>
        </div>

        {/* Project Block 3 */}
        <div className="bg-vanilla-gray-300 text-light-purple-300 border border-light-purple-300 p-6 rounded-lg flex-shrink-0 w-80">
          <h2 className="text-lg font-raleway-700  text-light-purple-300">
            Project Three
          </h2>
          <p className="text-dark-purple-900 mt-2 font-raleway-100">
            This project focused on [another objective], with technologies like [list technologies used].
          </p>
          <button className="bg-mint-300 hover:bg-mint-medium text-light-purple-300 font-bold 
                            font-mono w-36 px-6 py-2 mt-6 rounded-lg shadow-md transition duration-300 
                            cursor-pointer border border-mint-medium hover:text-vanilla-gray-300">
            Read More
          </button>
        </div>

        {/* More Project Blocks can be added here */}
        {/* Project Block 4 */}
        <div className="bg-vanilla-gray-300 text-light-purple-300 border border-light-purple-300 p-6 rounded-lg flex-shrink-0 w-80">
          <h2 className="text-lg font-raleway-700  text-light-purple-300">
            Project Four
          </h2>
          <p className="text-dark-purple-900 mt-2 font-raleway-100">
            This project focused on [another objective], with technologies like [list technologies used].
          </p>
          <button className="bg-mint-300 hover:bg-mint-medium text-light-purple-300 font-bold 
                            font-mono w-36 px-6 py-2 mt-6 rounded-lg shadow-md transition duration-300 
                            cursor-pointer border border-mint-medium hover:text-vanilla-gray-300">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
