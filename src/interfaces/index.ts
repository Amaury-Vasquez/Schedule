export interface SubjectValues {
  name: string;
  hours: Array<string>;
  teacher: string;
}

export interface ContextValues {
  setSubjects?: Function;
  subjects?: Array<SubjectValues>;
  weekdays?: Array<string>;
}
