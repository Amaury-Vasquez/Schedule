import styled from "styled-components";

export const Delete = styled.div`
  width: 500px;
  height: 320px;
  padding: var(--large-padding);
  & > * {
    margin: 0 auto;
  }
`;

export const Item = styled.div`
  height: auto;
  width: 420px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > svg {
    fill: var(--loading-red);
    cursor: pointer;
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

export const SubjectList = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
  display: grid;
  grid-template-columns: 1;
  grid-gap: var(--gap);
  justify-content: center;
  align-items: center;
  & :first-child {
    margin-top: 1vh;
  }
  &::-webkit-scrollbar-track {
    background: var(--gray);
    border-radius: 18px;
  }
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: var(--loading-red);
    border-radius: 18px;
  }
`;
