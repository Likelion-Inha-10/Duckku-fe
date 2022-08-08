import styled from "styled-components";

const Input = styled.input`
  border: none;
  border-bottom: 2px solid ${(props) => props.theme.colors[props.borderColor]};
  border-radius: 0;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "24")}px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "Pretendard-Regular"};
  height: ${(props) => (props.height ? props.height : "39")}px;
  line-height: 29px;
  width: 339px;
  height: 38px;
  padding-left: 5px;
  padding-bottom: 7px;
  box-sizing: border-box;
  outline: none;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.gray};
    font-family: "Pretendard-Regular";
    font-size: 24px;
    line-height: 29px;
  }
  :-ms-input-placeholder {
    color: ${(props) => props.theme.colors.gray};
    font-family: "Pretendard-Regular";
    font-size: 24px;
    line-height: 29px;
  }
`;

export default Input;
