import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#000" size="large" />
    </View>
  );
};

export default Loader;
