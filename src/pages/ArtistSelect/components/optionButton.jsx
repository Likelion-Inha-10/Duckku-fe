import styled, { css } from "styled-components";

const OptionButton = styled.button`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  border: none;
  width: fit-content;
  height: ${(props) => (props.height ? props.height : "37")}px;
  padding-left: 12px;
  padding-right: 12px;
  margin-left: 5px;
  margin-right: 5px;
  box-sizing: border-box;
  outline: none;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#F5F5F5"};
  border-radius: 17px;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14")}px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
  white-space: nowrap;
  color: #afafaf;
  z-index: 10;
  transition: 0.5s;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  ${(props) =>
    props.activated &&
    css`
      background: ${props.theme.colors.main};
      color: ${props.theme.colors.white};
      transition: 0.5s;
    `}
`;

export default OptionButton;
