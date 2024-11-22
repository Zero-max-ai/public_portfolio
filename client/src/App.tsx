import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Loader = lazy(() => import('./components/Loader'))

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
      </Routes>
    </Suspense>
  );
};

export default App;
