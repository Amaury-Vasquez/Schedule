import React, { useMemo, useState } from "react";

import { SubjectValues } from "../interfaces";

export const useSearch = (subjects: SubjectValues[] | undefined) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const filterSearch = useMemo(() => {
    return subjects
      ? subjects.filter((sbj) => {
          const str = value.toLowerCase();
          return (
            sbj.name.toLowerCase().includes(str) ||
            sbj.teacher.toLowerCase().includes(str)
          );
        })
      : [];
  }, [subjects, value]);

  return {
    filterSearch,
    handleChange,
    setValue,
    value,
  };
};
