import { useState } from 'react';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Header } from '../../src/components/Header';
import { useRouter } from "expo-router";
import useAuth from "../../src/hooks/useAuth";
import StyledButton from '../../src/components/StyledButton';
import {
  Container,
  FormContainer,
  Footer,
  FooterContainer,
  HomeButton,
} from './styles';
import { TextInput } from '../../src/components/Input/styles';
import { Alert, ScrollView, StyleSheet } from "react-native";



export default function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("123456");

  return (
    <>
      <Container>
        <Header />

        <FormContainer>
          <ScrollView style={styles.scroll}>
            <TextInput
              style={styles.input}
              onChangeText={setEmail}
              value={email}
              placeholder='email'
            />
            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              value={password}
              placeholder="senha"
            />
          </ScrollView>

          <StyledButton
            title="Login"
            onPress={async () => {
              try {
                await login(email, password);
                router.push("/admin");
              } catch (error: any) {
                Alert.alert("Login error", error.toString());
              }
            }}
          />

        </FormContainer>

      </Container>

      <Footer>
        <FooterContainer>
          <HomeButton
            onPress={() => router.push("/")}>
            <FontAwesome5 name="home" size={40} color="black" />
          </HomeButton>
        </FooterContainer>
      </Footer>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#6666',
    maxHeight: 50,
    width: '100%',
    borderWidth: 1,
    margin: 5,
  },
  scroll: {
    width: '100%',
  },
});


export { Login };