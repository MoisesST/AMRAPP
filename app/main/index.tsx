import { useState } from 'react';

import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';

import { Header } from '../../src/components/Header';
import { Lines } from '../../src/components/Lines';
import { Points } from '../../src/components/Points';
import { MapModal } from '../../src/components/MapModal';
import { SearchModal } from '../../src/components/SearchModal';
import {
  Container,
  LinesContainer,
  PointsContainer,
  Footer,
  FooterContainer,
  MapButton,
  SearchButton,
  AdminButton,
} from './styles';
import { useRouter } from "expo-router";


export default function Main() {
  const [isMapModalVisible, setMapModalVisible] = useState(false);
  const [isSearchModalVisible, setSearchModalVisible] = useState(false);
  const router = useRouter();


  return (
    <>
      <Container>
        <Header />

        <LinesContainer>
          <Lines />
        </LinesContainer>

        <PointsContainer>
          <Points />
        </PointsContainer>
      </Container>

      <Footer>
        <FooterContainer>
          <MapButton
            onPress={() => setMapModalVisible(true)}
          >
            <FontAwesome5 name="map" size={40} color="black" />
          </MapButton>

          <SearchButton
            onPress={() => setSearchModalVisible(true)}
          >
            <Ionicons name="md-search" size={40} color="black" />
          </SearchButton>

          {/* testar***** */}
          <AdminButton
            onPress={() => router.push("/admin")}>
            <MaterialIcons name="admin-panel-settings" size={40} color="black" />
          </AdminButton>
        </FooterContainer>
      </Footer>

      <MapModal
        visible={isMapModalVisible}
        onClose={() => setMapModalVisible(false)}
      />

      <SearchModal
        visible={isSearchModalVisible}
        onClose={() => setSearchModalVisible(false)}
      />
    </>
  );
}
export { Main };