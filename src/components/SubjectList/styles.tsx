import styled from "styled-components";

import { fadeIn } from "../../styles/animation";

export const Item = styled.div`
  ${fadeIn({ time: "2s" })};
  height: auto;
  width: 420px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--gray);
  padding: 15px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const List = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1;
  grid-gap: var(--gap);
  justify-content: center;
  align-items: center;
  & :first-child {
    margin-top: 1vh;
  }
`;

export const Subject = styled.div`
  height: auto;
  width: auto;
  font-size: 16px;
  & > h4,
  h5 {
    color: var(--gray-text);
  }
`;
