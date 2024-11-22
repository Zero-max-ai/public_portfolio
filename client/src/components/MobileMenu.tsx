import { useRecoilValue } from "recoil";
import { hamburgerStatus } from "../recoil/hamburgerAtom";
import { navigationUtils } from "../utils/";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {
  const status = useRecoilValue(hamburgerStatus);
  return (
    <div
      className={`absolute bg-[#f5f5f5] left-0 w-full h-screen transition-transform duration-500 ease-in-out ${status ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"} z-50 flex flex-col items-center justify-center lg:hidden`}
      style={{ top: "100%" }}
    >
      <div
        className={`text-black text-center transition-opacity duration-500 ease-in-out geologica-bold text-3xl flex flex-col gap-3 ${status ? "opacity-100" : "opacity-0"}`}
      >
        {navigationUtils.map((item, index) => {
          return (
            <NavLink key={index} to={item.loc} className="hover:underline">
              {item.title}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default MobileMenu;
