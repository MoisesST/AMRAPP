import { useEffect, useState, useRef } from 'react';

import {
  requestBackgroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  watchPositionAsync,
  LocationAccuracy,
} from 'expo-location';

import MapView, { Marker } from 'react-native-maps';

import { StyleSheet } from 'react-native';

export function CustomMap() {
  const [location, setLocation] = useState<LocationObject | null>(null);

  const mapRef = useRef<MapView>(null);

  async function requestLocationPermissionsAsync() {
    const { granted } = await requestBackgroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }

  useEffect(() => {
    requestLocationPermissionsAsync();
  }, []);

  useEffect(() => {
    watchPositionAsync({
      accuracy: LocationAccuracy.Highest,
      timeInterval: 1000,
      distanceInterval: 1
    }, (response) => {
      setLocation(response);
      mapRef.current?.animateCamera({
        pitch: 70,
        center: response.coords
      });
    });
  }, []);

  return (
    <>
      {
        location &&
        <MapView
          ref={mapRef}
          // mapType={'hybrid'}
          customMapStyle={
            [
              {
                'stylers': [
                  {
                    'saturation': 100
                  },
                  {
                    'lightness': -55
                  },
                  {
                    'weight': 8
                  }
                ]
              }
            ]
          }
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />
        </MapView>
      }
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1,
    with: '100%',
  },
});