import { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import useAuth from '../../src/hooks/useAuth';
import {
  Container,
  FormContainer,
  Footer,
  FooterContainer,
  HomeButton,
} from './styles';
import { Alert, StatusBar, useColorScheme } from 'react-native';
import { Input } from '../../src/components/Input';
import { Text } from '../../src/global/Text';
import themes from '../../src/themes';
import { Button } from '../../src/components/Button';

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('123456');

  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme!] || theme.dark;

  return (
    <>
      <StatusBar style='light' backgroundColor={theme.statusbar} />
      <Container>
        <Text
          size={32}
          weight={'600'}
          color={theme.title}
          style={{ marginTop: 62, textAlign: 'center'}}>
            Login
        </Text>
        <FormContainer>
          <Input
            placeholder='Digite um email'
            keyboardType='email-address'
            onChangeText={setEmail}
            style={{ marginBottom: 24 }}
          />

          <Input
            placeholder='Digite uma senha'
            onChangeText={setPassword}
            style={{ marginBottom: 24 }}
          />

          <Button
            title='Enviar'
            onPress={async () => {
              try {
                await login(email, password);
                router.push('/admin');
              } catch (error: any) {
                Alert.alert('Login error', error.toString());
              }
            }}
          />
        </FormContainer>

      </Container>

      <Footer>
        <FooterContainer>
          <HomeButton
            onPress={() => router.push('/')}>
            <FontAwesome5 name="home" size={40} color={theme.title} />
          </HomeButton>
        </FooterContainer>
      </Footer>
    </>
  );
}
export { Login };