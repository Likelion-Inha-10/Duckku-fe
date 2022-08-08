import styled from "styled-components";

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #726969;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "18")}px;
  padding: 10px 12px;
  height: ${(props) => (props.height ? props.height : "54")}px;
  width: ${(props) => (props.width ? props.width : "300")}px;
  box-sizing: border-box;
  outline: none;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
`;

export default Input;
