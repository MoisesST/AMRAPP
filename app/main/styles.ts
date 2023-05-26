import styled from 'styled-components/native';

import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
  background: #fafafa;
`;

export const LinesContainer = styled.View`
  height: 40px;
  margin-top: 34px;
`;

export const PointsContainer = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  height: 70px;
  background: #fff;
`;

export const FooterContainer = styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const MapButton = styled.TouchableOpacity``;

export const SearchButton = styled.TouchableOpacity``;

export const AdminButton = styled.TouchableOpacity``;

export const LineStyled = styled.TouchableOpacity`
  width: 350px;
  margin-left: 24px;
  background: #000;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
`;
