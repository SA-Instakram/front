import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  padding: 8px 0px;
  width: 100%;
  max-width: 390px;
  background-color: #ffffff;
  justify-content: space-between;
  align-items: center;
  text-align: baseline;
  border-bottom: 1px solid #dbdbdb;
  z-index: 2;

  > h1 {
    all: unset;
    font-size: 26px;
    font-weight: 600;
    cursor: pointer;
  }

  > div > img {
    margin-left: 14px;
    cursor: pointer;
  }
`;
