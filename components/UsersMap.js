import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';

const UsersMap = props => {
  // console.log(props.userLocation)
  let userLocationMarker = null;
  if (props.userLocation) {
    userLocationMarker = <MapView.Marker coordinate={props.userLocation}></MapView.Marker>;

  }

  let usersMarkers = userLocationMarker;
  if (props.usersPlaces) {
    console.log("HIIII>>>>>>>>>>>>>>>", props.usersPlaces.placesArray)
    usersMarkers = props.usersPlaces.placesArray.map(userPlace => <MapView.Marker coordinate={userPlace} key={userPlace.id} />);

  }



  return (
    <View style={styles.mapContainer}>
      <MapView style={styles.map} initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0622,
        longitudeDelta: 0.0421,
      }} region={props.userLocation}
      >
        {userLocationMarker}
        {usersMarkers}
      </MapView>
    </View>
  );

}

const styles = StyleSheet.create({
  mapContainer: {
    marginTop: 20,
    width: '100%',
    height: 200
  },
  map: {
    width: '100%',
    height: '100%'
  }

})
export default UsersMap;