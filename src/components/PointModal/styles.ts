import styled from 'styled-components/native';

export const Image = styled.ImageBackground`
  width: 100%;
  height: 200px;
  align-items: flex-end;
`;

export const CloseButton = styled.TouchableOpacity`
  margin: 24px;
`;

export const ModalBody = styled.View`
  flex: 1;
  padding: 32px 24px 0;
  /* background: #fafafa; */
  background: ${props => props.theme.secondary};
`;

export const Header = styled.View``;

export const SchedulesContainer = styled.View`
  flex: 1;
  margin-top: 32px;
`;

export const Footer = styled.View`
  min-height: 110px;
  /* background: #fff; */
  background: ${props => props.theme.primary};
  padding: 16px 24px;
`;

export const FooterContainer = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HighlightedTimeContainer = styled.View`
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: 8px;
`;