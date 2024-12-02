import Layout from "../components/layout/Layout";
import HomeSection from "../components/sections/HomeSection";
import FeaturedWorkSection from "../components/sections/FeaturedWorkSection";

// import Button from "../components/Button";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

const Home = () => {
  return (
    <Layout>
      <div className="py-20 w-11/12 max-sm:w-10/12 mx-auto">
        <div className="flex flex-col gap-10">
          {/* <div className="flex flex-col ">
            <h1 className="geologica-bold text-4xl mb-4">Hi, this is Akshat</h1>
            <span className="source-code-pro-normal">
              Building tools that simplify developer's workflows.
            </span>
            <span className="source-code-pro-normal pb-5">
              Currently working on open-source projects and ricing my Linux
              environment. Based in New Delhi, India
            </span>
          </div> */}
          <HomeSection />
          <FeaturedWorkSection />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
