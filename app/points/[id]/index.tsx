import { useEffect, useState } from 'react';
import { FontAwesome5, FontAwesome, AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Header } from '../../../src/components/Header';
import useCollection from "../../../src/hooks/useCollection";
import useDocument from "../../../src/hooks/useDocument";
import Point from "../../../src/types/Point";
import { Alert, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  Container,
  LinesContainer,
  FormContainer,
  Footer,
  FooterContainer,
  AdminButton,
  HomeButton,
} from '../styles';
import { Stack, useRouter, useSearchParams } from "expo-router";
import { TextInput } from '../../../src/components/Input/styles';
import StyledButton from '../../../src/components/StyledButton';
//import { ViewLineAdmin } from '../../src/components/ViewLineAdmin';

export default function LineDetails() {

  const { id } = useSearchParams();
  const router = useRouter();

  //   const { data, create, remove, refreshData } = useCollection<Line>("lines");
  //   const router = useRouter();
  const [pointName, setPointName] = useState('')
  //const [point, setLineNumber] = useState('')

  // for convenience, you can extract data and rename it to "book" by typing data:your_alias_for_data
  const {
    data: point,
    loading,
    upsert,
  } = useDocument<Point>("points", id as string);

  useEffect(() => {
    if (point) {
      setPointName(point.name)
     //setLineNumber(line.lineNumber)
    }
  }, [point])

  if (loading || !point) return <Text>Garregando...</Text>;


  return (
    <>
      <Container>
        <Header />

        <FormContainer>
          <Text>Edição de linha</Text>




          <ScrollView style={styles.scroll}>
            <TextInput
              style={styles.input}
              onChangeText={setPointName}
              value={pointName}
              placeholder='nome da parada'
            />
          </ScrollView>

          <StyledButton
            title="Editar"
            onPress={async () => {
              try {
                await upsert({
                  ...point, // repeating the existing line object
                  name: pointName, // updating
                  //lineNumber: lineNumbere, // updating
                });
                Alert.alert("Editado com sucesso");
                router.push("/points");
              } catch (error: any) {
                Alert.alert("Update Point error", error.toString());
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