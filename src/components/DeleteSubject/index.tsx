import { FaRegMinusSquare } from "react-icons/fa";

import { Delete } from "./styles";
import { SearchBar } from "../SearchBar";
import { SubjectList } from "../SubjectList";
import { DropDownMenu } from "../DropDownMenu";
import { useActiveMenu } from "../../hooks/useActiveMenu";

export const DeleteSubject = () => {
  const { cb } = useActiveMenu();
  const DeleteMenu = () => {
    return (
      <Delete>
        <SearchBar />
        <SubjectList />
      </Delete>
    );
  };
  return (
    <DropDownMenu
      // banish={true}
      callback={cb}
      Content={DeleteMenu}
      Cover={FaRegMinusSquare}
    />
  );
};
