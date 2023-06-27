import styled from 'styled-components/native';

import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
  /* background: #fafafa; */
  background: ${props => props.theme.primary};
`;


export const LinesContainerList = styled.View`
  height: 10%;
  margin-top: 34px;
`;

export const LinesContainer = styled.View`
  height: 30%;
  margin-top: 34px;
`;

export const FormContainer = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
  paddingHorizontal: 18px;
  height: 50%;
`;

export const Footer = styled.View`
  height: 70px;
  /* background: #fff; */
  background: ${props => props.theme.secondary};
`;

export const FooterContainer = styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

// export const MapButton = styled.TouchableOpacity``;

// export const SearchButton = styled.TouchableOpacity``;

export const AdminButton = styled.TouchableOpacity``;

export const HomeButton = styled.TouchableOpacity``;

export const SubmitButton = styled.TouchableOpacity``;