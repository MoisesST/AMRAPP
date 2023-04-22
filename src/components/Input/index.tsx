import { TextInput } from './styles';

interface InputProps {
  placeholder: string;
  onChangeText: any; // revisar
  // onChangeText: () => void;
  keyboardType?: 'number-pad' | 'email-address';
}

function Input({ placeholder, keyboardType, onChangeText }: InputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor='#666'
      keyboardType={keyboardType ? keyboardType : 'default'}
      onChangeText={onChangeText}
    />
  );
}
export { Input };