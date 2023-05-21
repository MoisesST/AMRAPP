// export interface Line {
//   _id: string;
//   name: string;
//   lineNumber: string;
//   extension: {
//     line_id: string;
//     name: string;
//     schedules: string[];
//   };
//   points: {
//     workingDays: {
//       _id: string;
//       name: string;
//       schedules: string[];
//     }[];
//     saturdays: {
//       _id: string;
//       name: string;
//       schedules: string[];
//     }[];
//   };
// }

//padrã ofirebase
 type Line = {
   id?: string; // reserved for firestore id
   name: string;
   lineNumber: string;
   schedules: string[];
 };
 export default Line;
