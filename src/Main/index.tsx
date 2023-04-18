import { useState } from 'react';
import { Header } from '../components/Header';
import { Lines } from '../components/Lines';
import { Points } from '../components/Points';
import { MapModal } from '../components/MapModal';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import {
  Container,
  LinesContainer,
  PointsContainer,
  Footer,
  FooterContainer,
  MapButton,
  SearchButton,
} from './styles';

export function Main() {
  const [isMapModalVisible, setMapModalVisible] = useState(false);

  return (
    <>
      <MapModal
        visible={isMapModalVisible}
        onClose={() => setMapModalVisible(false)}
      />

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

          <SearchButton>
            <Ionicons name="md-search" size={40} color="black" />
          </SearchButton>
        </FooterContainer>
      </Footer>
    </>
  );
}