import React from 'react';
import {
  View,
  Platform,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const getDefaultHeaderHeight = (layout, statusBarHeight) => {
  const isLandscape = layout.width > layout.height;

  let headerHeight;

  if (Platform.OS === 'ios') {
    if (isLandscape && !Platform.isPad) {
      headerHeight = 32;
    } else {
      headerHeight = 44;
    }
  } else if (Platform.OS === 'android') {
    headerHeight = 56;
  } else {
    headerHeight = 64;
  }

  return headerHeight + statusBarHeight;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 24,
    borderBottomColor: '#FFF',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Lato-Bold',
    color: '#FFF',
  },
  leftButton: {
    paddingLeft: 4,
  },
  rightButton: {
    paddingRight: 4,
  },
});

const Header = ({headerTitle, leftButton, rightButton}) => {
  const layout = {
    width: useWindowDimensions().width,
    height: useWindowDimensions().height,
  };
  const defaultHeight = getDefaultHeaderHeight(
    layout,
    StatusBar.currentHeight || 24,
  );
  console.log(
    '🚀 ~ file: Header.js ~ line 56 ~ Header ~ defaultHeight',
    StatusBar.currentHeight,
  );

  return (
    <View style={[styles.container, {height: defaultHeight}]}>
      <TouchableOpacity style={styles.leftButton}>
        <Icon name="chevron-left" size={35} color="#FFF" />
      </TouchableOpacity>
      <Text style={styles.title}>{headerTitle}</Text>
      <TouchableOpacity style={styles.rightButton}>
        <Icon name="magnify" size={35} color="#FFF" />
      </TouchableOpacity>
    </View>
  );
};

Header.defaultProps = {};

Header.propTypes = {};

export default Header;
