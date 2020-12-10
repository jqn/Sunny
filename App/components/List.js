import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchText: {fontSize: 18, color: '#CBD5DF', fontFamily: 'Lato-Regular'},
});

export const BasicRow = ({children, style = {}}) => (
  <View style={[styles.container, style]}>{children}</View>
);

export const SearchItem = ({name, onPress}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.searchText}>{name}</Text>
  </TouchableOpacity>
);
