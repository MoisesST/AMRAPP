import { Modal, ActivityIndicator } from 'react-native';

import { ExpoLeaflet, MapLayer } from 'expo-leaflet';

import { AntDesign } from '@expo/vector-icons';

import { markers } from '../../mocks/markers';
import { CloseButton } from './styles';

const mapLayer: MapLayer = {
  baseLayerName: 'OpenStreetMap',
  baseLayerIsChecked: true,
  layerType: 'TileLayer',
  baseLayer: true,
  url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  attribution:
    '&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors',
};

interface MapModalProps {
  visible: boolean;
  onClose: () => void;
}

function MapModal({ visible, onClose }: MapModalProps) {
  return (
    <Modal
      visible={visible}
      animationType='slide'
      presentationStyle='pageSheet'
      onRequestClose={onClose}
    >
      <CloseButton
        onPress={onClose}
      >
        <AntDesign name="closecircle" size={24} color="black" />
      </CloseButton>
      <ExpoLeaflet
        mapLayers={[mapLayer]}
        mapMarkers={markers}
        mapCenterPosition={{ lat: -25.35084, lng: -51.47921 }}
        maxZoom={20}
        zoom={15}
        loadingIndicator={() => <ActivityIndicator />}
        onMessage={(message) => {
          // You can capture map interacions here
          console.log(message);
        }}
      />
    </Modal>
  );
}
export { MapModal };