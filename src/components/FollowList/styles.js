import styled from "styled-components";

export const Wrapper = styled.div`
  ::-webkit-scrollbar {
    width: 0;
  }
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    margin: 16px;
    padding: 20px;
    position: relative;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    border-radius: 30px;
    overflow: auto;
  }
`;

export const EachUserRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;
  padding: 10px 0px;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  > div > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const CloseButton = styled.img`
  position: absolute;
  right: 14px;
  top: 14px;
  cursor: pointer;
`;
