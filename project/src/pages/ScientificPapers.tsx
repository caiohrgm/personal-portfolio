export default function ScientificPapers() {
    return (
      <div className="text-white min-h-screen w-full bg-[#080808] px-8 py-12">
        <h1 className="text-5xl font-bold font-raleway text-[#9C9C9C]">Scientific Papers</h1>
        <p className="text-[#9C9C9C] mt-4 font-mono tracking-wide">
          Below are some of the scientific papers I have authored or contributed to during my Master’s research and beyond. These papers cover various topics in data science, machine learning, AI, and software engineering.
        </p>
  
        {/* Paper List */}
        <div className="mt-8 space-y-8">
          {/* Paper 1 */}
          <div className="bg-[#080808] border border-[#1B1B1B] p-6 rounded-lg flex flex-col">
            <h2 className="text-xl font-bold font-raleway text-white">Paper Title One</h2>
            <p className="text-[#9C9C9C] mt-2 font-mono">
              This paper explores [brief description]. It was published in [Journal Name] and focuses on [key themes and findings].
            </p>
            <a href="[link-to-paper]" target="_blank" rel="noopener noreferrer" className="border bg-[#3F8E00] border-[#62BA1B] mt-6 p-4 rounded-md font-mono w-36 px-6 py-2 text-center">Read More</a>
          </div>
  
          {/* Paper 2 */}
          <div className="bg-[#080808] border border-[#1B1B1B] p-6 rounded-lg flex flex-col">
            <h2 className="text-xl font-bold font-raleway text-white">Paper Title Two</h2>
            <p className="text-[#9C9C9C] mt-2 font-mono">
              This research paper focuses on [brief description of research]. It was published in [Journal Name].
            </p>
            <a href="[link-to-paper]" target="_blank" rel="noopener noreferrer" className="border bg-[#3F8E00] border-[#62BA1B] mt-6 p-4 rounded-md font-mono w-36 px-6 py-2 text-center">Read More</a>
          </div>
  
          {/* More papers can follow... */}
        </div>
      </div>
    );
  }
  