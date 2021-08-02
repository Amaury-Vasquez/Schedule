import { useState } from "react";
import { Menu } from "./styles";
import { SaveChanges } from "../SaveChanges";
import { DeleteSubject } from "../DeleteSubject";
import { RegisterSubject } from "../RegisterSubject";
import { useActiveMenu } from "../../hooks/useActiveMenu";

export const ScheduleMenu = () => {
  const { cb } = useActiveMenu();
  return (
    <Menu>
      <div>
        <DeleteSubject />
        <RegisterSubject cb={cb} />
        <SaveChanges cb={cb} />
      </div>
    </Menu>
  );
};
