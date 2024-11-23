import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Layout from "../components/layout/Layout";
import HeroSection from "../components/sections/HeroSection";
import WorkSection from "../components/sections/WorkSection";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#work") {
      const workSection = document.getElementById("work");
      if (workSection) {
        workSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <Layout>
      <div className="w-8/12 max-md:w-10/12 max-sm:w-full mx-auto">
        <HeroSection />
        <WorkSection />
      </div>
    </Layout>
  );
};

export default Home;
