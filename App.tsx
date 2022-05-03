import React, {FunctionComponent} from 'react';

import {SafeAreaView, StyleSheet, View} from 'react-native';
import colors from './src/constants/colors';

import AppNavigation from './src/navigation';

const App: FunctionComponent<{}> = () => {
  return (
    <View style={styles.appContainer}>
      <SafeAreaView style={styles.appContainer}>
        <AppNavigation />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: colors.GREY_PLACEHOLDER,
  },
});

export default App;
