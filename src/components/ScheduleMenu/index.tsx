import { Menu } from "./styles";
import { SaveChanges } from "../SaveChanges";
import { DeleteSubject } from "../DeleteSubject";
import { RegisterSubject } from "../RegisterSubject";
import { useState } from "react";

export const ScheduleMenu = () => {
  const [activeMenu, setActiveMenu] = useState<Function>();
  const cb = (setActive: Function) => {
    if (activeMenu) activeMenu(false);
    setActiveMenu(() => setActive);
  };
  return (
    <Menu>
      <div>
        <DeleteSubject cb={cb} />
        <RegisterSubject cb={cb} />
        <SaveChanges cb={cb} />
      </div>
    </Menu>
  );
};
