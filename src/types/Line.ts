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

//padrão firebase
type Hour = {
  hour: string;// subcoleção de hours
}

type Point = {
  name: string;
  hours?: Hour[];
};

type Line = {
  id?: string; // reservado para o ID do Firestore
  name: string;
  lineNumber: string;
  points?: Point[]; // subcoleção de points
};

export default Line;

 // funcionado
//  type Line = {
//   id?: string; // reserved for firestore id
//   name: string;
//   lineNumber: string;
// //   schedules: string[];
// };
// export default Line;
