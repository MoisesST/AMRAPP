import { useState } from 'react';
import { FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Header } from '../../src/components/Header';
import { useThemeContext } from '../../src/contexts/ThemeContext';
import { ThemeProvider } from 'styled-components/native';
import { Points } from '../../src/components/Points';
import { MapModal } from '../../src/components/MapModal';
import { SearchModal } from '../../src/components/SearchModal';
import { Lines } from '../../src/components/Lines';
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
import { useRouter } from 'expo-router';


export default function Main() {
  const [isMapModalVisible, setMapModalVisible] = useState(false);
  const [isSearchModalVisible, setSearchModalVisible] = useState(false);
  const router = useRouter();
  const {theme} = useThemeContext();
  //const { data, create, remove, refreshData  } = useCollection<Line>("lines");

  const [selectedLine, setSelectedLine] = useState('');

  const handleLineSelect = (lineId: string) => {
    setSelectedLine(lineId);
    console.log('Linha selecionada:', lineId);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />

        <LinesContainer>
          <Lines onLineSelect={handleLineSelect} />
        </LinesContainer>

        <PointsContainer>
          <Points lineId={selectedLine} />
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

          <AdminButton
            onPress={() => router.push('/login')}>
            <MaterialIcons name="admin-panel-settings" size={40} color={theme.color} />
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
    </ThemeProvider>
  );
}
export { Main };