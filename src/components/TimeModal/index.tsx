import { useState } from 'react';

import { Switch } from 'react-native';

import * as Notifications from 'expo-notifications';

import { TransparentModal } from '../TransparentModal';
import { Input } from '../Input';
import { useThemeContext } from '../../contexts/ThemeContext';

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

function TimeModal({ visible, onClose, time }: TimeModalProps) {
  const [minute, setMinute] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  function toggleSwitch() {
    alert('Você será notificado');
    handleSave();
    setMinute('');
    notification(Number(minute));
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

  function handleNotificationTime(timeInMinutes: number) {
    const timeInSeconds = timeInMinutes * 60;
    return timeInSeconds;
  }

  function handleSave() {
    onClose();
  }

  const {theme} = useThemeContext();

  return (
    <TransparentModal
      visible={visible}
      onClose={onClose}
      title='Lembrar'
    >
      <Input
        placeholder='Informe quantos minutos'
        onChangeText={setMinute}
        keyboardType='number-pad'
      />

      <Switch
        disabled={minute.length === 0}
        trackColor={{ false: '#ffb6b6', true: '#a2ffa2' }}
        // thumbColor={'#f4f3f4'}
        thumbColor={theme.secondary}
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={{ marginLeft: 24 }}
      />
    </TransparentModal>
  );
}
export { TimeModal };