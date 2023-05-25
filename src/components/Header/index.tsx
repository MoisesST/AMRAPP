import { useEffect, useState } from 'react';

import axios from 'axios';

import {
  requestBackgroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
} from 'expo-location';

import { Container, Image, TextContainer, TitleContainer, WeatherContainer } from './styles';
import { Text } from '../../global/Text';
import { useThemeContext } from '../../contexts/ThemeContext';

function Header() {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [weather, setWeather] = useState(null);

  async function requestLocationPermissions() {
    const { granted } = await requestBackgroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    } else {
      alert('É necessário habilitar a localização.');
    }
  }

  const getWeather = async (lat: any, long: any) => {
    const res = await axios.get('http://api.weatherapi.com/v1/current.json', {
      params: {
        key: 'c7aa02ad4a6f447caaf212821232405',
        q: 'guarapuava',
        lang: 'pt',
        lat: lat,
        lon: long
      }
    });
    setWeather(res.data);
  };

  const formattedObj = JSON.stringify(weather, null);

  // console.log(formattedObj);
  console.log(weather);

  useEffect(() => {
    requestLocationPermissions();
    getWeather(location?.coords.latitude, location?.coords.longitude);
  },[]);

  const {theme} = useThemeContext();

  return (
    <Container>
      <TitleContainer>
        <Text size={14} color={theme.title} opacity={0.9}>
        Bem vindo(a) ao
        </Text>
        <Text size={24} weight={'700'} color={theme.title}>
        AMR
          <Text size={24} color={theme.title}>
          APP
          </Text>
        </Text>
      </TitleContainer>
      {
        weather ? (
          <WeatherContainer>
            <TextContainer>
              <Image
                source={{
                  uri: `https://${weather.current.condition.icon}`
                }}
              />
              <Text size={24} color={theme.title}>
                {Math.floor(weather.current.temp_c)}
              </Text>
              <Text
                size={14}
                weight={'600'}
                color={theme.title}
                style={{ marginLeft: 2 }}
              >
                °C
              </Text>
            </TextContainer>
            <Text size={14} color={theme.title}>
              {weather.location.name}
            </Text>
          </WeatherContainer>
        ) : null
      }
    </Container>
  );
}
export { Header };
