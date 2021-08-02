import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Day = styled.div<{ column: number }>`
  grid-column: ${(props) => props.column + 2};
  grid-row: 1;
  border: 1px solid var(--gray);
  background: var(--loading-red);
  height: 60px;
  & > h4 {
    color: var(--white);
  }
  @media screen and (max-width: 500px) {
    height: 100%;
    align-self: center;
    grid-column: ${(props) => props.column + 3};
  }
`;

export const Hour = styled.div<{
  fillBox: boolean;
  column: number;
  row: number;
}>`
  width: 100%;
  height: 100%;
  grid-column: ${(props) => props.column + 2};
  grid-row: ${(props) => props.row + 2};
  ${(props) =>
    css`
    background: ${props.fillBox ? "var(--white)" : "var(--blue)"}};
  `}
  & > p {
    font-weight: 500;
    color: var(--gray-text);
  }
  @media screen and (max-width: 500px) {
    grid-column: ${(props) => props.column + 3};
  }
`;

export const ScheduleDiv = styled.div`
  background: var(--gray);
  width: 90%;
  height: auto;
  padding: var(--large-padding);
  & > * {
    margin-bottom: 2vh;
  }
  & > :last-child {
    margin-bottom: 0;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: var(--padding);
    height: 100vh;
    & > * {
      margin-bottom: 0px;
    }
  }
`;

export const ScheduleView = styled.div<{ columns: number; rows: number }>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
  grid-gap: var(--gap);
  height: auto;
  width: 100%;

  & > div {
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--padding);
    & > h4,
    > p {
      text-align: center;
    }
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(${(props) => props.columns + 1}, 1fr);
    grid-gap: 5px;
    & > div {
      width: auto;
      height: auto;
      & > h4,
      p {
        font-size: 10px;
      }
    }
  }
`;

export const Subject = styled.div<{ row: number }>`
  grid-row: ${(props) => props.row + 2};
  grid-column: 1;
  border: 1px solid var(--gray);
  height: 8vh;
  background: var(--white);
  & > h4 {
    color: var(--gray-text);
  }
  @media screen and (max-width: 500px) {
    word-break: break-word;
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;
