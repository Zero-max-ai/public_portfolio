import Layout from "../components/layout/Layout";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Layout>
      <div className="h-screen flex flex-col gap-6 items-center justify-center geologica-regular">
        <div className="flex flex-col gap-1">
          <h1 className="text-8xl">404</h1>
          <span className="text-xl">Page Not Found</span>
        </div>
        <Link to={"/"} className="transition-all duration-300 hover:underline">
          Back to Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
