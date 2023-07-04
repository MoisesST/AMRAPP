import { useEffect, useState } from 'react';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import useDocument from '../../../src/hooks/useDocument';
import Line from '../../../src/types/Line';
import { Alert, StatusBar, StyleSheet } from 'react-native';
import {
  Container,
  FormContainer,
  Footer,
  FooterContainer,
  HomeButton,
} from './styles';
import { useRouter, useSearchParams } from 'expo-router';
import { useThemeContext } from '../../../src/contexts/ThemeContext';
import { Button } from '../../../src/components/Button';
import { Input } from '../../../src/components/Input';
import { Text } from '../../../src/global/Text';

export default function LineDetails() {

  const { id } = useSearchParams();
  const router = useRouter();

  const [lineNamee, setLineName] = useState('');
  const [lineNumbere, setLineNumber] = useState('');

  const {
    data: line,
    loading,
    upsert,
  } = useDocument<Line>('lines', id as string);

  useEffect(() => {
    if (line) {
      setLineName(line.name);
      setLineNumber(line.lineNumber);
    }
  }, [line]);

  const {theme} = useThemeContext();

  if (loading || !line) return <Text>Garregando...</Text>;

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={theme.statusbar} />
      <Container>
        <Text
          size={32}
          weight={'600'}
          color={theme.title}
          style={{ marginBottom: 24, textAlign: 'center'}}
        >
          Editar linha
        </Text>
        <FormContainer>

          <Text
            weight={'600'}
            color={theme.title}
            style={{ marginBottom: 10 }}
          >
            {lineNamee}
          </Text>

          <Input
            onChangeText={setLineName}
            placeholder="Digite o novo nome linha"
            keyboardType="number-pad"
          />

          <Text
            weight={'600'}
            color={theme.title}
            style={{ marginBottom: 10, marginTop: 24 }}
          >
            {lineNumbere}
          </Text>

          <Input
            onChangeText={setLineNumber}
            placeholder="Digite o novo numero linha"
            keyboardType="number-pad"
            style={{ marginBottom: 24 }}
          />

          <Button
            title="Editar"
            onPress={async () => {
              try {
                await upsert({
                  ...line, // repeating the existing line object
                  name: lineNamee, // updating
                  lineNumber: lineNumbere, // updating
                });
                Alert.alert('Editado com sucesso');
                router.push('/admin');
              } catch (error: any) {
                Alert.alert('Update Line error', error.toString());
              }
            }}

          />
        </FormContainer>
      </Container>

      <Footer>
        <FooterContainer>
          <HomeButton
            onPress={() => router.push('/')}>
            <FontAwesome5 name="home" size={40} color={theme.color} />
          </HomeButton>
          <HomeButton
            onPress={() => router.push('/admin')}>
            <FontAwesome5 name="route" size={24} color={theme.color} />
          </HomeButton>
          <HomeButton
            onPress={() => router.push('/points')}>
            <FontAwesome name="hand-stop-o" size={24} color={theme.color} />
          </HomeButton>
        </FooterContainer>
      </Footer>
    </>
  );
}
