import { FaRegMinusSquare, FaRegTrashAlt } from "react-icons/fa";

import { Delete, Item, Subject, SubjectList } from "./styles";
import { SearchBar } from "../SearchBar";
import { DropDownMenu } from "../DropDownMenu";
import Context from "../../context";
import { useContext } from "react";

export const DeleteSubject = (props: { cb: Function }) => {
  const { subjects } = useContext(Context);
  const DeleteMenu = () => {
    return (
      <Delete>
        <SearchBar callback={props.cb} />
        <SubjectList>
          {subjects?.map((sbj, i) => (
            <Item>
              <Subject key={i + sbj.name + sbj.teacher + sbj.hours}>
                <h4> {sbj.name} </h4>
                <h5> {sbj.teacher} </h5>
              </Subject>
              <FaRegTrashAlt />
            </Item>
          ))}
        </SubjectList>
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
