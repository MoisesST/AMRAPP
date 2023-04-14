import styled from 'styled-components/native';

export const PointContainer = styled.TouchableOpacity`
  flex-direction: row;
`;

export const IconContainer = styled.View`
  height: 40px;
  margin-right: 24px;
  justify-content: center;
`;

export const PointNameContainer = styled.View`
  height: 40px;
  justify-content: center;
`;

export const TimeContainer = styled.View`
  height: 40px;
  width: 50%;
  flex: 1;
  justify-content: center;
  align-items: flex-end;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  margin: 16px 0;
  background: rgba(204, 204, 204, 0.3);
`;