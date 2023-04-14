import { useState } from 'react';
import { FlatList, Modal } from 'react-native';
import { Text } from '../../global/Text';
import { Point } from '../../types/Point';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { TimeModal } from '../TimeModal';
import {
  Image,
  CloseButton,
  ModalBody,
  Header,
  SchedulesContainer,
  TimeButton,
  Footer,
  FooterContainer,
  PreviousContainer,
  NextContainer,
} from './styles';

interface PointModalProps {
  visible: boolean;
  onClose: () => void;
  point: null | Point;
}

export function PointModal({ visible, onClose, point }: PointModalProps) {
  if (!point) {
    return null;
  }

  const [selectedTime, setSelectedTime] = useState('');
  const [isTimeModalVisible, setTimeModalVisible] = useState(false);

  function handleOpenModal(time: string) {
    setTimeModalVisible(true);
    setSelectedTime(time);
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

  const nextBusTime = point.schedules.find(time => time >= currentTime);
  const nextBusTimeIndex = point.schedules.indexOf(nextBusTime!);
  const previousBusTime = point.schedules[nextBusTimeIndex - 1];

  const firstSchedule = point.schedules[0];
  const lastSchedule = point.schedules[point.schedules.length - 1];

  return (
    <>
      <TimeModal
        visible={isTimeModalVisible}
        onClose={() => setTimeModalVisible(false)}
        time={selectedTime}
      />

      <Modal
        visible={visible}
        animationType='slide'
        presentationStyle='pageSheet'
        onRequestClose={onClose}
      >
        <Image
          source={{
            uri: 'https://s2.glbimg.com/F7yvdswolNWTG-FHLQdJNiLMelI=/0x0:1600x1200/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/t/7/1Fm9BwQ4GgQL5g7ZGblg/shopping.jpg'
          }}
        >
          <CloseButton onPress={onClose}>
            <AntDesign name="closecircle" size={24} color="black" />
          </CloseButton>
        </Image>

        <ModalBody>
          <Header>
            <Text size={24} weight='600' >{point.name}</Text>
            <Text color='#666' style={{ marginTop: 8 }}>
              Lista de todos os seus horários
            </Text>
          </Header>

          {point.schedules.length > 0 && (
            <SchedulesContainer>
              <Text weight='600' color='#666'>Horários</Text>

              <FlatList
                data={point.schedules}
                keyExtractor={point => point}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 16 }}
                renderItem={({item: time}) => (
                  <TimeButton
                    onPress={() => handleOpenModal(time)}
                    style={{
                      backgroundColor: `${
                        time < nextBusTime!
                          ? '#ffb6b6'
                          : `${time === nextBusTime ? '#a2ffa2' : '#fafafa'}`
                      }`
                    }}>
                    <MaterialCommunityIcons name="clock" size={14} color="black" />
                    <Text size={14} color='#666' style={{ marginLeft: 20 }}>
                      {time}
                    </Text>
                  </TimeButton>
                )}
              />
            </SchedulesContainer>
          )}
        </ModalBody>

        <Footer>
          <FooterContainer>
            <PreviousContainer style={{
              backgroundColor: `${
                (currentTime <= firstSchedule) || (currentTime > lastSchedule)
                  ? '#fafafa'
                  : '#ffb6b6'
              }`
            }}>
              <Text color='#666'>Anterior partiu em:</Text>
              <Text size={20} weight='600'>
                {previousBusTime}
              </Text>
            </PreviousContainer>

            <NextContainer style={{
              backgroundColor: `${
                currentTime > lastSchedule
                  ? '#fafafa'
                  : '#a2ffa2'
              }`
            }}>
              <Text color='#666'>Próximo parte em:</Text>
              <Text size={20} weight='600'>
                {nextBusTime}
              </Text>
            </NextContainer>
          </FooterContainer>
        </Footer>
      </Modal>
    </>
  );
}