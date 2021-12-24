import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DrawableMapView = (props) => {
  return (
    <View style={styles.container}>
      <Text>DrawableMapView</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default DrawableMapView;
