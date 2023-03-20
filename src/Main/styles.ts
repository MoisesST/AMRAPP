import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
`;

export const Footer = styled.View``;

export const FooterContainer = styled.SafeAreaView``;