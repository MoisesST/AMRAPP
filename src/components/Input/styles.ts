import styled from 'styled-components/native';

export const TextInput = styled.TextInput`
  flex: 1;
  padding: 16px;
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 8px;
  color: ${props => props.theme.color};
  background: ${props => props.theme.secondary};
`;