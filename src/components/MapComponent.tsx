import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import MapMarker from '../assets/svg/MapMarker';

interface MapComponentProps {
  lat: number;
  long: number;
}

const MapComponent = (props: MapComponentProps) => {
  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      region={{
        latitude: props.lat,
        longitude: props.long,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
    >
      <Marker
        coordinate={{
          latitude: props.lat,
          longitude: props.long,
        }}
      >
        <MapMarker />
      </Marker>
    </MapView>
  );
};

export default MapComponent;
