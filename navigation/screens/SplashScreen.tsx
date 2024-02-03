import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/Constants';

function SplashScreen(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Findr</Text>
      </View>
      <View>
        <Text style={styles.text}>Search for hope</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: Colors.PRIMARY_COLOR,
  },
  title: {
    color: Colors.WHITE_COLOR,
    fontSize: 64,
  },
  text: {
    color: Colors.WHITE_COLOR,
    fontSize: 18,
    marginTop: -20,
    marginLeft: 115,
  },
});

export default SplashScreen;
