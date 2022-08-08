import styled from "styled-components";

const InputContainer = styled.div`
  border: none;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "24")}px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  height: ${(props) => (props.height ? props.height : "42")}px;
  line-height: 29px;
  width: 320px;
  padding-left: 5px;
  box-sizing: border-box;
  outline: none;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#F5F5F5"};
  border-radius: 25px;

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

const InputBox = () => {
  return <InputContainer></InputContainer>;
};

export default InputBox;
