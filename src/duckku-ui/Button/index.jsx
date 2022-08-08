import styled, { css, withTheme } from "styled-components";

const Button = styled.button`
  position: relative;
  height: ${(props) => (props.height ? props.height : "50")}px;
  width: ${(props) => (props.width ? props.width : "250")}px;
  border: none;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "16"}px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16")}px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "600")};
  text-align: center;
  color: ${(props) => (props.color ? props.color : "#000000")};
  background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : props.theme.colors.main};
  z-index: inherit;

  ${(props) =>
    props.large &&
    css`
      width: 80px;
      height: 350px;
    `};

  ${(props) =>
    props.medium &&
    css`
      width: 50px;
      height: 250px;
    `};

  ${(props) =>
    props.small &&
    css`
      width: 35px;
      height: 200px;
    `};
`;

export default withTheme(Button);
