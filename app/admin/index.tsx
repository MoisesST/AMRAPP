import { useState } from 'react';
import { FontAwesome5, FontAwesome, AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Header } from '../../src/components/Header';
import useCollection from '../../src/hooks/useCollection';
import Line from '../../src/types/Line';
import { Alert, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import useCollection from '../../src/hooks/useCollection';
import Line from '../../src/types/Line';
import { Alert, FlatList, StatusBar, StyleSheet, useColorScheme } from 'react-native';
import {
  Container,
  LinesContainer,
  FormContainer,
  Footer,
  FooterContainer,
  HomeButton,
} from './styles';
import { useRouter } from 'expo-router';
import { TextInput } from '../../src/components/Input/styles';
import StyledButton from '../../src/components/StyledButton';
import { ViewLineAdmin } from '../../src/components/ViewLineAdmin';
import { Text } from '../../src/global/Text';
import themes from '../../src/themes';
import { Input } from '../../src/components/Input';
import { Button } from '../../src/components/Button';


export default function Admin() {
  const { data, create, remove, refreshData } = useCollection<Line>('lines');
  const router = useRouter();
  const [lineName, setLineName] = useState('');
  const [lineNumber, setLineNumber] = useState('');

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
            Cadastrar rotas
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
            //horizontal showsHorizontalScrollIndicator={false}
            data={data}
            contentContainerStyle={{ paddingRight: 24 }}
            renderItem={({ item }) => (
              // const isSelected = selectedLine === line.id!;
              <ViewLineAdmin
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
            <FontAwesome5 name="home" size={40} color="black" />
          </HomeButton>
          <HomeButton
            onPress={() => router.push('/admin')}>
            <FontAwesome5 name="route" size={24} color="black" />
          </HomeButton>
          <HomeButton
            onPress={() => router.push('/points')}>
            <FontAwesome name="hand-stop-o" size={24} color="black" />
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
