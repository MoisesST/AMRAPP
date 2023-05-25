import { useState } from 'react';

import { useThemeContext } from '../contexts/ThemeContext';
import { ThemeProvider } from 'styled-components/native';

import { FontAwesome5, Ionicons } from '@expo/vector-icons';

import { Header } from '../components/Header';
import { Lines } from '../components/Lines';
import { Points } from '../components/Points';
import { MapModal } from '../components/MapModal';
import { SearchModal } from '../components/SearchModal';
import {
  Container,
  LinesContainer,
  PointsContainer,
  Footer,
  FooterContainer,
  MapButton,
  SearchButton,
} from './styles';

function Main() {
  const [isMapModalVisible, setMapModalVisible] = useState(false);
  const [isSearchModalVisible, setSearchModalVisible] = useState(false);

  const {theme} = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
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
            <FontAwesome5 name="map" size={40} color={theme.color} />
          </MapButton>

          <SearchButton
            onPress={() => setSearchModalVisible(true)}
          >
            <Ionicons name="md-search" size={40} color={theme.color} />
          </SearchButton>
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
    </ThemeProvider>
  );
}
export { Main };