import styled from 'styled-components/native';

import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  background: ${props => props.theme.primary};
`;

// export const LinesContainerList = styled.View`
//   height: 10%;
//   margin-top: 34px;
// `;

export const LinesContainer = styled.View`
  height: 200px;
  margin-top: 34px;
`;

export const LineStyled = styled.View`
  height: 30%;
  margin-top: 34px;
`;

export const FormContainer = styled.View`
  height: 300px;
  margin: 0 24px 24px;
  border-radius: 8px;
`;

export const EditContainer = styled.View`
  flex: 1;
  margin: 0 24px 0 0;
`;

export const RecordContainer = styled.View`
  width: 60px;
`;

export const InLineContainer = styled.View`
  flex-direction: row;
  height: 65px;
  margin: 0 0 24px;
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

export const AdminButton = styled.TouchableOpacity``;

export const HomeButton = styled.TouchableOpacity``;

export const SubmitButton = styled.TouchableOpacity``;