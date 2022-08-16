import styled, { css } from "styled-components";
import Flex from "../../../duckku-ui/Flex";
import Margin from "../../../duckku-ui/Margin";
import Typography from "../../../duckku-ui/Typography";

const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
`;

const ArtistProfile = styled.div`
  width: 96px;
  height: 96px;
  margin-left: 8px;
  margin-right: 8px;
  box-sizing: border-box;
  border: 2px solid white;
  background: url(${(props) => (props.link ? props.link : "")}) no-repeat;
  background-size: cover;
  border-radius: 50%;
  transition: 0.5s;

  ${(props) =>
    props.activated === true &&
    css`
      border: 2px solid ${props.theme.colors.purple};
      background: linear-gradient(
          0deg,
          rgba(112, 0, 255, 0.2),
          rgba(112, 0, 255, 0.2)
        ),
        url(${(props) => (props.link ? props.link : "")}) no-repeat;
      background-size: cover;
      backdrop-filter: blur(22px);
      transition: 0.5s;
    `}
`;

const ArtistButton = (props) => {
  return (
    <ButtonWrapper onClick={props.onClick}>
      <Flex direction="column" align="center">
        <ArtistProfile activated={props.activated} link={props.link} />
        <Margin height="16" />
        <Typography
          thin14
          fontWeight="500"
          color={props.activated ? "heardText" : "gray"}
        >
          {props.artistName}
        </Typography>
        <Margin height="32" />
      </Flex>
    </ButtonWrapper>
  );
};

export default ArtistButton;
