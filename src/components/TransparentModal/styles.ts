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
  /* background: #fafafa; */
  background: ${props => props.theme.primary};
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
`;
