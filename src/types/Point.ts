//belong_to Line
type Point = {
  id?: string; // reservado para o ID do Firestore
  lineId: string;
  name: string;
  schedules: string[];
};

export default Point;