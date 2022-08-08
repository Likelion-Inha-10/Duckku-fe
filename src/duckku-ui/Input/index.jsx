import styled from "styled-components";

const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors[props.borderColor]};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "24")}px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  height: ${(props) => (props.height ? props.height : "39")}px;
  line-height: 29px;
  width: 372px;
  padding-left: 5px;
  box-sizing: border-box;
  outline: none;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #b0b7c1;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
  }
  :-ms-input-placeholder {
    color: #b0b7c1;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
  }
`;

export default Input;
