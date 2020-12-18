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
    alignItems: 'flex-end',
    paddingTop: 24,
    paddingBottom: 8,
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
    flex: 0.75,
    alignItems: 'flex-start',
  },
  rightButton: {
    paddingRight: 4,
    flex: 0.75,
    alignItems: 'flex-end',
  },
  titleContainer: {alignItems: 'center', flex: 1.5},
  buttonPlaceholder: {
    flex: 0.75,
  },
});

const Header = ({
  headerTitle,
  leftButton,
  rightButton,
  onLeftButtonPress,
  onRightButtonPress,
}) => {
  const layout = {
    width: useWindowDimensions().width,
    height: useWindowDimensions().height,
  };

  const defaultHeight = getDefaultHeaderHeight(
    layout,
    StatusBar.currentHeight || 26,
  );

  return (
    <View style={[styles.container, {height: defaultHeight}]}>
      {leftButton ? (
        <TouchableOpacity style={styles.leftButton} onPress={onLeftButtonPress}>
          <Icon name="arrow-left" size={35} color="#FFF" />
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonPlaceholder} />
      )}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{headerTitle}</Text>
      </View>
      {rightButton ? (
        <TouchableOpacity
          style={styles.rightButton}
          onPress={onRightButtonPress}>
          <Icon name="magnify" size={35} color="#FFF" />
        </TouchableOpacity>
      ) : (
        <View style={styles.buttonPlaceholder} />
      )}
    </View>
  );
};

Header.defaultProps = {
  headerTitle: '',
  leftButton: false,
  rightButton: false,
  onLeftButtonPress: () => {},
  onRightButtonPress: () => {},
};

Header.propTypes = {
  headerTitle: PropTypes.string,
  leftButton: PropTypes.bool,
  rightButton: PropTypes.bool,
  onLeftButtonPress: PropTypes.func,
  onRightButtonPress: PropTypes.func,
};

export default Header;
