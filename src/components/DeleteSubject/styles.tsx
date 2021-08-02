import styled from "styled-components";

export const Delete = styled.div`
  width: 500px;
  height: 320px;
  padding: var(--large-padding);
  overflow-y: scroll;
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
  & > * {
    margin: 0 auto;
  }
  & > :first-child {
    margin-bottom: 1vh;
  }
`;
