import { useThemeContext } from '../../contexts/ThemeContext';
import { Text } from '../../global/Text';
import { LoginButton } from './styles';

interface ButtonProps {
  title: string;
}

function Button({ title, ...props }: ButtonProps) {

  const {theme} = useThemeContext();

  return (
    <LoginButton {...props}>
      <Text weight='700' color={theme.title}>{title}</Text>
    </LoginButton>
  );
}
export { Button };
