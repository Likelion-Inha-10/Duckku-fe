import styled from "styled-components";

const ImageCard = styled.div`
  width: ${(props) => (props.width ? props.width : "154")}px;
  height: ${(props) => (props.height ? props.height : "220")}px;
  border: none;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "18"}px;
  background-image: url(${(props) => props.src});
  cursor: pointer;
  background-size: cover;
`;

export default ImageCard;
