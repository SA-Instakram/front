import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
  text-align: baseline;
  border-bottom: 1px solid #dbdbdb;

  > h1 {
    all: unset;
    font-size: 26px;
    font-weight: 600;
  }

  > div > img {
    margin-left: 14px;
  }
`;
