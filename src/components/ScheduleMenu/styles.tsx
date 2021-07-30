import styled from "styled-components";

export const Menu = styled.div`
  height: 50px;
  width: 100%;
  border-radius: var(--radius);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & > div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 150px;
    height: 100%;
    border-radius: var(--radius);
    background: var(--white);
  }
`;
