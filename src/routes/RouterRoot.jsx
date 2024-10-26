import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SecondPage from "../pages/SecondPage";
import Error404 from "../pages/Error404";
export const PATH = {
  HERO: "/",
  SECOND: "/second",
  ERROR404: "*",
};
const RouterRoot = () => {
  return (
    <>
      <Routes>
        <Route path={PATH.HERO} element={<Home />} />
        <Route path={PATH.SECOND} element={<SecondPage />} />
        <Route path={PATH.ERROR404} element={<Error404 />} />
      </Routes>
    </>
  );
};

export default RouterRoot;
