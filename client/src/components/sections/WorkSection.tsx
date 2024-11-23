import ProjectCard from "../ProjectCard";
import { projectDetails } from "../../utils/";

const WorkSection = () => {
  return (
    <div id="work" className="w-7/12 max-lg:w-11/12 mx-auto py-20 flex flex-col gap-4 justify-center">
      <h1 className="geologica-bold text-3xl pb-5">My Work</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projectDetails.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              img={project.image}
              title={project.title}
              description={project.description}
              projectType={project.projectType}
              renderTo="/"
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkSection;
