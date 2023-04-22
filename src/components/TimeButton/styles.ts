import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-bottom: 4px;
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: 8px;
  background: ${({ disabled }) => disabled ? '#ffb6b6' : '#a2ffa2'};
`;