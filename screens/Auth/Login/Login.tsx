import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';
import TextInputComponent from '../../../components/inputComponents/TextInputComponent';
import { Colors } from '../../../constants/Constants';

const LogoImage = require('../../../assets/Logo.png');

function Login() {
  return (
    <SafeAreaView>
      <Image source={LogoImage} alt="Logo Image" style={styles.logo} />
      <Text style={styles.welcome}>Welcome Back</Text>
      <TextInputComponent />
    </SafeAreaView>
  );
}

export default Login;

const styles=StyleSheet.create({
  logo:{
    width:167,
    height:96,
    alignSelf:'center',
    marginTop:26,
  },
  welcome:{
    fontSize:45,
    alignSelf:'center',
    fontWeight:'bold',
    color:Colors.SECONDARY_COLOR
  }
})