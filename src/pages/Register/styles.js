import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
export const CustomInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: rgb(231, 225, 225);
  background-image: ${(props) =>
    props.IsValid ? 'url("/images/true.png")' : 'url("/images/false.png")'};
  line-height: 50%;
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: right center;
  padding: 10px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;

  &::placeholder {
    font-size: 12px; /* 플레이스홀더 텍스트의 글꼴 크기 */
    color: #999; /* 회색 플레이스홀더 텍스트 색상 */
  }
`;

export const BoldText = styled.p`
  font-size: 15px;
  font-weight: bold;
  margin: 7px;
`;

export const RegisterButton = styled.button`
  width: 110%;
  background-color: #77a7ff;
  margin: 10px;
  color: white;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const PlaceholderText = styled.div`
  position: absolute;
  top: 12px; /* 원하는 플레이스홀더 텍스트 위치에 맞게 조절 */
  left: 12px; /* 원하는 플레이스홀더 텍스트 위치에 맞게 조절 */
  font-size: 8px;
  pointer-events: none;
  opacity: 0.5;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 200px; /* 원하는 input 너비에 맞게 설정 */
`;
