import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { DrawableMapView } from 'react-native-drawable-map-view';

const App = (props) => {
  return (
    <View style={styles.container}>
      <DrawableMapView/>
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

export default App;
