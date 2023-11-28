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
  z-index: 20;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    position: relative;
    width: 300px;
    margin: 16px;
    padding: 20px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    overflow: auto;

    > div {
      border-bottom: solid 1px #dbdbdb;
      width: 100%;
      height: 1px;
      margin-bottom: 15px;
    }

    > label {
      width: 100%;
      font-size: 16px;
      margin-bottom: 15px;
      cursor: pointer;

      &:first-child {
        font-weight: bold;
      }
      &:last-child {
        margin-bottom: 0;
        border: none;
      }
    }
  }
`;
