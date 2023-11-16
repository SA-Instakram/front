import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px;
  background-color: #ffffff;

  border-radius: 10px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.06),
    -2px 0 4px rgba(0, 0, 0, 0.06), 2px 0 4px rgba(0, 0, 0, 0.06);
`;

export const SpaceBetweenDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px 0px;
  padding: 4px 16px;

  > div {
    display: flex;
    align-items: center;

    > span {
      cursor: pointer;
    }

    > img {
      cursor: pointer;
    }
  }
`;

export const Article = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0px 16px 16px 16px;
`;
