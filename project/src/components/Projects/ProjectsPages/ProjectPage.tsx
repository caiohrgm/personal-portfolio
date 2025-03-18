// src/pages/ProjectPage.tsx
import { useParams } from "react-router-dom";
import ProjectLayout from "./ProjectLayout";

// Optionally you could define your data somewhere else (JSON or object)
const projectData: Record<string, any> = {
  "project-one": {
    companyIntro: <p>Company A was a startup focused on XYZ...</p>,
    roleAtCompany: <p>I led research and design for the MVP...</p>,
    projectDescription: <p>We tackled [problem] using [tech stack]...</p>,
  },
  "project-two": {
    companyIntro: <p>Company B focused on logistics software...</p>,
    roleAtCompany: <p>Handled frontend architecture & UX...</p>,
    projectDescription: <p>Solution improved [metrics] using [tools]...</p>,
  },
};

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectData[slug || ""];

  if (!project) {
    return <div className="text-center py-16 text-red-500">Project not found.</div>;
  }

  return (
    <ProjectLayout
      companyIntro={project.companyIntro}
      roleAtCompany={project.roleAtCompany}
      projectDescription={project.projectDescription}
    />
  );
}
