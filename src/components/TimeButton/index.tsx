import { ReactNode } from 'react';

import { Container } from './styles';

interface TimeButtonProps {
  onPress: () => void;
  disabled?: boolean;
  children: ReactNode;
}

function TimeButton({ children, onPress, disabled }: TimeButtonProps) {
  return (
    <Container
      onPress={onPress}
      disabled={disabled}
    >
      {children}
    </Container>
  );
}
export { TimeButton };