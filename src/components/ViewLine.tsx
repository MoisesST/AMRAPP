import { useState } from 'react';
import { FlatList } from 'react-native';
import { Text } from '../global/Text';
//import { LineStyled } from './styles';
import useCollection from "../hooks/useCollection";
import Line from "../types/Line";
import { useRouter } from "expo-router";


interface ViewLineProps {
  line: Line;
  onDelete?: Function;
}

function ViewLine({ line, onDelete }: ViewLineProps) {
  const router = useRouter();

  // const { data } = useCollection<Line>("lines");
  // const [selectedLine, setSelectedLine] = useState('');

  // function handleSelectLine(lineId: string) {
  //   const line = selectedLine === lineId ? '' : lineId;
  //   setSelectedLine(line);
  // }

  return (
    <LineStyled >
            <Text
              color='orange'
              size={14}
              weight='600'
              //opacity={isSelected ? 1 : 0.5}
            >
              {line.lineNumber} {line.name}
            </Text>
          </LineStyled>


    // <FlatList
    //   horizontal
    //   showsHorizontalScrollIndicator={false}
    //   data={data}
    //   contentContainerStyle={{ paddingRight: 24}}
    //   keyExtractor={line => line.id!}
    //   renderItem={({ item: line }) => {
    //     const isSelected = selectedLine === line.id!;

    //     return (
    //       <LineStyled onPress={() => handleSelectLine(line.id!)}>
    //         <Text
    //           color='orange'
    //           size={14}
    //           weight='600'
    //           opacity={isSelected ? 1 : 0.5}
    //         >
    //           {line.lineNumber} {line.name}
    //         </Text>
    //       </LineStyled>
    //     );
    //   }}
    // />
  );
}


import styled  from 'styled-components/native';

import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

const LineStyled = styled.TouchableOpacity`
  width: 350px;
  margin-left: 24px;
  background: #000;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
`;

export {ViewLine};











//export { Lines };



// import { useState } from 'react';

// import { FlatList } from 'react-native';

// import { lines } from '../../mocks/line';
// import { Text } from '../../global/Text';
// import { Line } from './styles';

// function Lines() {
//   const [selectedLine, setSelectedLine] = useState('');

//   function handleSelectLine(lineId: string) {
//     const line = selectedLine === lineId ? '' : lineId;
//     setSelectedLine(line);
//   }

//   return (
//     <FlatList
//       horizontal
//       showsHorizontalScrollIndicator={false}
//       data={lines}
//       contentContainerStyle={{ paddingRight: 24}}
//       keyExtractor={line => line._id}
//       renderItem={({ item: line }) => {
//         const isSelected = selectedLine === line._id;

//         return (
//           <Line onPress={() => handleSelectLine(line._id)}>
//             <Text
//               color='orange'
//               size={14}
//               weight='600'
//               opacity={isSelected ? 1 : 0.5}
//             >
//               {line.lineNumber} {line.name}
//             </Text>
//           </Line>
//         );
//       }}
//     />
//   );
// }
// export { Lines };