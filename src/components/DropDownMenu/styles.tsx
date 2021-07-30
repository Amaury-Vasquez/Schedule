import styled from "styled-components";

export const DropDown = styled.div<{ active: boolean }>`
  position: relative;
  display: inline-block;
  & > div {
    display: ${(props) => (props.active ? "block" : "none")};
  }
  & > svg {
    color: var(--loading-red);
    font-size: 20px;
  }
  &:hover {
    display: block;
  }
`;

export const DropDownContent = styled.div`
  /* margin-top: 2vh; */
  display: none;
  position: absolute;
  width: auto;
  height: auto;
  padding: 15px;
  background: var(--white);
  border-radius: var(--radius);
  right: 0;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  & > * {
    display: block;
  }
`;
