import styled from 'styled-components/native';

import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  background: ${props => props.theme.primary};
`;

export const FormContainer = styled.View`
  height: 300px;
  margin: 0 24px 24px;
  border-radius: 8px;
`;

export const Footer = styled.View`
  height: 70px;
  background: ${props => props.theme.secondary};
`;

export const FooterContainer = styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const HomeButton = styled.TouchableOpacity``;