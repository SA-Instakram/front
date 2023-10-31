import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  padding: 0px 16px;
  justify-content: space-between;
  align-items: center;
  text-align: baseline;

  > h1 {
    all: unset;
    font-size: 30px;
    font-weight: 600;
  }

  > div > span {
    margin-left: 10px;
  }
`;
