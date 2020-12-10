import React, {useEffect, useState} from 'react';
import {FlatList, View, StatusBar, StyleSheet, Text} from 'react-native';

import {SearchBar} from '../components/SearchBar';
import {SearchItem} from '../components/List';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#263252',
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  searchText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#aaa',
    marginTop: 10,
    marginBottom: 5,
  },
});

const Search = ({navigation}) => {
  const [recentSearch, setRecentSearch] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setRecentSearch([
      {id: 123, name: 'Broomfield', lat: 0, lon: 0},
      {id: 234, name: 'Longmont', lat: 0, lon: 0},
    ]);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <FlatList
        data={recentSearch}
        renderItem={({item}) => (
          <SearchItem
            name={item.name}
            onPress={() =>
              navigation.navigate('Details', {
                lat: item.lat,
                lon: item.lon,
              })
            }
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <View>
            <SearchBar
              onSearch={() => {
                navigation.navigate('Details', {
                  zipcode: query,
                });
              }}
              searchButtonEnabled={query.length >= 5}
              placeholder="Zipcode"
              onChangeText={(text) => setQuery(text)}
            />
            <Text style={styles.searchText}>Recent</Text>
          </View>
        }
      />
    </View>
  );
};

export default Search;
