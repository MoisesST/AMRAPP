//has-many Point
type Line = {
  id?: string; // reservado para o ID do Firestore
  name: string;
  lineNumber: string;
};

export default Line;