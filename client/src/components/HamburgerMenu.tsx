import { hamburgerStatus } from "../recoil/hamburgerAtom";
import { useRecoilState } from "recoil";

const HamburgerMenu = () => {
  const [status, setStatus] = useRecoilState(hamburgerStatus);
  const toggleState = () => {
    setStatus(!status);
  };
  return (
    <div
      onClick={toggleState}
      className="lg:hidden flex flex-col gap-2 cursor-pointer"
    >
      <span
        className={`block bg-black w-7 h-0.5 origin-center transition-all duration-300 ${status ? "rotate-45 translate-y-1.5 " : ""}`}
      ></span>
      <span
        className={`block bg-black w-7 h-0.5 origin-center transition-all duration-300 ${status ? "-rotate-45 -translate-y-1" : ""}`}
      ></span>
    </div>
  );
};

export default HamburgerMenu;
