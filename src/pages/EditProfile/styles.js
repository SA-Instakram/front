import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 47.5px;
  width: 100%;
  height: 100%;
`;

export const HeadWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 390px;
  min-height: 46.5px;
  background-color: #ffffff;
  justify-content: space-between;
  align-items: center;
  text-align: baseline;
  border-bottom: 1px solid #dbdbdb;
  z-index: 2;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-bottom: 8px;
    margin-top: 4px;
  }
`;

export const Label = styled.label`
  color: gray;
  text-align: left;
  font-size: 10px;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 1px solid black;
`;

export const CustomInput = styled.input`
  display: block;
  margin-bottom: 20px;
  visibility: hidden;
  position: absolute;
`;

export const ImagePreview = styled.img`
  max-width: 100px;
  max-height: 100px;
  border-radius: 50%;
  overflow: hidden;
  display: block;
  margin: 10px auto;
`;
