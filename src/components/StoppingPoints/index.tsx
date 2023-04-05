import { FlatList } from 'react-native';
import { Text } from '../../global/Text';
import { Container, IconContainer, PointNameContainer, TimeContainer } from './styles';
import { workingDays } from '../../mocks/workingDays';
import { MaterialIcons } from '@expo/vector-icons';

export function StoppingPoints() {

  return (
    <FlatList
      data={workingDays}
      style={{ marginTop: 32 }}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={point => point._id}
      renderItem={({ item: point }) => (
        <Container>
          <IconContainer>
            <MaterialIcons name="location-pin" size={18} color="black" />
          </IconContainer>
          <PointNameContainer>
            <Text size={14} weight='400'>
              {point.name}
            </Text>
          </PointNameContainer>
          <TimeContainer>
            <Text size={14} weight='700' color='#0f0'>
              {
                point.schedules?.filter((time) => time === '13:05')
              }
            </Text>
          </TimeContainer>
          <Text></Text>
        </Container>
      )}
    />
  );
}