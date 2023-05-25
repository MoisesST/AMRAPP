import { useState } from 'react';
import { FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { PointModal } from '../PointModal';
import { points } from '../../mocks/points';
import { Point } from '../../types/Point';
import { Text } from '../../global/Text';
import { Container, Separator } from './styles';
import { useThemeContext } from '../../contexts/ThemeContext';

//import useCollection from "../../hooks/useCollection";
//import Line from "../../types/Line";

function Points() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState<null | Point>(null);

  function handleOpenModal(point: Point) {
    setIsModalVisible(true);
    setSelectedPoint(point);
  }

  const now = new Date();
  const options = { timeZone: 'America/Sao_Paulo' };
  const currentTime = now.toLocaleTimeString('pt-BR', options);

  const {theme} = useThemeContext();

  return (
    <>
      <PointModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        point={selectedPoint}
      />

      <FlatList
        data={points}
        style={{ marginTop: 32 }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={point => point._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: point }) => (
          <Container onPress={() => handleOpenModal(point)}>
            <MaterialIcons name="location-pin" size={18} color={theme.color} />

            <Text
              size={14}
              weight='400'
              style={{ marginLeft: 24}}
              color={theme.color}
            >
              {point.name}
            </Text>

            <Text
              size={14}
              weight='700'
              style={{
                flex: 1,
                position: 'absolute',
                bottom: 10, right: 0,
                alignItems: 'center'
              }}
              color={theme.color}
            >
              {point.schedules.find(time => time >= currentTime)}
            </Text>
          </Container>
        )}
      />
    </>
  );
}
export { Points };


// import { useState } from 'react';
// import { FlatList } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import { PointModal } from '../PointModal';
// import { points } from '../../mocks/points';
// import { Point } from '../../types/Point';
// import { Text } from '../../global/Text';
// import { Container, Separator } from './styles';

// function Points() {
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [selectedPoint, setSelectedPoint] = useState<null | Point>(null);

//   function handleOpenModal(point: Point) {
//     setIsModalVisible(true);
//     setSelectedPoint(point);
//   }

//   const now = new Date();
//   const options = { timeZone: 'America/Sao_Paulo' };
//   const currentTime = now.toLocaleTimeString('pt-BR', options);

//   return (
//     <>
//       <PointModal
//         visible={isModalVisible}
//         onClose={() => setIsModalVisible(false)}
//         point={selectedPoint}
//       />

//       <FlatList
//         data={points}
//         style={{ marginTop: 32 }}
//         showsVerticalScrollIndicator={false}
//         contentContainerStyle={{ paddingHorizontal: 24 }}
//         keyExtractor={point => point._id}
//         ItemSeparatorComponent={Separator}
//         renderItem={({ item: point }) => (
//           <Container onPress={() => handleOpenModal(point)}>
//             <MaterialIcons name="location-pin" size={18} color="black" />

//             <Text
//               size={14}
//               weight='400'
//               style={{ marginLeft: 24}}
//             >
//               {point.name}
//             </Text>

//             <Text
//               size={14}
//               weight='700'
//               style={{ flex: 1, position: 'absolute', bottom: 0, right: 0 }}
//             >
//               {point.schedules.find(time => time >= currentTime)}
//             </Text>
//           </Container>
//         )}
//       />
//     </>
//   );
// }
// export { Points };