import { useState } from 'react';

import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';

import { Header } from '../../src/components/Header';
// import { Lines } from '../../src/components/Lines';
// import { Points } from '../../src/components/Points';
// import { MapModal } from '../../src/components/MapModal';
// import { SearchModal } from '../../src/components/SearchModal';
import useCollection from "../../src/hooks/useCollection";
import Line from "../../src/types/Line";
import { Alert, FlatList, Text, View } from "react-native";
import {
  Container,
  FormContainer,
  Footer,
  FooterContainer,
  AdminButton,
  HomeButton,
} from './styles';
import { useRouter } from "expo-router";


export default function Admin() {
  const { data, create, remove, refreshData } = useCollection<Line>("lines");

  // const [isMapModalVisible, setMapModalVisible] = useState(false);
  // const [isSearchModalVisible, setSearchModalVisible] = useState(false);
  const router = useRouter();


  return (
    <>
      <Container>
        <Header />
        <FormContainer>

          <Text>dadads</Text>

        </FormContainer>
        {/* <LinesContainer>
          <Lines />
        </LinesContainer>

        <PointsContainer>
          <Points />
        </PointsContainer> */}
      </Container>

      <Footer>
        <FooterContainer>
          <HomeButton
            onPress={() => router.push("/")}>
            <FontAwesome5 name="home" size={40} color="black" />
          </HomeButton>

          {/* <AdminButton
            onPress={() => router.push("/admin")}>
            <MaterialIcons name="admin-panel-settings" size={40} color="black" />
          </AdminButton> */}
        </FooterContainer>
      </Footer>

      {/* <MapModal
        visible={isMapModalVisible}
        onClose={() => setMapModalVisible(false)}
      />

      <SearchModal
        visible={isSearchModalVisible}
        onClose={() => setSearchModalVisible(false)}
      /> */}
    </>
  );
}