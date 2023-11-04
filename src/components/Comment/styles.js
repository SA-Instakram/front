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
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    position: relative;
    margin: 16px;
    padding: 20px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    border-radius: 30px;
    overflow: auto;
  }
`;

export const ArticleContext = styled.div`
  display: flex;
  align-items: start;
  border-bottom: 1.4px solid #dbdbdb;
  padding: 10px 0px;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
  }
`;

export const EachComment = styled.div`
  display: flex;
  align-items: start;
  padding: 10px 0px;

  > div {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  > div > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 10px;
  }
`;

export const CloseButton = styled.img`
  position: absolute;
  right: 14px;
  top: 14px;
  cursor: pointer;
`;
