import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "../pages/Intro";

// 라우트명은 kebab-case 로 작성합니다

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Intro />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
