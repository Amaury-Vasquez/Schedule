import { useContext, useState } from "react";

import { Delete } from "../Delete";
import Context from "../../context";
import { Item, List, Subject } from "./styles";

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
              <Delete
                onConfirm={() => {
                  if (deleteSubject) deleteSubject(sbj);
                }}
              />
            </Item>
          ))
        : null}
    </List>
  );
};
