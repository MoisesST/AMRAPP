import { TextInput } from './styles';
import { useThemeContext } from '../../contexts/ThemeContext';

interface InputProps {
  placeholder: string;
  onChangeText: any; // revisar
  // onChangeText: () => void;
  keyboardType?: 'number-pad' | 'email-address';
}

function Input({ placeholder, keyboardType, onChangeText }: InputProps) {
  const {theme} = useThemeContext();

  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={theme.color}
      keyboardType={keyboardType ? keyboardType : 'default'}
      onChangeText={onChangeText}
    />
  );
}
export { Input };