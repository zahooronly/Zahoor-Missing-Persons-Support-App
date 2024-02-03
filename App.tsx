import {
  // Text,
  View,
  StyleSheet,
  // useColorScheme,
  // ScrollViewComponent,
} from 'react-native';
import React from 'react';
import SplashScreen from './navigation/screens/SplashScreen';

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>
        Missing Person Finding App by "Zahoor Ahmad"
      </Text> */}
      <SplashScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // title: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  // },
});

export default App;
