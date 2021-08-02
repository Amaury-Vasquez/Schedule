import styled from "styled-components";

export const Button = styled.button`
  /* height: auto; */
  /* width: auto; */
  display: flex;
  justify-content: center;
  align-items: center;
  & > svg {
    top: 4px;
    size: 10px;
    cursor: pointer;
    fill: var(--gray-text);
  }
`;

export const Search = styled.input`
  border: 1px solid var(--gray);
  border-radius: 18px;
  width: 100%;
  height: 100%;
  padding: 2px 23px 2px 30px;
  outline: 0;
  color: var(--gray-text);
  background-color: var(--white);
`;

export const Wrapper = styled.form`
  position: relative;
  display: flex;
  height: 25px;
  min-width: 100px;
  align-items: center;
  & > button:first-child {
    position: absolute;
    left: 8px;
  }
  & > button:last-child {
    position: absolute;
    right: 8px;
    /* visibility: hidden;  */
  }
`;
