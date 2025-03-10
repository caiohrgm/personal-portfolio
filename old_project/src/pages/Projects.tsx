export default function Projects() {
  return (
    <div className="text-white min-h-screen w-full bg-[#080808] px-8 py-12">
      <h1 className="text-5xl font-bold font-raleway text-[#9C9C9C]">
        Projects
      </h1>
      <p className="text-[#9C9C9C] mt-4 font-mono tracking-wide">
        Here are some case studies showcasing my work, highlighting the
        technologies and approaches I used to solve real-world problems.
      </p>

      {/* Horizontal Slider Container */}
      <div className="mt-8 overflow-x-auto space-x-8 flex pb-8 scroll-smooth">
        {/* Case Study 1 */}
        <div className="bg-[#080808] border border-[#1B1B1B] p-6 rounded-lg flex-shrink-0 w-72">
          <h2 className="text-xl font-bold font-raleway text-white">
            Project One
          </h2>
          <p className="text-[#9C9C9C] mt-2 font-mono">
            This project focused on solving [problem], using technologies like
            [list technologies used]. I developed [describe your role and
            contribution].
          </p>
          <ul className="text-[#9C9C9C] mt-4 font-mono text-sm">
            <li>
              <strong>Technologies Used:</strong> Python, Django, PostgreSQL,
              etc.
            </li>
            <li>
              <strong>Key Outcome:</strong> [Brief description of the project’s
              impact or result]
            </li>
          </ul>
          <button className="border bg-[#3F8E00] border-[#62BA1B] w-36 px-6 py-2 mt-6 p-4 rounded-md">
            Read More
          </button>
        </div>

        {/* Case Study 2 */}
        <div className="bg-[#080808] border border-[#1B1B1B] p-6 rounded-lg flex-shrink-0 w-72">
          <h2 className="text-xl font-bold font-raleway text-white">
            Project Two
          </h2>
          <p className="text-[#9C9C9C] mt-2 font-mono">
            In this project, I worked on [objective], where I utilized
            technologies like [technologies used]. I was responsible for [your
            contribution].
          </p>
          <ul className="text-[#9C9C9C] mt-4 font-mono text-sm">
            <li>
              <strong>Technologies Used:</strong> TypeScript, NestJS, MongoDB
            </li>
            <li>
              <strong>Key Outcome:</strong> [Brief project impact]
            </li>
          </ul>
          <button className="border bg-[#3F8E00] border-[#62BA1B] w-36 px-6 py-2 mt-6 p-4 rounded-md">
            Read More
          </button>
        </div>

        {/* Case Study 3 */}
        <div className="bg-[#080808] border border-[#1B1B1B] p-6 rounded-lg flex-shrink-0 w-72">
          <h2 className="text-xl font-bold font-raleway text-white">
            Project Three
          </h2>
          <p className="text-[#9C9C9C] mt-2 font-mono">
            This project aimed at [focus], where I applied [technologies] to
            achieve [goal]. My role included [your specific tasks].
          </p>
          <ul className="text-[#9C9C9C] mt-4 font-mono text-sm">
            <li>
              <strong>Technologies Used:</strong> TensorFlow, Machine Learning
            </li>
            <li>
              <strong>Key Outcome:</strong> [Result or impact of the project]
            </li>
          </ul>
          <button className="border bg-[#3F8E00] border-[#62BA1B] w-36 px-6 py-2 mt-6 p-4 rounded-md">
            Read More
          </button>
        </div>

        {/* Case Study 4 */}
        <div className="bg-[#080808] border border-[#1B1B1B] p-6 rounded-lg flex-shrink-0 w-72">
          <h2 className="text-xl font-bold font-raleway text-white">
            Project Four
          </h2>
          <p className="text-[#9C9C9C] mt-2 font-mono">
            In this project, we tackled [challenge] by implementing [solutions].
            I contributed by [your role].
          </p>
          <ul className="text-[#9C9C9C] mt-4 font-mono text-sm">
            <li>
              <strong>Technologies Used:</strong> Python, AWS, PostgreSQL
            </li>
            <li>
              <strong>Key Outcome:</strong> [Impact of the project]
            </li>
          </ul>
          <button className="border bg-[#3F8E00] border-[#62BA1B] w-36 px-6 py-2 mt-6 p-4 rounded-md">
            Read More
          </button>
        </div>

        {/* Case Study 5 */}
        <div className="bg-[#080808] border border-[#1B1B1B] p-6 rounded-lg flex-shrink-0 w-72">
          <h2 className="text-xl font-bold font-raleway text-white">
            Project Five
          </h2>
          <p className="text-[#9C9C9C] mt-2 font-mono">
            This project involved [area of focus], and I played a key role in
            [your tasks]. We leveraged [technologies used] to solve [problem].
          </p>
          <ul className="text-[#9C9C9C] mt-4 font-mono text-sm">
            <li>
              <strong>Technologies Used:</strong> Pandas, Machine Learning
            </li>
            <li>
              <strong>Key Outcome:</strong> [Outcome or impact]
            </li>
          </ul>
          <button className="border bg-[#3F8E00] border-[#62BA1B] w-36 px-6 py-2 mt-6 p-4 rounded-md">
            Read More
          </button>
        </div>

        {/* Case Study 6 */}
        <div className="bg-[#080808] border border-[#1B1B1B] p-6 rounded-lg flex-shrink-0 w-72">
          <h2 className="text-xl font-bold font-raleway text-white">
            Project Six
          </h2>
          <p className="text-[#9C9C9C] mt-2 font-mono">
            This project focused on [goal], where I utilized [technologies] to
            build [solution]. My contributions included [specific tasks].
          </p>
          <ul className="text-[#9C9C9C] mt-4 font-mono text-sm">
            <li>
              <strong>Technologies Used:</strong> Seaborn, Plotly
            </li>
            <li>
              <strong>Key Outcome:</strong> [Result of the project]
            </li>
          </ul>
          <button className="border bg-[#3F8E00] border-[#62BA1B] w-36 px-6 py-2 mt-6 p-4 rounded-md">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
