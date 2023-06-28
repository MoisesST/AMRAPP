import { useEffect, useState } from 'react';
import { FontAwesome5, FontAwesome, AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Header } from '../../../src/components/Header';
import useDocument from "../../../src/hooks/useDocument";
import Point from "../../../src/types/Point";
import { Alert, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  Container,
  LinesContainer,
  FormContainer,
  Footer,
  FooterContainer,
  HomeButton,
} from '../styles';
import { Stack, useRouter, useSearchParams } from "expo-router";
import { TextInput } from '../../../src/components/Input/styles';
import StyledButton from '../../../src/components/StyledButton';
import styled from 'styled-components/native';


export default function PointsDetails() {

  const { id } = useSearchParams();
  const router = useRouter();

  // for convenience, you can extract data and rename it to "book" by typing data:your_alias_for_data
  const {
    data: point,
    loading,
    upsert,
  } = useDocument<Point>("points", id as string);

  const [pointName, setPointName] = useState('');
  const [pointSchedular, setPointSchedular] = useState<string[]>(point?.schedules || []);
  const [pointSchedularteste, setPointSchedularteste] = useState('');

  const removeSchedule = (itemIndex: number) => {
    const updatedSchedules = pointSchedular.filter((item, index) => index !== itemIndex);
    setPointSchedular(updatedSchedules);
  };


  useEffect(() => {
    if (point) {
      setPointName(point.name);
      setPointSchedular(point.schedules);
    }
  }, [point])

  console.log("linha 51..point name...", pointName, " poinschedular", pointSchedular);

  if (loading || !point) return <Text>Garregando...</Text>;


  return (
    <>
      <Container>
        <Header />

        <FormContainer>
          <Text>Edição de Parada e Horários</Text>

          <ScrollView style={styles.scroll}>
            <TextInput
              style={styles.input}
              onChangeText={setPointName}
              value={pointName}
              placeholder='nome da parada'
            />

            <StyledButton
              title="Editar"
              onPress={async () => {
                try {
                  await upsert({
                    ...point, // repeating the existing line object
                    name: pointName, // updating
                  });
                  Alert.alert("Editado com sucesso");
                  router.push("/points");
                } catch (error: any) {
                  Alert.alert("Update Point error", error.toString());
                }
              }}
            />

            <Text>2º Cadastrar hora</Text>

            <TextInput
              style={styles.input}
              onChangeText={setPointSchedularteste}
              value={pointSchedularteste}
              placeholder="ex:.. 18:15"
            />
            <StyledButton
              title="Cadastrar horário"
              onPress={async () => {
                point.schedules.push(pointSchedularteste);
                setPointSchedular(point.schedules);
                try {
                  await upsert({
                    ...point, // repeating the existing line object
                    //name: pointName, // updating
                    schedules: pointSchedular,
                  });
                  Alert.alert("Horário cadastrado com sucesso");
                  router.push("/points");
                } catch (error: any) {
                  Alert.alert("Update Point error", error.toString());
                }
              }}
            />
          </ScrollView>
          <LinesContainer>
            <FlatList
              showsVerticalScrollIndicator
              data={pointSchedular}
              contentContainerStyle={{ paddingRight: 24 }}
              renderItem={({ item }) => (

                <View style={styles.points}>
                  <LineStyled >
                    <Text
                      color='orange'
                      size={14}
                      weight='600'
                    //opacity={isSelected ? 1 : 0.5}
                    >
                      {item}
                    </Text>
                  </LineStyled>

                  <View style={{ flexDirection: "row" }}>

                    <StyledButton
                      title="Deletar Hora"
                      onPress={async () => {
                        removeSchedule(pointSchedular.indexOf(item));
                        try {
                          await upsert({
                            ...point, // repeating the existing line object
                            //name: pointName, // updating
                            schedules: pointSchedular,
                          });
                          Alert.alert("Horário removido com sucesso");
                          router.push("/points");
                        } catch (error: any) {
                          Alert.alert("Update Point error", error.toString());
                        }
                      }}
                      style={{ width: "50%", backgroundColor: "darkred" }}
                    />
                  </View>
                </View>
              )}
            />
          </LinesContainer>



        </FormContainer>

      </Container >

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
  points: {
    paddingBottom: 10,
    margin: 5,
    alignItems: 'center',
  },
});

const isAndroid = Platform.OS === 'android';

const LineStyled = styled.TouchableOpacity`
  width: 350px;
  margin-left: 24px;
  padding: 5px;
  background: #000;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
`;