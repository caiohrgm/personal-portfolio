import { Link } from "react-router-dom";

export default function PersonalArticles() {
    return (
      <div className="text-white min-h-screen w-full bg-[#080808] px-8 py-12">
        <h1 className="text-5xl font-bold font-raleway text-[#9C9C9C]">Personal Articles</h1>
        <p className="text-[#9C9C9C] mt-4 font-mono tracking-wide">
          In this section, I share personal articles where I dive into topics I'm passionate about, ranging from data science best practices to my thoughts on emerging technologies in the software engineering field.
        </p>
  
        {/* Article List */}
        <div className="mt-8 space-y-8">
          {/* Article 1 */}
          <div className="bg-[#080808] border border-[#1B1B1B] p-6 rounded-lg flex flex-col">
            <h2 className="text-xl font-bold font-raleway text-white">Article Title One</h2>
            <p className="text-[#9C9C9C] mt-2 font-mono">
              In this article, I discuss [brief description]. This article shares insights into [what readers will learn].
            </p>
            <Link to="/articles/personal-articles/article-one" className="border bg-[#3F8E00] border-[#62BA1B] mt-6 p-4 rounded-md font-mono w-36 px-6 py-2 text-center">Read More</Link>
          </div>
  
          {/* Article 2 */}
          <div className="bg-[#080808] border border-[#1B1B1B] p-6 rounded-lg flex flex-col">
            <h2 className="text-xl font-bold font-raleway text-white">Article Title Two</h2>
            <p className="text-[#9C9C9C] mt-2 font-mono">
              This article explores [description of article]. I dive into [what the article covers].
            </p>
            <Link to="/articles/personal-articles/article-two" className="border bg-[#3F8E00] border-[#62BA1B] mt-6 p-4 rounded-md font-mono w-36 px-6 py-2 text-center">Read More</Link>
          </div>
  
          {/* More articles can follow... */}
        </div>
      </div>
    );
  }
  