import { Modal, Platform } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { ReactNode } from 'react';

import { Text } from '../../global/Text';
import { Overlay, ModalBody, CloseButton, Header, Form } from './styles';
import { useThemeContext } from '../../contexts/ThemeContext';


interface TransparentModalProps {
  visible: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

function TransparentModal
(
  { visible, onClose, title, children }: TransparentModalProps
)
{
  const {theme} = useThemeContext();

  return (
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
            <Text weight='600' color={theme.color}>{title}</Text>
            <CloseButton onPress={onClose}>
              <Ionicons name="close" size={20} color={theme.color} />
            </CloseButton>
          </Header>

          <Form>
            {children}
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
export { TransparentModal };