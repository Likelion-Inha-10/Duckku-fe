import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  vertical-align: middle;
  border: none;
  height: ${(props) => (props.height ? props.height : "42")}px;
  width: 320px;
  padding-left: 13px;
  box-sizing: border-box;
  outline: none;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#F5F5F5"};
  border-radius: 25px;
`;

const Input = styled.input`
  border: none;
  background: none;
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14")}px;
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "500")};
  width: 271px;
  line-height: 16px;
  outline: none;
  overflow: hidden;
  margin-left: 6px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #afafaf;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  }
  :-ms-input-placeholder {
    color: #afafaf;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
  }
`;

const InputBox = (props) => {
  return (
    <InputContainer
      height={props.height}
      backgroundColor={props.backgroundColor}
    >
      <IoSearch color="#afafaf" />
      <Input
        fontSize={props.fontSize}
        fontWeight={props.fontWeight}
        placeholder={props.placeholder}
        onChange={(e) => props.setSearchTerm(e.target.value)}
      />
    </InputContainer>
  );
};

export default InputBox;
