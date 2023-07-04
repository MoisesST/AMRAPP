import React, { ReactNode } from 'react';
import { useThemeContext } from '../../contexts/ThemeContext';
import { Text } from '../../global/Text';
import { Button } from './styles';

interface StyledButtonProps {
  title?: string;
  children?: ReactNode;
}

function StyledButtonT({ title, children, ...props }: StyledButtonProps) {

  const {theme} = useThemeContext();

  return (
    <Button {...props}>
      <Text color={theme.title}>{title}</Text>
      { children }
    </Button>
  );
}
export { StyledButtonT };
