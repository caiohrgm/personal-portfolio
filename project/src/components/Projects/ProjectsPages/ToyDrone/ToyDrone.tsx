import ProjectLayout from "../ProjectLayout"

const ToyDroneProject = () => {
  const companyIntro = (
    <div className="grid grid-cols-2 gap-6 items-center">
      <div>
        <h2 className="text-sm text-gray-500 uppercase">Industry</h2>
        <h1 className="text-3xl font-bold">Startup A</h1>
        <p className="mt-2 text-gray-600">
          Startup A was an e-commerce company specializing in delivering toys by drones.
        </p>
      </div>
      <div className="bg-gray-200 aspect-video flex items-center justify-center text-gray-500">
        Representative image
      </div>
    </div>
  );

  const roleAtCompany = (
    <div>
      <h2 className="text-2xl font-semibold">Title at Startup A</h2>
      <p className="mt-2 text-gray-600">
        I was responsible for research, information, and visual design.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500">
          Representative photo
        </div>
        <div className="bg-gray-200 h-48 flex items-center justify-center text-gray-500">
          Representative photo
        </div>
      </div>
    </div>
  );

  const projectDescription = (
    <div className="grid grid-cols-2 gap-6 items-start">
      <div>
        <h3 className="text-xl font-semibold">Three word problem description</h3>
        <p className="mt-2 text-gray-600">
          Longer description to entice portfolio readers to learn a bit more context and continue reading.
        </p>
        <ul className="mt-4 text-sm text-gray-500 space-y-1">
          <li><strong>Platform:</strong> Web, mobile</li>
          <li><strong>Work done:</strong> Research, UI/UX design</li>
          <li><strong>Timeframe:</strong> 3 months</li>
          <li><strong>Overview:</strong> Key takeaway or result of project</li>
        </ul>
      </div>
      <div className="bg-gray-200 aspect-video flex items-center justify-center text-gray-500">
        Final deliverable image
      </div>
    </div>
  );

  return (
    <ProjectLayout
      companyIntro={companyIntro}
      roleAtCompany={roleAtCompany}
      projectDescription={projectDescription}
    />
  );
};

export default ToyDroneProject;
