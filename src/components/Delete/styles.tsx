import styled from "styled-components";

export const Menu = styled.div`
  height: 160px;
  width: 250px;
  padding: 5px;
  background: var(--white);
  & > * {
    margin: 0 auto;
    text-align: center;
  }
  & > p {
    font-size: 1rem;
    color: var(--gray-text);
    font-weight: 500;
  }
  & > div {
    width: 100%;
    height: 30px;
    & > :first-child {
      margin-top: 3vh;
    }
  }
`;

export const Button = styled.button<{ confirm: boolean }>`
  border-radius: var(--radius);
  margin: 0 auto;
  margin-top: 1vh;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 600;
  justify-content: center;
  background: ${(props) =>
    props.confirm ? "var(--loading-red)" : "var(--blue)"};
  color: ${(props) => (props.confirm ? "var(--white)" : "var(--gray-text)")};
`;
