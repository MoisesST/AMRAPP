import { ReactNode } from 'react';
import { useThemeContext } from '../../contexts/ThemeContext';
import { Text } from '../../global/Text';
import { LoginButton } from './styles';

interface ButtonProps {
  title?: string;
  children?: ReactNode;
}

function Button({ title, children, ...props }: ButtonProps) {

  const {theme} = useThemeContext();

  return (
    <LoginButton {...props}>
      <Text weight='700' color={theme.title}>{title}</Text>
      {children}
    </LoginButton>
  );
}
export { Button };
