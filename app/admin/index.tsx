import { useState } from 'react';

import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';

import { Header } from '../../src/components/Header';
//import { Input } from '../../src/components/Input';
// import { Lines } from '../../src/components/Lines';
// import { Points } from '../../src/components/Points';
// import { MapModal } from '../../src/components/MapModal';
// import { SearchModal } from '../../src/components/SearchModal';

import useCollection from "../../src/hooks/useCollection";
import Line from "../../src/types/Line";
import { Alert, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  Container,
  FormContainer,
  Footer,
  FooterContainer,
  AdminButton,
  SubmitButton,
  HomeButton,
} from './styles';
import { useRouter } from "expo-router";
import { TextInput } from '../../src/components/Input/styles';


export default function Admin() {
  const { data, create, remove, refreshData } = useCollection<Line>("lines");

  // const [isMapModalVisible, setMapModalVisible] = useState(false);
  // const [isSearchModalVisible, setSearchModalVisible] = useState(false);
  const router = useRouter();

  const [lineName, setLineName] = useState('')
  const [lineNumber, setLineNumber] = useState('')
  //name: string;
  //lineNumber: string;

  return (
    <>
      <Container>
        <Header />

        <FormContainer>
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

          <SubmitButton
            onPress={async () => {
              try {
                await create({
                  name: lineName,
                  lineNumber: lineNumber,
                  schedules: [],
                });
                await refreshData();
              } catch (error: any) {
                Alert.alert("Create Line error", error.toString());
              }
            }}>
            <FontAwesome5 name="submit" size={40} color="black" />
          </SubmitButton>



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