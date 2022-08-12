import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "../pages/Intro";

import Purchase from "../pages/Purchase";

import ArtistSelect from "../pages/ArtistSelect";

import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import Store from "../pages/Store";
import MainHome from "./../pages/MainHome/index";
import Wish from "../pages/Wish";
import MyPage from "../pages/MyPage";
import MyInform from "../pages/MyInform";

// 라우트명은 kebab-case 로 작성합니다

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Intro />} />
      <Route exact path="/purchase" element={<Purchase />} />
      <Route exact path="/Wish" element={<Wish />} />
      <Route exact path="/artist-select" element={<ArtistSelect />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/sign-up" element={<SignUp />} />
      <Route exact path="/not-found" element={<NotFound />} />
      <Route exact path="/store" element={<Store />} />
      <Route exact path="/main-home" element={<MainHome />} />
      <Route exact path="/my-page" element={<MyPage />} />
      <Route exact path="/my-inform" element={<MyInform />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
