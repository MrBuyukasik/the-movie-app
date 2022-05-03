import React, {FunctionComponent, useState} from 'react';

import {StyleSheet, View, StatusBar, Alert} from 'react-native';

import colors from '../../../constants/colors';

import {IStatusBarProps} from '../interfaces/status-bar';
import DiscoverProvider from '../../../../network-operations/discover/discover.provider';

import {SearchInput} from '../../Inputs';
import {IDiscoverMovieSuccess} from '../../../../network-operations/discover/discover.interface';

interface ISearchBarProps extends IStatusBarProps {}

const SearchBar: FunctionComponent<ISearchBarProps> = props => {
  const [search, setSearch] = useState<string>('');

  const onSearch = (searchText: string) => {
    setSearch(searchText);
  };

  const callSearch = async () => {
    const params = {
      include_adult: false,
      language: 'en-US',
      query: search,
    };

    const {ok, data} = await DiscoverProvider.serachMovies(params);

    if (ok) {
      const {results} = data as IDiscoverMovieSuccess;
      props.setSearchedMovie(results);
    } else {
      Alert.alert('Error', 'Error Fetching Movies');
    }
  };

  return (
    <View style={[styles.container, styles.row]}>
      <StatusBar
        backgroundColor={colors.STATUS_BAR_HOME}
        barStyle="light-content"
      />
      <SearchInput
        onChangeText={onSearch}
        onSubmitEditing={callSearch}
        returnKeyType="done"
        value={search}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    elevation: 2,
    height: 60,
    paddingLeft: 30,
  },
  row: {
    flexDirection: 'row',
  },
});

export default SearchBar;
