import { useEffect, useState } from 'react';
import { FontAwesome5, FontAwesome, AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Header } from '../../../src/components/Header';
import useCollection from "../../../src/hooks/useCollection";
import useDocument from "../../../src/hooks/useDocument";
import Line from "../../../src/types/Line";
import { Alert, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  Container,
  FormContainer,
  Footer,
  FooterContainer,
  HomeButton,
} from '../styles';
import { Stack, useRouter, useSearchParams } from "expo-router";
import { TextInput } from '../../../src/components/Input/styles';
import StyledButton from '../../../src/components/StyledButton';
//import { ViewLineAdmin } from '../../src/components/ViewLineAdmin';

export default function LineDetails() {

  const { id } = useSearchParams();
  const router = useRouter();

  const [lineNamee, setLineName] = useState('')
  const [lineNumbere, setLineNumber] = useState('')

  // for convenience, you can extract data and rename it to "book" by typing data:your_alias_for_data
  const {
    data: line,
    loading,
    upsert,
  } = useDocument<Line>("lines", id as string);

  useEffect(() => {
    if (line) {
      setLineName(line.name)
      setLineNumber(line.lineNumber)
    }
  }, [line])

  if (loading || !line) return <Text>Garregando...</Text>;

  return (
    <>
      <Container>
        <Header />
        <FormContainer>
          <Text>Edição de linha</Text>
          <ScrollView style={styles.scroll}>
            <TextInput
              style={styles.input}
              onChangeText={setLineName}
              value={lineNamee}
              placeholder='nome linha'
            />
            <TextInput
              style={styles.input}
              onChangeText={setLineNumber}
              value={lineNumbere}
              placeholder="numero linha"
              keyboardType="numeric"
            />
          </ScrollView>

          <StyledButton
            title="Editar"
            onPress={async () => {
              try {
                await upsert({
                  ...line, // repeating the existing line object
                  name: lineNamee, // updating
                  lineNumber: lineNumbere, // updating
                });
                Alert.alert("Editado com sucesso");
                router.push("/admin");
              } catch (error: any) {
                Alert.alert("Update Line error", error.toString());
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
          <HomeButton
            onPress={() => router.push("/admin")}>
            <FontAwesome5 name="route" size={24} color="black" />
          </HomeButton>
          <HomeButton
            onPress={() => router.push("/points")}>
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