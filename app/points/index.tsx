import { useState } from 'react';
import { FontAwesome5, FontAwesome, AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Header } from '../../src/components/Header';
import useCollection from "../../src/hooks/useCollection";
import Line from "../../src/types/Line";
import { Alert, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  Container,
  LinesContainer,
  FormContainer,
  Footer,
  FooterContainer,
  AdminButton,
  HomeButton,
  LinesContainerList,
} from './styles';
import { useRouter } from "expo-router";
import { TextInput } from '../../src/components/Input/styles';
import StyledButton from '../../src/components/StyledButton';
import { ViewPointAdmin } from '../../src/components/ViewPointAdmin';
import { Lines } from '../../src/components/Lines';
import Point from "../../src/types/Point";


export default function Admin() {
  const router = useRouter();
  const { data, create, remove, refreshData } = useCollection<Point>("points");
  const [paradaName, setParadaName] = useState('')
  const [selectedLine, setSelectedLine] = useState('');
  const [dataShow, setDataShow] = useState(data);

  const handleLineSelect = (lineId: string) => {
    setSelectedLine(lineId);
    console.log('Linha selecionada:', lineId);
    const filteredArray = data.filter((item) => item.lineId === lineId);
    setDataShow(filteredArray);
  };

  return (
    <>
      <Container>
        <Header />

        <FormContainer>
          <Text>Cadastro de Paradas</Text>

          <Text>1º Selecione a parada</Text>

          <LinesContainerList>
            <Lines onLineSelect={handleLineSelect} />
          </LinesContainerList>

        <ScrollView style={styles.scroll}>
          <TextInput
            style={styles.input}
            value={"ID:.." + selectedLine}
            placeholder='ID da linha'
            editable={false}
          />

          <Text>2º Cadastrar uma parada</Text>

          <TextInput
            style={styles.input}
            onChangeText={setParadaName}
            value={paradaName}
            placeholder="Nome da parada"
          />

        </ScrollView>

          <Text>3º Cadastrar uma nova parada</Text>
          <StyledButton
            title="Cadastrar"
            onPress={async () => {
              try {
                await create({
                  name: paradaName,
                  lineId: selectedLine,
                });
                Alert.alert("Ponto cadastrada com sucesso");
                setParadaName('');
                setSelectedLine('');
                await refreshData();
              } catch (error: any) {
                Alert.alert("Erro ao cadastrar o ponto", error.toString());
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

      </Container>

      <Footer>
        <FooterContainer>
          <HomeButton
            onPress={() => router.push("/")}>
            <FontAwesome5 name="home" size={40} color="black" />
          </HomeButton>
          <HomeButton
            onPress={() => router.push("/admin")}>
            <FontAwesome5 name="route" size={24} color="black" />
          </HomeButton>
          <HomeButton
            onPress={() => router.push("/points")}>
            <FontAwesome name="hand-stop-o" size={24} color="black" />
          </HomeButton>
          <HomeButton
            onPress={() => router.push("/hours")}>
            <AntDesign name="clockcircleo" size={24} color="black" />
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