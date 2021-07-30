import styled from "styled-components";

export const Wrapper = styled.form`
  position: relative;
  display: flex;
  height: 25px;
  min-width: 100px;
  & > svg {
    top: 4px;
    size: 10px;
    cursor: pointer;
    fill: var(--gray-text);
  }
  & > svg:first-child {
    position: absolute;
    left: 8px;
  }
  & > svg:last-child {
    position: absolute;
    right: 8px;
    /* visibility: hidden;  */
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
