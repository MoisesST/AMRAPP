export interface Lines {
  _id: string;
  name: string;
  lineNumber: string;
  extension: {
    line_id: string;
    name: string;
    schedules: string[];
  };
  points: {
    workingDays: {
      _id: string;
      name: string;
      schedules: string[];
    }[];
    saturdays: {
      _id: string;
      name: string;
      schedules: string[];
    }[];
  };
}