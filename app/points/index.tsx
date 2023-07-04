import { useState } from 'react';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import useCollection from '../../src/hooks/useCollection';
import { Alert, FlatList, StatusBar } from 'react-native';
import {
  Container,
  FormContainer,
  Footer,
  FooterContainer,
  HomeButton,
  LinesContainerList,
  LinesContainer
} from './styles';
import { useRouter } from 'expo-router';
import { Lines } from '../../src/components/Lines';
import Point from '../../src/types/Point';
import { useThemeContext } from '../../src/contexts/ThemeContext';
import { Text } from '../../src/global/Text';
import { Input } from '../../src/components/Input';
import { Button } from '../../src/components/Button';
import { LineEdit } from '../../src/components/LineEdit';
import { Separator } from '../../src/components/Points/styles';
import { ViewPointAdmin } from '../../src/components/ViewPointAdmin';


export default function Admin() {
  const router = useRouter();
  const { data, create, remove, refreshData } = useCollection<Point>('points');
  const [paradaName, setParadaName] = useState('');
  const [selectedLine, setSelectedLine] = useState('');
  const [dataShow, setDataShow] = useState(data);

  const handleLineSelect = (lineId: string) => {
    setSelectedLine(lineId);
    console.log('Linha selecionada:', lineId);
    const filteredArray = data.filter((item) => item.lineId === lineId);
    setDataShow(filteredArray);
  };

  const {theme} = useThemeContext();

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={theme.statusbar} />

      <Container>
        <Text
          size={32}
          weight={'600'}
          color={theme.title}
          style={{ marginVertical: 24, textAlign: 'center'}}
        >
          Paradas
        </Text>

        <FormContainer>
          <LinesContainerList style={{ marginBottom: 24 }}>
            <Lines onLineSelect={handleLineSelect} />
          </LinesContainerList>

          <Input
            value={'ID:..' + selectedLine}
            placeholder='ID da linha'
            editable={false}
            style={{ marginBottom: 24 }}
          />

          <Input
            onChangeText={setParadaName}
            value={paradaName}
            placeholder="Nome da parada"
            style={{ marginBottom: 24 }}
          />

          <Button
            title="Cadastrar"
            onPress={async () => {
              try {
                await create({
                  lineId: selectedLine,
                  name: paradaName,
                  schedules: [],
                });
                Alert.alert('Ponto cadastrada com sucesso');
                setParadaName('');
                setSelectedLine('');
                await refreshData();
              } catch (error: any) {
                Alert.alert('Erro ao cadastrar o ponto', error.toString());
              }
            }}
          />
        </FormContainer>
        <LinesContainer>
          <FlatList
            showsVerticalScrollIndicator
            data={dataShow}
            contentContainerStyle={{ paddingRight: 24 }}
            renderItem={({ item }) => (
              // const isSelected = selectedLine === line.id!;
              <ViewPointAdmin
                point={item}
                onDelete={async () => {
                  await remove(item.id!);
                  await refreshData();
                }}
              />
            )}
          />
        </LinesContainer>
        {/* <FlatList
          showsVerticalScrollIndicator
          data={dataShow}
          contentContainerStyle={{ paddingHorizontal: 24 }}
          ItemSeparatorComponent={Separator}
          renderItem={({ item }) => (
            <LineEdit
              line={item}
              link='points'
              onDelete={async () => {
                await remove(item.id!);
                await refreshData();
              }}
            />
          )}
        /> */}
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