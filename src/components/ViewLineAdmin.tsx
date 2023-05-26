import { useState } from 'react';
import { View, Alert, StyleSheet } from "react-native";
import { Text } from '../global/Text';
import StyledButton from "./StyledButton";
//import { LineStyled } from './styles';
import useCollection from "../hooks/useCollection";
import Line from "../types/Line";
import { useRouter } from "expo-router";


interface ViewLineAdminProps {
  line: Line;
  onDelete: Function;
}

function ViewLineAdmin({ line, onDelete }: ViewLineAdminProps) {
  const router = useRouter();

  // const { data } = useCollection<Line>("lines");
  // const [selectedLine, setSelectedLine] = useState('');

  // function handleSelectLine(lineId: string) {
  //   const line = selectedLine === lineId ? '' : lineId;
  //   setSelectedLine(line);
  // }

  return (
    <View style={styles.lines}>
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

      <View style={{ flexDirection: "row" }}>
        <StyledButton
          title="Detalhes"
          onPress={() => {
            if (line.id) {
              console.log(">>>>>>>>>", line)
              router.push("/admin/" + line.id);
            } else {
              Alert.alert(
                "View error",
                "cannot access Lines details because it does not have an id!"
              );
            }
          }}
          style={{ width: "50%" }}
        />

        <StyledButton
          title="Deletar"
          onPress={() => {
            if (line.id) {
              Alert.alert("Deletar linha", "tem certeza?", [
                {
                  text: "Sim",
                  onPress: async () => {
                    onDelete();
                  },
                },
                {
                  text: "No",
                  style: "cancel",
                },
              ]);
            } else {
              Alert.alert(
                "delete error",
                "cannot delete book because it does not have an id!"
              );
            }
          }}
          style={{ width: "50%", backgroundColor: "darkred" }}
        />
      </View>
    </View>




  );
}


import styled from 'styled-components/native';

import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

const LineStyled = styled.TouchableOpacity`
  width: 350px;
  margin-left: 24px;
  padding: 5px;
  background: #000;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
`;

const styles = StyleSheet.create({
  lines: {
    paddingBottom: 10,
    margin: 5,
    alignItems: 'center',
  },
});




export { ViewLineAdmin };





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