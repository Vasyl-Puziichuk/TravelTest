import { StyleSheet, View, Text } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";

const Location = () => {
  const coordinates = {
    latitude: 50.2666,
    longitude: 28.6639,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
    title: "My Location",
  };
  return (
    <MapView initialRegion={coordinates} style={styles.mapStyle}>
      <Marker coordinate={coordinates} title={coordinates.title} />
    </MapView>
  );
};

export default Location;

const styles = StyleSheet.create({
  mapStyle: {
    width: "100%",
    height: "100%",
  },
});
