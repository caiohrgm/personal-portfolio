export default function AboutMe() {
  return (
    <div>
      <section className="px-8 py-12">
        <h1 className="text-5xl font-bold font-raleway text-left mb-4 text-[#9C9C9C]">
          About Me
        </h1>
        <p className="text-[#9C9C9C] text-lg text-left font-mono max-w-3xl mx-auto">
          Hello! I'm Caio Medeiros, a passionate Software Engineer and Data
          Scientist with extensive experience in back-end development and
          machine learning. I specialized in building efficient systems and
          data-driven solutions.
        </p>
      </section>

      <section className="bg-[#1B1B1B] text-white py-12 px-8">
        <h2 className="text-3xl font-raleway mb-6">Professional Background</h2>
        <p className="text-[#9C9C9C] text-lg font-mono max-w-3xl mx-auto">
          With a solid background in back-end technologies and data science,
          I've had the opportunity to work on a variety of projects ranging from
          developing APIs to analyzing and extracting insights from complex
          datasets. Over the years, I've honed my skills in technologies such as
          Python, Node.js, AWS, etc.
        </p>
      </section>

      <section className="px-8 py-12">
        <h2 className="text-3xl font-raleway text-center mb-6">
          Key Technologies & Skills
        </h2>
        <ul className="text-[#9C9C9C] text-lg font-mono max-w-3xl mx-auto">
          <li>
            • **Back-End Development:** [List technologies like Node.js, Django,
            etc.]
          </li>
          <li>
            • **Data Science & Analytics:** [List technologies like Python,
            Pandas, etc.]
          </li>
          <li>
            • **Databases:** [List DB systems like MySQL, PostgreSQL, MongoDB,
            etc.]
          </li>
          <li>
            • **Cloud Computing:** [List cloud platforms like AWS, GCP, etc.]
          </li>
          <li>• **Version Control & CI/CD:** [Git, GitHub, Jenkins, etc.]</li>
        </ul>
      </section>

      <section className="bg-[#1B1B1B] text-white py-12 px-8">
        <h2 className="text-3xl font-raleway mb-6">
          My Approach to Development
        </h2>
        <p className="text-[#9C9C9C] text-lg font-mono max-w-3xl mx-auto">
          I believe in writing clean, maintainable code that solves real-world
          problems efficiently. In my back-end development work, I prioritize
          scalability and performance. When it comes to data science, I focus on
          extracting actionable insights and building predictive models that add
          value to businesses.
        </p>
      </section>

      <section className="px-8 py-12">
        <h2 className="text-3xl font-raleway text-center mb-6">
          Education & Certifications
        </h2>
        <div className="text-[#9C9C9C] text-lg font-mono max-w-3xl mx-auto">
          <p>
            <strong>Degree:</strong> [Your Degree, e.g., Bachelor of Science in
            Computer Science]
          </p>
          <p>
            <strong>University:</strong> [University Name]
          </p>
          <p>
            <strong>Certifications:</strong> [List any relevant certifications,
            e.g., AWS Certified Developer, Data Science Bootcamp, etc.]
          </p>
        </div>
      </section>

      <section className="bg-[#1B1B1B] text-white py-12 px-8">
        <h2 className="text-3xl font-raleway mb-6">Outside of Work</h2>
        <p className="text-[#9C9C9C] text-lg font-mono max-w-3xl mx-auto">
          When I'm not coding, I enjoy [list hobbies or interests, e.g., playing
          chess, hiking, exploring new technologies, etc.]. I believe in
          maintaining a balanced lifestyle to keep my mind sharp and stay
          motivated in my work.
        </p>
      </section>
    </div>
  );
}
