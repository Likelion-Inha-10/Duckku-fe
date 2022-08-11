import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "../pages/Intro";
import ArtistSelect from "../pages/ArtistSelect";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import Store from "../pages/Store";
import MainHome from "./../pages/MainHome/index";
import FavoriteArtist from "./../pages/FavoriteArtist/index";

// 라우트명은 kebab-case 로 작성합니다

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Intro />} />
      <Route exact path="/artist-select" element={<ArtistSelect />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/sign-up" element={<SignUp />} />
      <Route exact path="/not-found" element={<NotFound />} />
      <Route exact path="/store" element={<Store />} />
      <Route exact path="/main-home" element={<MainHome />} />
      <Route exact path="/favorite-artist" element={<FavoriteArtist />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
