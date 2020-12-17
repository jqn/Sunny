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
    borderColor: '#DDD',
    backgroundColor: '#263252',
    alignItems: 'center',
  },
  input: {
    fontSize: 18,
    flex: 1,
    color: '#FFF',
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
        size={25}
        color="#FFF"
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        {...props}
        selectionColor="#FFF"
      />
      <TouchableOpacity onPress={onSearch} disabled={!searchButtonEnabled}>
        <Text
          style={[
            styles.buttonText,
            {color: searchButtonEnabled ? '#FFF' : '#DDD'},
          ]}>
          Get Weather
        </Text>
      </TouchableOpacity>
    </View>
  );
};

SearchBar.defaultProps = {};

SearchBar.propTypes = {};
