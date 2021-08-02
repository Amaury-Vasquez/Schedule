import styled from "styled-components";

import { fadeOut } from "../../styles/animation";

export const DropDown = styled.div<{ active: boolean }>`
  position: relative;
  display: inline-block;
  align-items: center;
  & > div {
    display: ${(props) => (props.active ? "block" : "none")};
  }
  & > svg {
    color: var(--loading-red);
    cursor: pointer;
    font-size: 20px;
  }
  &:hover {
    display: block;
  }
  @media screen and (max-width: 500px) {
    & > svg {
      font-size: 16px;
    }
  }
`;

export const DropDownContent = styled.div<{ pos?: number }>`
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
  @media screen and (max-width: 500px) {
    right: ${(props) => (props.pos ? `${-100 + 20 * props.pos}px` : "-75px")};
  }
`;
