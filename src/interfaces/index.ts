export interface SubjectValues {
  name: string;
  hours: Array<string>;
  teacher: string;
}

export interface ContextValues {
  deleteSubject?: Function;
  matchedSubjects?: Array<SubjectValues>;
  setMatched?: Function;
  setSubjects?: Function;
  subjects?: Array<SubjectValues>;
  weekdays?: Array<string>;
}
