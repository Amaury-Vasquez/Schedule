import { useContext } from "react";
import { FaRegTrashAlt } from "react-icons/fa";

import Context from "../../context";
import { Button, Item, List, Subject } from "./styles";

export const SubjectList = () => {
  const { deleteSubject, matchedSubjects } = useContext(Context);
  return (
    <List>
      {matchedSubjects
        ? matchedSubjects.map((sbj, i) => (
            <Item key={i + sbj.name + sbj.teacher + sbj.hours}>
              <Subject>
                <h4> {sbj.name} </h4>
                <h5> {sbj.teacher} </h5>
              </Subject>
              <Button
                onClick={() => {
                  if (deleteSubject) deleteSubject(sbj);
                }}
              >
                <FaRegTrashAlt />
              </Button>
            </Item>
          ))
        : null}
    </List>
  );
};
