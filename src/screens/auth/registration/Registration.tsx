import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Colors } from '../../../constants/Constants';

const RoundedImage = require('../../../assets/VectorRoundedDiagram.png');

export default function Registration() {
  return (
    <SafeAreaView>
      <Image
        source={RoundedImage}
        alt="Image Left"
        style={styles.imageStyles}
      />
      <View>
        <Text style={styles.heading}>Findr</Text>
      </View>
      {/* <Text>Join the Search for Hope</Text> */}
      <Text style={styles.heading}>Registration</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 64,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.PRIMARY_COLOR,
    top: -130,
    height: 77,
  },
  //   caption: {
  //     textAlign: 'center',
  //     fontSize: 23,
  //     color: Colors.SECONDARY_COLOR,
  //     top: -100,
  //   },
  imageStyles: {
    height: 259,
    width: 310,
    top: -80,
    left: 170,
  },
});
