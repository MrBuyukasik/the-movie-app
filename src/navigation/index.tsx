import React from 'react';

import Home from '../screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import paths from './paths';
import MovieDetails from '../screens/MovieDetails';

const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name={paths.MOVIE_LIST}
          component={Home}
        />
        <Stack.Screen name={paths.MOVIE_DETAILS} component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routers;
