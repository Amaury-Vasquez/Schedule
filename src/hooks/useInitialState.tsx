import { useSchedule } from "../hooks/useSchedule";

export const useInitialState = () => {
  const { subjects, weekdays } = useSchedule();

  return { subjects, weekdays };
};
