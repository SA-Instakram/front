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

export const PhotoBox = styled.div`
  margin: 16px;
  border-radius: 10px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.06),
    -2px 0 4px rgba(0, 0, 0, 0.06), 2px 0 4px rgba(0, 0, 0, 0.06);
`;

export const ContentBox = styled.input`
  margin: 16px;
  padding: 16px;
`;
