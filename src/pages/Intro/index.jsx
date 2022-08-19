import Layout from "../../duckku-ui/Layout";
import Margin from "../../duckku-ui/Margin";
import Typography from "../../duckku-ui/Typography";
import styled from "styled-components";
import Tutorial01 from "../../assets/svgs/tutorial01.svg";
import Tutorial02 from "../../assets/svgs/tutorial02.svg";
import Tutorial03 from "../../assets/svgs/tutorial03.svg";
import Button from "../../duckku-ui/Button";
import Slider from "react-slick";
import Flex from "../../duckku-ui/Flex";
import "./components/slick.css";
import { ReactComponent as StartTitle } from "../../assets/svgs/startTitle.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StyledSlider = styled(Slider)`
  &,
  .slick-track,
  .slick-slide,
  .slick-list,
  .slick-slide > div {
    width: 100%;
    height: 615px;
  }
`;

const SlideWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Title = styled(Typography)`
  width: 314px;
  height: 58px;
  line-height: 29px;
  letter-spacing: 2.55px;
`;

const SubTitle = styled(Typography)`
  width: 314px;
  height: 38px;
  line-height: 19px;
  letter-spacing: 0.55px;
`;

const StyledSpan = styled.span`
  background: linear-gradient(92.33deg, #7000ff 6.14%, #c15cff 94.68%);
  color: transparent;
  -webkit-background-clip: text;
  font-family: "Pretendard-Bold";
`;

const StyledImg = styled.img`
  width: 234px;
  height: 447px;
`;

const ButtonWrapper = styled.div`
  vertical-align: middle;
  position: fixed;
  bottom: 56px;
`;

const StartPageWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  z-index: ${(props) => (props.visible === false ? 100 : -10)};
  opacity: ${(props) => (props.visible === false ? 1 : 0)};
  transition: 0.5s;
`;

const Intro = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesTosShow: 2,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul>{dots}</ul>
      </div>
    ),
    dotsClass: "dots_custom",
    afterChange: (current) => setSlide(current),
  };

  const [slide, setSlide] = useState(0);
  const [startLoad, setStartLoad] = useState(false);
  const navigate = useNavigate();

  const onClickButton = () => {
    navigate(`/start`);
  };

  useEffect(() => {
    setTimeout(function () {
      console.log("Works!");
      setStartLoad(true);
    }, 2000);
  }, []);

  return (
    <Layout>
      <StartPageWrapper visible={startLoad}>
        <Typography bold16>나만의 덕질 꾸미기</Typography>
        <Margin height="18" />
        <StartTitle />
      </StartPageWrapper>
      <Margin height="59" />
      <StyledSlider {...settings}>
        <SlideWrapper>
          <Flex justify="center">
            <Title thin24 color="black">
              좋아하는
              <br />
              <StyledSpan>아티스트를 등록</StyledSpan>
              하세요
            </Title>
          </Flex>

          <Margin height="36" />
          <Flex justify="center">
            <SubTitle thin16 color="black">
              좋아하는 아티스트가 설정되면
              <br />
              당신에게 최적화된 서비스를 지원합니다.
            </SubTitle>
          </Flex>

          <Margin height="36" />
          <Flex justify="center">
            <StyledImg src={Tutorial01} />
          </Flex>
        </SlideWrapper>

        <SlideWrapper>
          <Flex justify="center">
            <Title thin24 color="black">
              <StyledSpan>토큰형 앨범</StyledSpan>으로
              <br />
              저렴하게 구매하세요
            </Title>
          </Flex>
          <Margin height="36" />
          <Flex justify="center">
            <SubTitle thin16 color="black">
              실물 앨범의 제작, 유통비용을 없애,
              <br />
              필요로 했던 상품들을 합리적인 가격에 판매합니다.
            </SubTitle>
          </Flex>

          <Margin height="36" />

          <Flex justify="center">
            <StyledImg src={Tutorial02} />
          </Flex>
        </SlideWrapper>

        <SlideWrapper>
          <Flex justify="center">
            <Title thin24 color="black">
              구매한 앨범을
              <br />
              <StyledSpan>편리하게 보관</StyledSpan>하세요
            </Title>
          </Flex>
          <Margin height="36" />
          <Flex justify="center">
            <SubTitle thin16 color="black">
              소중한 나의 앨범을
              <br />
              온라인 상에서 편리하게 보관하세요.
            </SubTitle>
          </Flex>

          <Margin height="36" />

          <Flex justify="center">
            <StyledImg src={Tutorial03} />
          </Flex>
        </SlideWrapper>
      </StyledSlider>

      <ButtonWrapper>
        {slide === 2 ? (
          <Button
            width="350"
            height="60"
            borderRadius="15"
            backgroundColor="main"
            onClick={() => onClickButton()}
          >
            서비스 시작하기
          </Button>
        ) : (
          <Button
            width="350"
            height="60"
            borderRadius="15"
            backgroundColor="btnGray"
          >
            서비스 시작하기
          </Button>
        )}
      </ButtonWrapper>
    </Layout>
  );
};

export default Intro;
