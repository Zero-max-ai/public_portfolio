import { Link } from "react-router-dom";

interface ProjectCardProps {
  img: string;
  title: string;
  description: string;
  projectType: {
    type: string;
    color: string;
  };
  renderTo: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  img,
  title,
  description,
  projectType,
  renderTo,
}) => {
  return (
    <Link to={renderTo} target={"_blank"}>
      <div className="p-5 group drop-shadow-2xl">
        <img
          src={img}
          className="rounded-2xl transition-all duration-200 group-hover:rounded-none shadow-xl"
        />
        <div className="flex flex-col gap-3 source-code-pro-regular">
          <span
            className={`px-3 py-1 rounded-3xl w-fit mt-5 flex items-center gap-2 geologica-bold text-sm ${projectType.color == "blue" ? "bg-blue-200 text-blue-700" : "bg-pink-200 text-pink-700"}`}
          >
            <span
              className={`w-3 h-3 block rounded-full ${projectType.color == "blue" ? "bg-blue-700" : "bg-pink-700"}`}
            ></span>
            {projectType.type}
          </span>
          <h1 className="text-xl geologica-bold">{title}</h1>
          <span className="text-sm">{description}</span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
