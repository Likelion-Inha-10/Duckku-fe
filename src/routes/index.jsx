import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "../pages/Intro";
import Purchase from "../pages/Purchase";
import ArtistSelect from "../pages/ArtistSelect";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import Store from "../pages/Store";
import MainHome from "./../pages/MainHome/index";
import Album from "../pages/Album/index";
import FavoriteArtist from "./../pages/FavoriteArtist/index";
import Wish from "../pages/Wish";
import MyPage from "../pages/MyPage";
import Interested from "../pages/Interested";
import MyInform from "../pages/MyInform";
import MyFixInform from "../pages/MyFixInform";
import Payment from "../pages/Payment";
import PurchaseHistory from "../pages/PurchaseHistory";
import Start from "../pages/Start";

//모달창 생성 테스트 페이지 입니다. 페이지 생성되면 적용 후에 지울 예정
import ModalAlbumTest from "../pages/ModalQrTest";
// 라우트명은 kebab-case 로 작성합니다

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Intro />} />
      <Route exact path="/purchase" element={<Purchase />} />
      <Route exact path="/wish" element={<Wish />} />
      <Route exact path="/interested-artist-albums" element={<Interested />} />
      <Route exact path="/artist-select" element={<ArtistSelect />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/sign-up" element={<SignUp />} />
      <Route exact path="/not-found" element={<NotFound />} />
      <Route exact path="/store" element={<Store />} />
      <Route exact path="/main-home" element={<MainHome />} />
      <Route exact path="/album" element={<Album />} />
      <Route exact path="/favorite-artist" element={<FavoriteArtist />} />
      <Route exact path="/my-page" element={<MyPage />} />
      <Route exact path="/my-inform" element={<MyInform />} />
      <Route exact path="/test" element={<ModalAlbumTest />} />
      <Route exact path="/my-inform-fix" element={<MyFixInform />} />
      <Route exact path="/payment" element={<Payment />} />
      <Route exact path="/purchase-history" element={<PurchaseHistory />} />
      <Route exact path="/start" element={<Start />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
