import React, { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Colors, Images } from '../../../constants/Constants';
import TextInputComponent from '../../../components/inputComponents/textInputComponent/TextInputComponent';
import ButtonComponent from '../../../components/inputComponents/buttonComponent/ButtonComponent';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');

  const buttonPressHandler = () => {
    console.log(email, password, fullName);
  };

  return (
    <SafeAreaView>
      <View style={styles.logoContainer}>
        <Image source={Images.LOGO} alt="Logo Image" style={styles.logo} />
        <Text style={styles.welcome}>Welcome Back</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.form}>
          <View>
            <TextInputComponent
              icon={false}
              name="Full Name"
              value={fullName}
              onChangeText={setFullName}
              placeholderText="Jane Cooper"
              keyboardType="default"
            />
            <TextInputComponent
              icon={false}
              name="Email"
              value={email}
              onChangeText={setEmail}
              placeholderText="debra.holt@example.com"
              validationText="Your email address is your username."
              keyboardType="email-address"
            />
          </View>
          <TextInputComponent
            icon={false}
            name="Password"
            value={password}
            onChangeText={setPassword}
            placeholderText="**************"
            validationText="Your password must be 8 character. "
            keyboardType="default"
          />
        </View>
        <View>
          <ButtonComponent
            onPressLearnMore={buttonPressHandler}
            titleText="Log in"
            accessibilityLabelText="Register Button"
          />
          <View>
            <Text>Forget your password</Text>
            <Text>|</Text>
            <Text>Register for an account</Text>
          </View>
          {/* <View> </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  logoContainer: {
    width: 'auto',
    height: 96,
    alignSelf: 'center',
    marginTop: 26,
    gap: 24,
  },
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
    height: 190,
    borderColor: Colors.SECONDARY_COLOR,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
    top: 200,
  },
  textStyle: {
    width: 308,
    height: 20,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'left',
  },
  form: {
    top: -130,
    width: 308,
    height: 450,
    marginBottom: 34,
    marginHorizontal: 33,
    justifyContent: 'center',
  },
});
