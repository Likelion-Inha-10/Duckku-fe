import styled, { css } from "styled-components";

const OptionButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  border: none;
  width: auto;
  height: ${(props) => (props.height ? props.height : "37")}px;
  padding-left: 12px;
  padding-right: 12px;
  box-sizing: border-box;
  outline: none;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#F5F5F5"};
  border-radius: 17px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14")}px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
  color: #afafaf;
  transition: 0.5s;

  ${(props) =>
    props.activated &&
    css`
      background-color: ${props.theme.colors.primary};
      border: 1px solid transparent;
      color: ${props.theme.colors.white};
    `}

  ${(props) =>
    props.disabled &&
    css`
      background-color: ${props.theme.colors.white};
      border: 1px solid ${props.theme.colors.disabled};
      font-weight: normal;
      color: ${props.theme.colors.disabled};
    `};
`;

export default OptionButton;
