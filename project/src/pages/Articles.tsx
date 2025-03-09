import { Link } from 'react-router-dom';

export default function Articles() {
  return (
    <div className="text-white min-h-screen w-full bg-[#080808] px-8 py-12">
      <h1 className="text-5xl font-bold font-raleway text-[#9C9C9C]">Articles</h1>
      <p className="text-[#9C9C9C] mt-4 font-mono tracking-wide">
        Here you can find both my published scientific papers and personal articles where I share my knowledge on various topics related to software engineering, data science, and AI.
      </p>

      {/* Navigation Links to Subpages */}
      <div className="mt-8">
        <div className="flex space-x-8">
          <Link to="/articles/scientific-papers">
            <button className="border bg-[#3F8E00] border-[#62BA1B] mt-6 p-4 rounded-md font-mono">Scientific Papers</button>
          </Link>
          <Link to="/articles/personal-articles">
            <button className="border bg-[#3F8E00] border-[#62BA1B] mt-6 p-4 rounded-md font-mono">Personal Articles</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
