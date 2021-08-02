import { ElementType, useEffect, useState } from "react";

import { DropDown, DropDownContent } from "./styles";

export const DropDownMenu = (props: {
  // banish: boolean;
  callback: Function;
  Content?: ElementType;
  Cover: ElementType;
}) => {
  const [active, setActive] = useState<boolean>(false);
  const { Content, Cover, callback } = props;

  return (
    <DropDown active={active}>
      <Cover
        onClick={() => {
          callback(setActive, active);
          setActive(!active);
        }}
      />
      <DropDownContent>{Content ? <Content /> : ""}</DropDownContent>
    </DropDown>
  );
};
