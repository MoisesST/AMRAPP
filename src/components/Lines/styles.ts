import styled  from 'styled-components/native';

import { Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Line = styled.TouchableOpacity`
  width: 350px;
  margin-left: 24px;
  background: ${props => props.theme.statusbar};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
`;
