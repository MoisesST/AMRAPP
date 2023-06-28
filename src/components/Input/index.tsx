import { TextInput } from './styles';
import { useThemeContext } from '../../contexts/ThemeContext';

interface InputProps {
  placeholder: string;
  onChangeText: any; // revisar
  // onChangeText: () => void;
  keyboardType?: 'number-pad' | 'email-address';
  style?: any;
}

function Input({ placeholder, keyboardType, onChangeText, style }: InputProps) {
  const {theme} = useThemeContext();

  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={theme.color}
      keyboardType={keyboardType ? keyboardType : 'default'}
      onChangeText={onChangeText}
      style={style ? style : ''}
    />
  );
}
export { Input };