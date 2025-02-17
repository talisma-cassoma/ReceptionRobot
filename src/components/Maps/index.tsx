import React from 'react';
import MapView from 'react-native-maps';
import { styles } from './styles';

export function Maps() {
  return (
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
       style={ styles.container }
      />
       );
}
