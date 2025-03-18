// src/components/ProjectLayout.tsx
import React from "react";

interface ProjectLayoutProps {
  companyIntro: React.ReactNode;
  roleAtCompany: React.ReactNode;
  projectDescription: React.ReactNode;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  companyIntro,
  roleAtCompany,
  projectDescription,
}) => {
  return (
    <div className="space-y-16 p-8 max-w-6xl mx-auto">
      {/* Section 3 */}
      <section>{companyIntro}</section>

      {/* Section 4 */}
      <section>{roleAtCompany}</section>

      {/* Section 5 */}
      <section>{projectDescription}</section>
    </div>
  );
};

export default ProjectLayout;
