import { useParams } from "react-router-dom";
import { projects } from "../Data/projecstsData";
import ProjectLayout from "./ProjectLayout";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return <div className="p-8 text-red-500">Project not found</div>;
  }

  return (
    <ProjectLayout
      companyIntro={
        <div>
          <h2 className="text-3xl font-bold">{project.title}</h2>
          <p className="text-lg">{project.industry}</p>
          <p>{project.description}</p>
        </div>
      }
      roleAtCompany={
        <div>
          <h3 className="text-2xl font-semibold">My Role</h3>
          <p>{project.role}</p>
        </div>
      }
      projectDescription={
        <div>
          {/* You can put more info here */}
        </div>
      }
    />
  );
}
