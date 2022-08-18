import styled from "styled-components";
import { FiHome } from "react-icons/fi";
import Typography from "../Typography";
import { IoDiamondOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useNavigate, useLocation } from "react-router-dom";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 390px;
  width: ${(props) => (props.width ? props.width : "390")}px;
  height: 88px;
  background-color: white;

  border-radius: 16px 16px 8px 8px;
  box-shadow: 0px -2px 3px 0px #00000033;

  display: flex;
  justify-content: space-around;
  align-items: center;

  z-index: 50;
`;

const ElementWrapper = styled.div`
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Footer = (props) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClickHome = () => {
    if (location.pathname === "/main-home") {
      console.log("already home");
    } else {
      navigate(`/main-home`);
    }
  };

  const onClickStore = () => {
    if (location.pathname === "/store") {
      console.log("already store");
    } else {
      navigate(`/store`);
    }
  };

  const onClickMy = () => {
    if (location.pathname === "/my-page") {
      console.log("already my page");
    } else {
      navigate(`/my-page`);
    }
  };

  return (
    <>
      <svg width="0" height="0">
        <linearGradient id="mainColor" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop stopColor="#7000FF" offset="0%" />
          <stop stopColor="#C15CFF" offset="100%" />
        </linearGradient>
      </svg>
      <Wrapper>
        <ElementWrapper onClick={() => onClickHome()}>
          {props.active === "home" ? (
            <>
              <FiHome size="24" style={{ stroke: "url(#mainColor)" }} />
              <Typography regular14 mainColor>
                Home
              </Typography>
            </>
          ) : (
            <>
              <FiHome size="24" color="#6D6D6D" />
              <Typography regular14 color="navGray">
                Home
              </Typography>
            </>
          )}
        </ElementWrapper>

        <ElementWrapper onClick={() => onClickStore()}>
          {props.active === "store" ? (
            <>
              <IoDiamondOutline
                size="24"
                style={{ stroke: "url(#mainColor)" }}
              />
              <Typography regular14 mainColor>
                Store
              </Typography>
            </>
          ) : (
            <>
              <IoDiamondOutline size="24" color="#6D6D6D" />
              <Typography regular14 color="navGray">
                Store
              </Typography>
            </>
          )}
        </ElementWrapper>

        <ElementWrapper onClick={() => onClickMy()}>
          {props.active === "my" ? (
            <>
              <HiOutlineUserCircle
                style={{ stroke: "url(#mainColor)" }}
                size="24"
              />

              <Typography regular14 mainColor>
                My
              </Typography>
            </>
          ) : (
            <>
              <HiOutlineUserCircle size="24" color="#6D6D6D" />
              <Typography regular14 color="navGray">
                My
              </Typography>
            </>
          )}
        </ElementWrapper>
      </Wrapper>
    </>
  );
};

export default Footer;
