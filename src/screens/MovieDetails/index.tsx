import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import colors from '../../constants/colors';
import Config from '../../../config';
const MovieDetails = ({route}) => {
  const {selectedMovie} = route?.params;
  console.log(selectedMovie);
  console.log(`${Config.MOVIE_DB_IMG_URL}/w500/${selectedMovie?.poster_path}`);
  return (
    <View style={styles.container}>
      <Image
        style={styles.moviePoster}
        source={{
          uri: `${Config.MOVIE_DB_IMG_URL}/w500/${selectedMovie?.poster_path}`,
        }}
      />

      <View style={styles.detailStyle}>
        <Text style={styles.titles}>Title</Text>
        <Text style={styles.textValuesStyle}>{selectedMovie.title}</Text>
      </View>

      <View style={styles.detailStyle}>
        <Text style={styles.titles}>Ratings</Text>
        <Text style={styles.textValuesStyle}>{selectedMovie.vote_average}</Text>
      </View>

      <View style={styles.detailStyle}>
        <Text style={styles.titles}>Release Date</Text>
        <Text style={styles.textValuesStyle}>{selectedMovie.release_date}</Text>
      </View>

      <ScrollView contentContainerStyle={styles.detailStyle}>
        <Text style={styles.titles}>Overview</Text>
        <Text style={styles.textValuesStyle}>{selectedMovie.overview}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.GREY_PLACEHOLDER,
  },
  moviePoster: {
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: 300,
    width: Dimensions.get('screen').width,
  },
  titles: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  detailStyle: {
    padding: 20,
    alignItems: 'center',
  },
  textValuesStyle: {
    fontSize: 15,
    marginTop: 5,
  },
});

export default MovieDetails;
