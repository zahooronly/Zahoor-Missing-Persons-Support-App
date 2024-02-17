import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
// import TextInputComponent from '../../../components/inputComponents/TextInputComponent';
import { Colors } from '../../../constants/Constants';
const LogoImage = require('../../../assets/Logo.png');

function Login() {
  return (
    <SafeAreaView>
      <Image source={LogoImage} alt="Logo Image" style={styles.logo} />
      <Text style={styles.welcome}>Welcome Back</Text>
      <View>
        <Text style={styles.name}>Name:</Text>
        <TextInput style={styles.container} placeholder="Name" />
      </View>
    </SafeAreaView>
  );
}

export default Login;

const styles = StyleSheet.create({
  logo: {
    width: 167,
    height: 96,
    alignSelf: 'center',
    marginTop: 26,
  },
  name: {
    fontSize: 14,
    color: Colors.SECONDARY_COLOR,
    fontWeight: '500',
    marginBottom: 6,
  },
  welcome: {
    fontSize: 45,
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.SECONDARY_COLOR,
  },
  input: {
    marginHorizontal: 16,
  },
  container: {
    width: 308,
    height: 70,
    borderColor: Colors.SECONDARY_COLOR,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
});
