import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  & > svg {
    fill: var(--loading-red);
  }
`;

export const Item = styled.div`
  height: auto;
  width: 420px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  /* height: 100%; */
  border-bottom: 1px solid var(--gray);
  /* width: 100%; */
  height: auto;
  width: auto;
  font-size: 16px;
  padding: 15px;
  & > h4,
  h5 {
    color: var(--gray-text);
  }
`;
