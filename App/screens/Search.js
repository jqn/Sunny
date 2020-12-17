import React, {useEffect, useState} from 'react';
import {FlatList, View, StatusBar, StyleSheet, Text} from 'react-native';

import {SearchBar} from '../components/SearchBar';
import {SearchItem} from '../components/List';
import Header from '../components/Header';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#263252',
  },
  searchText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#AAA',
    marginTop: 10,
    marginBottom: 5,
  },
  searchContainer: {
    paddingTop: 20,
    paddingHorizontal: 16,
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
      <Header
        headerTitle="Add Location"
        leftButton
        onLeftButtonPress={() => navigation.navigate('Details')}
      />
      <View style={styles.searchContainer}>
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
    </View>
  );
};

export default Search;
