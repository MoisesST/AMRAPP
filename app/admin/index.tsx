import { useState } from 'react';
import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
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
} from './styles';
import { useRouter } from "expo-router";
import { TextInput } from '../../src/components/Input/styles';
import StyledButton from '../../src/components/StyledButton';
import { ViewLineAdmin } from '../../src/components/ViewLineAdmin';


export default function Admin() {
  const { data, create, remove, refreshData } = useCollection<Line>("lines");
  const router = useRouter();
  const [lineName, setLineName] = useState('')
  const [lineNumber, setLineNumber] = useState('')

  return (
    <>
      <Container>
        <Header />

        <FormContainer>
          <Text>Cadastro de novas linhas</Text>

          <ScrollView style={styles.scroll}>
            <TextInput
              style={styles.input}
              onChangeText={setLineName}
              value={lineName}
              placeholder='nome linha'
            />
            <TextInput
              style={styles.input}
              onChangeText={setLineNumber}
              value={lineNumber}
              placeholder="numero linha"
              keyboardType="numeric"
            />
          </ScrollView>

          <StyledButton
            title="Cadastrar"
            onPress={async () => {
              try {
                await create({
                  name: lineName,
                  lineNumber: lineNumber,
                });
                Alert.alert("Criado com sucesso");

                await refreshData();
                router.push("/admin");
              } catch (error: any) {
                Alert.alert("Create Line error", error.toString());
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