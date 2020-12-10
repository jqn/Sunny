import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#eee',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {},
});

export const SearchBar = ({
  onSearch,
  searchButtonEnabled = false,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="magnify"
        size={20}
        color="rgba(0, 0, 0, 0.4)"
        style={styles.icon}
      />
      <TextInput style={styles.input} keyboardType="number-pad" {...props} />
      <TouchableOpacity onPress={onSearch} disabled={!searchButtonEnabled}>
        <Text
          style={[
            styles.buttonText,
            {color: searchButtonEnabled ? '#147efb' : 'rgba(0, 0, 0, 0.5)'},
          ]}>
          Get Weather
        </Text>
      </TouchableOpacity>
    </View>
  );
};

SearchBar.defaultProps = {};

SearchBar.propTypes = {};
