export default function SkillsAndExpertise() {
    return (
      <div>
        <section className="px-8 py-12">
          <h1 className="text-5xl font-bold font-raleway text-center mb-4">Skills & Expertise</h1>
          <p className="text-[#9C9C9C] text-lg text-center font-mono max-w-3xl mx-auto">
            Below are some of the key technologies and skills I specialize in, ranging from back-end development to data science and machine learning.
          </p>
        </section>
  
        {/* Data Science Section */}
        <section className="bg-[#1B1B1B] text-white py-12 px-8">
          <h2 className="text-3xl font-raleway mb-6">Data Science & Machine Learning</h2>
          <p className="text-[#9C9C9C] text-lg font-mono max-w-3xl mx-auto">
            I have extensive experience in data science, working with Python and several key libraries and frameworks. My expertise includes:
          </p>
          <ul className="text-[#9C9C9C] text-lg font-mono max-w-3xl mx-auto list-disc pl-6 mt-4">
            <li>Python, Scikit-learn, Pandas, TensorFlow</li>
            <li>Data visualization using Seaborn, Matplotlib, and Plotly</li>
            <li>Machine Learning, Neural Networks, and AI</li>
            <li>Power BI (beginner level)</li>
          </ul>
        </section>
  
        {/* Software Development Section */}
        <section className="px-8 py-12">
          <h2 className="text-3xl font-raleway mb-6">Software Development</h2>
          <p className="text-[#9C9C9C] text-lg font-mono max-w-3xl mx-auto">
            I have a solid foundation in software development, with a focus on back-end technologies and frameworks. My primary tools include:
          </p>
          <ul className="text-[#9C9C9C] text-lg font-mono max-w-3xl mx-auto list-disc pl-6 mt-4">
            <li>Python, Django framework</li>
            <li>TypeScript, JavaScript, and NestJS framework</li>
            <li>Prisma ORM for database management</li>
            <li>PostgreSQL as my primary database</li>
            <li>Firestore and MongoDB for certain use cases</li>
          </ul>
        </section>
  
        {/* Code Versioning Section */}
        <section className="bg-[#1B1B1B] text-white py-12 px-8">
          <h2 className="text-3xl font-raleway mb-6">Code Versioning</h2>
          <p className="text-[#9C9C9C] text-lg font-mono max-w-3xl mx-auto">
            I am proficient in code versioning and have extensive experience with:
          </p>
          <ul className="text-[#9C9C9C] text-lg font-mono max-w-3xl mx-auto list-disc pl-6 mt-4">
            <li>GitHub for version control and collaboration</li>
            <li>GitLab for continuous integration and project management</li>
          </ul>
        </section>
      </div>
    );
  }
  