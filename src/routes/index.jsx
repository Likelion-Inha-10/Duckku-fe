import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "../pages/Intro";
import Purchase from "../pages/Purchase";
import Login from "../pages/Login";

// 라우트명은 kebab-case 로 작성합니다

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Intro />} />

      <Route exact path="/purchase" element={<Purchase />} />

      <Route exact path="/login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
