import styled, { css, withTheme } from "styled-components";

const Button = styled.button`
  position: relative;
  height: ${(props) => (props.height ? props.height : "64")}px;
  width: ${(props) => (props.width ? props.width : "384")}px;
  border: none;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "16"}px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "16")}px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "700")};
  text-align: center;
  color: ${(props) => (props.color ? props.color : props.theme.colors.white)};
  background: ${(props) =>
    props.backgroundColor
      ? props.theme.colors[props.backgroundColor]
      : props.theme.colors.main};
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
