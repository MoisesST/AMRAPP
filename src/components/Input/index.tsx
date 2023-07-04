import { TextInput } from './styles';
import { useThemeContext } from '../../contexts/ThemeContext';

interface InputProps {
  placeholder: string;
  onChangeText?: any; // revisar
  // onChangeText: () => void;
  keyboardType?: 'number-pad' | 'email-address';
  style?: any;
  value?: string;
  editable?: boolean;
}

function Input(
  {
    placeholder,
    keyboardType,
    onChangeText,
    style,
    value,
    editable
  }: InputProps
) {
  const {theme} = useThemeContext();

  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={theme.color}
      keyboardType={keyboardType ? keyboardType : 'default'}
      onChangeText={onChangeText}
      style={style ? style : ''}
      value={value}
      editable={editable}
    />
  );
}
export { Input };