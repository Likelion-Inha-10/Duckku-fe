import styled from "styled-components";
import loveImg from "../../../assets/images/love.jpeg";
import Flex from "../../../duckku-ui/Flex";

// 앨범 wrap
const AlbumWrap = styled.div`
  width: 100%;
  height: 167px;
  background: #FFFFFF;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
`;


// 앨범 커버 wrap
const AlbumCoverWrap = styled.div`
  width: 95px;
  height: 130px;
  display: flex;
  margin-left: 30px;
  margin-top: 17px;
`;

// 앨범 커버
const AlbumCover = styled.img`
  width: 95px;
  height: 130px;
  display: flex;
`;

const ContentWrap = styled.div`
  width: 200px;
  height: 130px;
  display: flex;
  margin-left: 50px;
  margin-top: 17px;
`;

// 결제완료 박스
const PurchaseSuccess = styled.div`
  width: 250px;
  height: 17px;
  display: flex;
  margin-left: 20px;
  margin-top: 17px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #726969;
`;

// 노래 제목 박스
const Title = styled.div`
  width: 250px;
  height: 17px;
  display: flex;
  margin-left: 20px;
  margin-top: 7px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: black;
`;

// 옵션 박스
const Option = styled.div`
  width: 250px;
  height: 17px;
  display: flex;
  margin-left: 20px;
  margin-top: 7px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #726969;
`;

// 수량 박스
const Amount = styled.div`
  width: 200px;
  height: 17px;
  display: flex;
  margin-left: 20px;
  margin-top: 7px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #726969;
`;

// 가격 박스
const Price = styled.div`
  width: 200px;
  height: 19px;
  display: flex;
  margin-left: 20px;
  margin-top: 21px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: black;
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
            <Title>사랑으로 - 혁오</Title>
            <Option>옵션명 : 사랑으로 - 혁오 [응모권 미포함]</Option>
            <Amount>수량 : 1</Amount>
            <Price>₩9,700</Price>
          </Flex>
        </Flex>
    </AlbumWrap>
  );
};

export default PurchaseAlbum;