import styled from 'styled-components/native';

export const Overlay = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: stretch;
  padding: 0 24px;
  background: rgba(0, 0, 0, 0.6);
`;

export const ModalBody = styled.View`
  padding: 24px;
  border-radius: 8px;
  background: #fafafa;
`;

export const CloseButton = styled.TouchableOpacity``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.View`
  flex-direction: row;
  margin-top: 32px;
  /* background: #f00; */
`;

export const Input = styled.TextInput`
  flex: 1;
  margin-right: 24px;
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 8px;
  background: #fff;
`;
