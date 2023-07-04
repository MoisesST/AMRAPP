import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import useCollection from '../../src/hooks/useCollection';
import Line from '../../src/types/Line';
import { Alert, FlatList, StatusBar, useColorScheme } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import {
  Container,
  LinesContainer,
  FormContainer,
  Footer,
  FooterContainer,
  HomeButton,
} from './styles';
import { useRouter } from 'expo-router';
import { Text } from '../../src/global/Text';
import themes from '../../src/themes';
import { Input } from '../../src/components/Input';
import { Button } from '../../src/components/Button';
import { LineEdit } from '../../src/components/LineEdit';
import { Separator } from '../../src/components/Points/styles';


export default function Admin() {
  const { data, create, remove, refreshData } = useCollection<Line>('lines');
  const router = useRouter();
  const [lineName, setLineName] = useState('');
  const [lineNumber, setLineNumber] = useState('');

  const deviceTheme = useColorScheme();
  const theme = themes[deviceTheme!] || theme.dark;

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={theme.statusbar} />
      <Container>
        <Text
          size={32}
          weight={'600'}
          color={theme.title}
          style={{ marginTop: 24, textAlign: 'center'}}>
            Rotas
        </Text>
        <FormContainer>
          <Input
            placeholder='Digite o nome da linha'
            keyboardType='email-address'
            onChangeText={setLineName}
            style={{ marginBottom: 24 }}
          />

          <Input
            placeholder='Digite o numero da linha'
            onChangeText={setLineNumber}
            style={{ marginBottom: 24 }}
          />

          <Button
            title="Cadastrar"
            onPress={async () => {
              try {
                await create({
                  name: lineName,
                  lineNumber: lineNumber,
                });
                Alert.alert('Criado com sucesso');

                await refreshData();
                router.push('/admin');
              } catch (error: any) {
                Alert.alert('Create Line error', error.toString());
              }
            }}
          />
        </FormContainer>

        <LinesContainer>
          <FlatList
            showsVerticalScrollIndicator
            data={data}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            ItemSeparatorComponent={Separator}
            renderItem={({ item }) => (
              <LineEdit
                line={item}
                onDelete={async () => {
                  await remove(item.id!);
                  await refreshData();
                }}
              />
            )}
          />
        </LinesContainer>

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
