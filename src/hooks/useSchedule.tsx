import { useEffect, useState } from "react";

import { SubjectValues } from "../interfaces";

export const useSchedule = () => {
  const [matchedSubjects, setMatched] = useState<SubjectValues[]>();
  const [subjects, setSubjects] = useState<SubjectValues[]>([
    {
      name: "Algebra Lineal",
      hours: ["", "10:30-12:00", "10:30-12:00", "", "10:30-12:00"],
      teacher: "Cañedo Suarez Leticia",
    },
    {
      name: "Calculo Aplicado",
      hours: ["08:30-10:00", "", "08:30-10:00", "08:30-10:00", ""],
      teacher: "Viveros Vela Karina",
    },
    {
      name: "Mecanica y Electromagnetismo",
      hours: ["13:30-15:00", "12:00-13:30", "13:30-15:00", "", "12:00-13:30"],
      teacher: "Cesar Hernandez Vasquez",
    },
    {
      name: "Ingenieria, Etica y Sociedad",
      hours: ["20:00-21:30", "", "20:00-21:30", "20:00-21:30", ""],
      teacher: "Hernandez Garcia Rosa Alba",
    },
    {
      name: "Fundamentos Economicos",
      hours: ["12:00-13:30", "", "12:00-13:30", "12:00-13:30", ""],
      teacher: "Castillo Marrufo Juan Antonio",
    },
    {
      name: "Algoritmos y Estructuras de datos",
      hours: ["", "7:00-8:30", "7:00-8:30", "", "7:00-8:30"],
      teacher: "Suarez Castañon Miguel Santiago",
    },
    {
      name: "Bases de Datos",
      hours: ["", "15:00-16:30", "15:00-16:30", "", "15:00-16:30"],
      teacher: "Botello Castillo Alejandro",
    },
  ]);
  const weekdays = ["M", "T", "W", "T", "F"];

  const deleteSubject = (subject: SubjectValues) => {
    const pos = subjects.findIndex((sbj) => sbj.name === subject.name);
    if (pos !== undefined) {
      const tmp = subjects.filter((sbj) => sbj.name !== subject.name);
      setSubjects(() => tmp);
    }
  };
  useEffect(() => {
    setMatched(() => subjects);
  }, [subjects]);
  return {
    deleteSubject,
    matchedSubjects,
    setMatched,
    setSubjects,
    subjects,
    weekdays,
  };
};
