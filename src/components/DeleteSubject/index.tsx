import { FaRegMinusSquare, FaRegTrashAlt } from "react-icons/fa";

import { Delete } from "./styles";
import { SearchBar } from "../SearchBar";
import { SubjectList } from "../SubjectList";
import { DropDownMenu } from "../DropDownMenu";

export const DeleteSubject = (props: { cb: Function }) => {
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
      callback={props.cb}
      content={DeleteMenu}
      cover={FaRegMinusSquare}
    />
  );
};
