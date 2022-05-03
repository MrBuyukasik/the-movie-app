import React, { FunctionComponent, useEffect, useState } from 'react';

import { StyleSheet, Text, View, Alert } from 'react-native';

import SplashScreen from 'react-native-splash-screen';

import DiscoverProvider from '../../../sdk/discover/discover.provider';

import {
  IDiscoverDomain,
  IDiscoverMovieSuccess,
} from '../../../sdk/discover/discover.interface';

import { SearchBar, SimpleMovieList } from '../../components';
import paths from '../../navigation/paths';
import colors from '../../constants/colors';

const Home: FunctionComponent<{}> = ({ navigation }) => {
  const [popularMovies, setPopulerMovies] = useState<IDiscoverDomain[]>([]);
  const [isLoadingPopularMovies, setIsLoadingPopularMovies] =
    useState<boolean>(true);

  const [upcomingMovies, setUpcomingMovies] = useState<IDiscoverDomain[]>([]);

  const fetchMovies = async () => {
    const { ok, data } = await DiscoverProvider.discoverMovies();

    if (ok) {
      const { results } = data as IDiscoverMovieSuccess;
      setPopulerMovies(results);
      setIsLoadingPopularMovies(false);
    } else {
      Alert.alert('Error', 'Error Fetching Movies');
    }

    SplashScreen.hide();
  };

  const fetchUpcomingMovies = async () => {
    const { ok, data } = await DiscoverProvider.getUpcomingMovies();

    if (ok) {
      const { results } = data as IDiscoverMovieSuccess;
      setUpcomingMovies(results);
      setIsLoadingPopularMovies(false);
    } else {
      Alert.alert('Error', 'Error Fetching Movies');
    }
  };

  const onSelectMovie = async (movie: IDiscoverDomain) => {
    navigation.navigate(paths.MOVIE_DETAILS, { selectedMovie: movie });
  };

  useEffect(() => {
    fetchMovies();
    fetchUpcomingMovies();
  }, []);

  return (
    <View style={styles.container}>
      {isLoadingPopularMovies ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <>
          <SearchBar setSearchedMovie={setPopulerMovies} />
          <SimpleMovieList
            data={popularMovies}
            icon="ios-trending-up"
            onSelectMovie={onSelectMovie}
            title="Most popular releases:"
          />
          <SimpleMovieList
            data={upcomingMovies}
            icon="ios-trending-up"
            onSelectMovie={onSelectMovie}
            title="Upcoming Movies"
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.GREY_PLACEHOLDER,
  },
  flatListContainer: {
    height: 260,
  },
});

export default Home;
