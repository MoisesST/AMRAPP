import { useState } from 'react';

import { FlatList, Modal } from 'react-native';

import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import { Point } from '../../types/Point';
import { TimeModal } from '../TimeModal';
import { Text } from '../../global/Text';
import { TimeButton } from '../TimeButton';
import {
  Image,
  CloseButton,
  ModalBody,
  Header,
  SchedulesContainer,
  Footer,
  FooterContainer,
  HighlightedTimeContainer,
} from './styles';

interface PointModalProps {
  visible: boolean;
  onClose: () => void;
  point: null | Point;
}

function PointModal({ visible, onClose, point }: PointModalProps) {
  if (!point) {
    return null;
  }

  const [selectedTime, setSelectedTime] = useState('');
  const [isTimeModalVisible, setTimeModalVisible] = useState(false);

  const now = new Date();
  const options = { timeZone: 'America/Sao_Paulo' };
  const currentTime = now.toLocaleTimeString('pt-BR', options);

  function handleOpenModal(time: string) {
    if (time > currentTime) {
      setTimeModalVisible(true);
      setSelectedTime(time);
    }
  }

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
                    disabled={time < nextBusTime!}
                  >
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
            <HighlightedTimeContainer style={{
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
            </HighlightedTimeContainer>

            <HighlightedTimeContainer style={{
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
            </HighlightedTimeContainer>
          </FooterContainer>
        </Footer>
      </Modal>
    </>
  );
}
export { PointModal };