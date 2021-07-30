import { useState } from "react";

import { SubjectValues } from "../interfaces";

export const useSchedule = () => {
  const [subjects, setSubjects] = useState<SubjectValues[]>([
    {
      name: "Algebra Lineal",
      hours: ["", "15:00 - 16:30", "15:00 - 16:30", "", "15:00 - 16:30"],
      teacher: "",
    },

    {
      name: "Calculo Aplicado",
      hours: ["08:30-10:00", "", "08:30-10:00", "08:30-10:00", ""],
      teacher: "",
    },
    {
      name: "Mecanica y Electromagnetismo",
      hours: ["10:30-12:00", "10:30-12:00", "", "10:30-12:00", "10:30-12:00"],
      teacher: "",
    },
    {
      name: "Ingenieria, Etica y Sociedad",
      hours: ["12:00-13:30", "", "12:00-13:30", "12:00-13:30", ""],
      teacher: "",
    },
    {
      name: "Fundamentos Economicos",
      hours: ["13:30-15:00", "13:30-15:00", "", "13:30-15:00", ""],
      teacher: "",
    },
    {
      name: "Algoritmos y Estructuras de datos",
      hours: ["", "15:00-16:30", "15:00-16:30", "", "15:00-16:30"],
      teacher: "",
    },
    {
      name: "Bases de Datos",
      hours: ["", "15:00-16:30", "15:00-16:30", "15:00-16:30", ""],
      teacher: "Botello Castillo Alejandro",
    },
  ]);
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return { setSubjects, subjects, weekdays };
};
