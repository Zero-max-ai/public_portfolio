import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Photography from "./pages/Photography";
import Blogs from "./pages/Blogs";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/about-me"} element={<About />} />
      <Route path={"photography"} element={<Photography />} />
      <Route path={"/my-blogs"} element={<Blogs />} />
    </Routes>
  );
};

export default App;
