import { mainProject, sideProject } from "../../utils/index";
import MainProject from "../MainProject";
import SideProject from "../SideProject";

const FeaturedWorkSection = () => {
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div>
          <h1 className="geologica-medium">Featured Projects</h1>
          <div className="grid sm:grid-cols-3 grid-cols-1 gap-5">
            {mainProject.map(({ image, title, badge, description, cta }) => {
              return (
                <MainProject
                  key={title}
                  image={image}
                  title={title}
                  badge={badge}
                  description={description}
                  cta={cta}
                />
              );
            })}
          </div>
        </div>
        <div>
          <h1 className="geologica-medium">Side Projects</h1>
          <div>
            {sideProject.map(({ image, title, description, cta }) => {
              return (
                <SideProject
                  key={title}
                  image={image}
                  title={title}
                  description={description}
                  cta={cta}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedWorkSection;
