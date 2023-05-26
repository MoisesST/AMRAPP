import { useState } from 'react';
import { FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Header } from '../../src/components/Header';
import { ViewLine } from '../../src/components/ViewLine';
import useCollection from "../../src/hooks/useCollection";
import Line from "../../src/types/Line";
import { FlatList } from 'react-native';
import { Text } from '../../src/global/Text';
import { useThemeContext } from '../../src/contexts/ThemeContext';
import { ThemeProvider } from 'styled-components/native';
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
  LineStyled,
} from './styles';
import { useRouter } from "expo-router";


export default function Main() {
  const [isMapModalVisible, setMapModalVisible] = useState(false);
  const [isSearchModalVisible, setSearchModalVisible] = useState(false);
  const router = useRouter();

  const { data, create, remove, refreshData  } = useCollection<Line>("lines");
  
  const [selectedLine, setSelectedLine] = useState('');

  function handleSelectLine(lineId: string) {
    const line = selectedLine === lineId ? '' : lineId;
    setSelectedLine(line);
  }


  const {theme} = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header />

        <LinesContainer>
        <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        contentContainerStyle={{ paddingRight: 24}}
        renderItem={({ item }) => (
        // const isSelected = selectedLine === line.id!;
          <ViewLine
            line={item}
            // onDelete={async () => {
            //   await remove(item.id!);
            //   await refreshData();
            // }}
          />
        )}
      />
        </LinesContainer>

        {/**jeitos antigso*/}
        {/* <LinesContainer>
          <Lines />
        </LinesContainer> */}

        {/* <LinesContainer>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            contentContainerStyle={{ paddingRight: 24 }}
            keyExtractor={line => line.id!}
            renderItem={({ item: line }) => {
              const isSelected = selectedLine === line.id!;

              return (
                <LineStyled onPress={() => handleSelectLine(line.id!)}>
                  <Text
                    color='orange'
                    size={14}
                    weight='600'
                    opacity={isSelected ? 1 : 0.5}
                  >
                    {line.lineNumber} {line.name}
                  </Text>
                </LineStyled>
              );
            }}
          />

        </LinesContainer> */}

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

          <AdminButton
            onPress={() => router.push("/login")}>
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
    </ThemeProvider>
  );
}
export { Main };