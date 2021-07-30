import { Fragment } from "react";
import { ScheduleMenu } from "../ScheduleMenu";
import { useSchedule } from "../../hooks/useSchedule";
import {
  Container,
  Day,
  Hour,
  ScheduleDiv,
  ScheduleView,
  Subject,
} from "./styles";

export const Schedule = () => {
  const { subjects, weekdays } = useSchedule();
  const columns = weekdays.length + 1;
  const rows = subjects.length + 1;

  const dayHeaders = () => {
    return weekdays.map((day, i) => (
      <Day column={i} key={day + i}>
        <h4> {day} </h4>
      </Day>
    ));
  };

  const fillSchedule = () => {
    return subjects.map((subject, i) => {
      return (
        <Fragment key={subject.name + subject.teacher + i} >
          <Subject key={subject.name + i} row={i}>
            <h4> {subject.name} </h4>
          </Subject>
          {subject.hours.map((hour, j) => (
            <Hour column={j} fillBox={hour !== ""} key={hour + j} row={i}>
              <p> {hour} </p>
            </Hour>
          ))}
        </Fragment>
      );
    });
  };

  return (
    <Container>
      <ScheduleDiv>
        <ScheduleMenu />
        <ScheduleView columns={columns} rows={rows}>
          {dayHeaders()}
          {fillSchedule()}
        </ScheduleView>
      </ScheduleDiv>
    </Container>
  );
};
