import { useState } from 'react';
import { FlatList } from 'react-native';
import { Text } from '../../global/Text';
import { MaterialIcons } from '@expo/vector-icons';
import { PointModal } from '../PointModal';
import { points } from '../../mocks/points';
import { Point } from '../../types/Point';
import {
  PointContainer,
  IconContainer,
  PointNameContainer,
  TimeContainer,
  Separator,
} from './styles';

export function Points() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPoint, setSelectedPoint] = useState<null | Point>(null);

  function handleOpenModal(point: Point) {
    setIsModalVisible(true);
    setSelectedPoint(point);
  }

  const now = new Date();
  const options = { timeZone: 'America/Sao_Paulo' };
  const currentTime = now.toLocaleTimeString('pt-BR', options);

  // Test
  // const currentTime = '07:05';
  // const currentTime = '07:06';
  // const currentTime = '13:00';
  // const currentTime = '22:05';
  // const currentTime = '22:06';
  // const currentTime = '00:00';

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
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={point => point._id}
        ItemSeparatorComponent={Separator}
        renderItem={({ item: point }) => (
          <PointContainer onPress={() => handleOpenModal(point)}>
            <IconContainer>
              <MaterialIcons name="location-pin" size={18} color="black" />
            </IconContainer>
            <PointNameContainer>
              <Text size={14} weight='400'>{point.name}</Text>
            </PointNameContainer>
            <TimeContainer>
              <Text size={14} weight='700' color='#a2ffa2'>
                {point.schedules.find(time => time >= currentTime)}
              </Text>
            </TimeContainer>
            <Text></Text>
          </PointContainer>
        )}
      />
    </>
  );
}