import { useState } from 'react';
import { Modal, Platform, Switch } from 'react-native';
import { Text } from '../../global/Text';
import * as Notifications from 'expo-notifications';
import { Ionicons } from '@expo/vector-icons';
import { Overlay, ModalBody, CloseButton, Header, Form, Input } from './styles';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: true,
    shouldShowAlert: true,
  }),
});

interface TimeModalProps {
  visible: boolean;
  onClose: () => void;
  time: string;
}

export function TimeModal({ visible, onClose, time }: TimeModalProps) {
  const [minute, setMinute] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  function toggleSwitch() {
    if (isEnabled) {
      alert('Notificação ativa:' + time);
      handleSave();
      setMinute('');
      notification(Number(minute));
    } else {
      alert('Notificação desativa' + time);
      handleSave();
      setMinute('');
      notification(Number(minute));
    }
    return setIsEnabled(false);
  }

  async function notification(timeInMinutes: number) {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Hello Wold!',
        body: 'Teste local',
      },
      trigger: {
        seconds: handleNotificationTime(timeInMinutes),
      }
    });
  }

  const now = new Date();
  const options = { timeZone: 'America/Sao_Paulo' };
  const currentTime = now.toLocaleTimeString('pt-BR', options);

  function handleNotificationTime(timeInMinutes: number) {
    const timeInSeconds = timeInMinutes * 60;
    return timeInSeconds;
  }

  function handleSave() {
    onClose();
  }

  console.log(Number(minute));

  return (
    <>
      <Modal
        visible={visible}
        transparent
        animationType='fade'
        onRequestClose={onClose}
      >
        <Overlay
          behavior={Platform.OS === 'android' ? 'height' : 'padding'}
        >
          <ModalBody>
            <Header>
              <Text weight='600'>Lembrar</Text>
              <CloseButton onPress={onClose}>
                <Ionicons name="close" size={20} color="#666" />
              </CloseButton>
            </Header>

            <Form>
              <Input
                placeholder='Informe quantos minutos'
                placeholderTextColor='#666'
                keyboardType='number-pad'
                onChangeText={setMinute}
              />

              <Switch
                disabled={minute.length === 0}
                trackColor={{ false: '#ffb6b6', true: '#a2ffa2' }}
                thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </Form>
          </ModalBody>
        </Overlay>
      </Modal>
    </>
  );
}