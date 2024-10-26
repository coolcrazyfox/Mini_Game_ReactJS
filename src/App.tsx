import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SecondPage from "./pages/SecondPage";

const App = (): JSX.Element => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route index element={<SecondPage />}></Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
