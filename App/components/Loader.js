import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {H2} from './Text';

import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderText: {
    color: '#000',
    paddingVertical: 8,
  },
});

const Loader = ({text}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#000" size="large" />
      <H2 style={styles.loaderText}>{text}</H2>
    </View>
  );
};

Loader.defaultProps = {
  text: 'Loading',
};

Loader.propTypes = {
  text: PropTypes.string,
};

export default Loader;
