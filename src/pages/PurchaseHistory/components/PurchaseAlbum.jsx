import styled from "styled-components";
import loveImg from "../../../assets/images/love.jpeg";
import Flex from "../../../duckku-ui/Flex";
import Typography from "../../../duckku-ui/Typography";

// 앨범 wrap
const AlbumWrap = styled.div`
  width: 100%;
  height: 140px;
  background: #FFFFFF;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
  border-bottom-color: rgba(114, 105, 105, 0.18);
  border-bottom-width: 1px;
`;


// 앨범 커버 wrap
const AlbumCoverWrap = styled.div`
  width: 79px;
  height: 107px;
  display: flex;
  margin-left: 30px;
  margin-top: 17px;
  border-radius: 6px;
`;

// 앨범 커버
const AlbumCover = styled.img`
  width: 79px;
  height: 107px;
  display: flex;
  border-radius: 6px;
`;

// 결제완료 박스
const PurchaseSuccess = styled.div`
  width: 250px;
  height: 17px;
  display: flex;
  margin-left: 40px;
  margin-top: 17px;
  background: linear-gradient(92.33deg, rgba(112, 1, 255, 0.8) 6.14%, rgba(193, 92, 255, 0.8) 94.68%);  color: transparent;
  -webkit-background-clip: text;
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 700;
`;

// 노래 제목 박스
const Title = styled.div`
  width: 200px;
  height: 17px;
  display: block;
  margin-left: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// 옵션 박스
const Option = styled.div`
  width: 230px;
  height: 17px;
  display: block;
  margin-left: 40px;
  margin-top: 7px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: -0.447754px;
`;

// 옵션 박스
const Ticket = styled.div`
  width: 230px;
  height: 17px;
  display: block;
  margin-left: 40px;
  margin-top: 2px;
  letter-spacing: -0.447754px;
`;

// 수량 박스
const Amount = styled.div`
  display: flex;
  margin-top: 13px;
`;

// 가격 박스
const Price = styled.div`
  width: 85px;
  display: flex;
  margin-left: 40px;
  margin-top: 12px;
`;

const PurchaseAlbum = () => {
  return (
    <AlbumWrap>
      <Flex direction="row">
        <AlbumCoverWrap>
          <AlbumCover src={loveImg} />
        </AlbumCoverWrap>
          <Flex direction="column">
            <PurchaseSuccess>결제완료</PurchaseSuccess>
            <Title>
              <Typography bold14>사랑으로 - 혁오</Typography>
            </Title>
            <Option>
              <Typography thin14 color="darkGray">옵션명 : 사랑으로 - 혁오</Typography>
              </Option>
            <Ticket>
              <Typography thin14 color="darkGray">               [응모권 미포함]</Typography>
            </Ticket>
            <Flex dorection="row">
              <Price>
                <Typography thin16>₩9,700</Typography>
              </Price>
              <Amount>
                <Typography thin14 color="darkGray">수량 : 1</Typography>
              </Amount>
            </Flex>
          </Flex>
        </Flex>
    </AlbumWrap>
  );
};

export default PurchaseAlbum;