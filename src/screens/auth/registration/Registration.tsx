import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  // Button,
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../../constants/Constants';
import TextInputComponent from '../../../components/inputComponents/TextInputComponent';

const RoundedImage = require('../../../assets/VectorRoundedDiagram.png');

export default function Registration() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  return (
    <SafeAreaView>
      <Image
        source={RoundedImage}
        alt="Image Left"
        style={styles.imageStyles}
      />
      <View style={styles.container}>
        <Text style={styles.heading}>Findr</Text>
        <Text style={styles.caption}>Join the Search for Hope</Text>
      </View>
      <View style={styles.form}>
        <View style={styles.formInputField}>
          <TextInputComponent
            icon={true}
            name="Email"
            value={email}
            onChangeText={setEmail}
            placeholderText="Enter your email"
          />
        </View>
        <TextInputComponent
          icon={false}
          name="Password"
          value={password}
          onChangeText={setPassword}
          placeholderText="Enter your password"
        />
        <TextInputComponent
          icon={false}
          name="Full Name"
          value={fullName}
          onChangeText={setFullName}
          placeholderText="Enter your full name"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageStyles: {
    height: 259,
    width: 350,
    top: -80,
    left: 100,
  },
  container: {
    height: 115,
    top: -150,
  },
  heading: {
    fontSize: 64,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.PRIMARY_COLOR,
    height: 77,
  },
  caption: {
    textAlign: 'center',
    fontSize: 23,
    color: Colors.SECONDARY_COLOR,
  },
  form: {
    backgroundColor: Colors.PRIMARY_COLOR,
    height: 450,
    top: -130,
  },
  formInputField: {
    height: 77,
    // width: '100%',
  },
});
