export interface Point {
  _id: string;
  line_id: string;
  name: string;
  schedules: string[];
}

// {
//   _id: '1',
//   line_id: '50',
//   name: 'SAÍDA FONTE',
//   schedules: ['07:05', '08:05', '09:05', '10:05', '11:05', '12:05', '13:05', '18:05', '19:05', '20:05', '21:05', '22:05'],
// },


//padão firebase
// type Point = {
//   id?: string; // reserved for firestore id
//   line_id: string;
//   name: string;
//   schedules: string[];
// };
// export default Point;
