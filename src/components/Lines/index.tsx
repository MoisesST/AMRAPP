import { useState } from 'react';
import { FlatList } from 'react-native';
import { Text } from '../../global/Text';
import { LineStyled } from './styles';
import useCollection from "../../hooks/useCollection";
import Line from "../../types/Line";

function Lines() {
  const { data } = useCollection<Line>("lines");
  const [selectedLine, setSelectedLine] = useState('');

  function handleSelectLine(lineId: string) {
    const line = selectedLine === lineId ? '' : lineId;
    setSelectedLine(line);
  }

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      contentContainerStyle={{ paddingRight: 24}}
      keyExtractor={line => line.id!}
      renderItem={({ item: line }) => {
        const isSelected = selectedLine === line.id!;

        return (
          <LineStyled onPress={() => handleSelectLine(line.id!)}>
            <Text
              color='orange'
              size={14}
              weight='600'
              opacity={isSelected ? 1 : 0.5}
            >
              {line.lineNumber} {line.name}
            </Text>
          </LineStyled>
        );
      }}
    />
  );
}
export { Lines };



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