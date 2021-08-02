import { useSchedule } from "../hooks/useSchedule";

export const useInitialState = () => {
  const { deleteSubject, matchedSubjects, setMatched, subjects, weekdays } =
    useSchedule();

  return { deleteSubject, matchedSubjects, setMatched, subjects, weekdays };
};
