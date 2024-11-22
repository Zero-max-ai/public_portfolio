import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const NotFound = lazy(() => import("./pages/PageNotFound"));
const Photos = lazy(() => import("./pages/Photography"));
const Loader = lazy(() => import("./components/Loader"));

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path={'/photography'} element={<Photos />} />
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
