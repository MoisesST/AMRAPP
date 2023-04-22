import { Modal, Platform } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { ReactNode } from 'react';

import { Text } from '../../global/Text';
import { Overlay, ModalBody, CloseButton, Header, Form } from './styles';

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
            <Text weight='600'>{title}</Text>
            <CloseButton onPress={onClose}>
              <Ionicons name="close" size={20} color="#666" />
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