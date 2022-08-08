import styled from "styled-components";

const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors[props.borderColor]};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "18")}px;
  height: ${(props) => (props.height ? props.height : "40")}px;
  width: 372px;
  padding-left: 5px;
  box-sizing: border-box;
  outline: none;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
`;

export default Input;
