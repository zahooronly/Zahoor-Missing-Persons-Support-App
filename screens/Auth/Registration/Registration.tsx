import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  // TextInput,
} from 'react-native';
import React from 'react';
import { Colors } from '../../../../constants/Constants';

const RoundedImage = require('../../assets/VectorRoundedDiagram.png');

export default function Registration() {
  // const [text, onChangeText] = React.useState<string>('Useless Text');

  return (
    <SafeAreaView>
      <Image
        source={RoundedImage}
        alt="Image Left"
        style={styles.imageStyles}
      />
      <View>
        <Text style={styles.heading}>Findr</Text>
        <Text style={styles.caption}>Join the Search for Hope</Text>
      </View>
      {/* <View>
        <Text>Name</Text>
        <View>
          <TextInput
            // style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
      </View> */}
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
  caption: {
    textAlign: 'center',
    fontSize: 23,
    color: Colors.SECONDARY_COLOR,
    top: -100,
  },
  imageStyles: {
    height: 259,
    width: 310,
    top: -80,
    left: 170,
  },
});
