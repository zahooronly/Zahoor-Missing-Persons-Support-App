/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Colors, Images } from '../../../constants/Constants';
import TextInputComponent from '../../../components/inputComponents/textInputComponent/TextInputComponent';
import Button from '../../../components/inputComponents/buttonComponent/ButtonComponent';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const buttonPressHandler = () => {
    console.log('Login Screen', email, password);
  };

  return (
    <SafeAreaView style={{ backgroundColor: Colors.WHITE_COLOR }}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Images.LOGO width={167} height={96} />
        </View>
        <Text style={styles.welcome}>Welcome Back</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.formSection}>
          <TextInputComponent
            icon={false}
            name="Email"
            value={email}
            onChangeText={setEmail}
            placeholderText="debra.holt@example.com"
            validationText="Your email address is your username."
            keyboardType="email-address"
          />
          <TextInputComponent
            icon={false}
            name="Password"
            value={password}
            onChangeText={setPassword}
            security={true}
            placeholderText="**************"
            validationText="Your password must be 8 character. "
            keyboardType="default"
          />
        </View>
      </View>
      <View style={styles.lastLayout}>
        <View style={{ alignItems: 'center' }}>
          <Button
            onPressLearnMore={buttonPressHandler}
            titleText="Log in"
            accessibilityLabelText="Login Button"
          />
        </View>
        <View style={styles.forgotInfo}>
          <Text>Forget your password</Text>
          <Text>|</Text>
          <Text>Register for an account</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: 377,
            alignItems: 'center',
            gap: 20,
            height: 33,
          }}
        >
          <View
            style={{
              borderBottomColor: Colors.FADED_BORDER_COLOR,
              borderBottomWidth: StyleSheet.hairlineWidth,
              width: 152,
            }}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '400',
              color: Colors.SECONDARY_COLOR,
            }}
          >
            or
          </Text>
          <View
            style={{
              borderBottomColor: Colors.FADED_BORDER_COLOR,
              borderBottomWidth: StyleSheet.hairlineWidth,
              width: 152,
            }}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
          }}
        >
          <View
            style={{
              borderColor: Colors.FADED_BORDER_COLOR,
              padding: 10,
              borderWidth: 1,
              borderRadius: 10,
            }}
          >
            <Images.GOOGLE_IMAGE height={34} width={34} />
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Images.VECTOR_DIAGRAM_LOGIN width={158} height={155} />
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
    alignContent: 'center',
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
    paddingVertical: 10,
    alignItems: 'center',
    alignSelf: 'center',
    // justifyContent: 'center',
    // top: 200,
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
    color: Colors.SECONDARY_COLOR,
  },
  formSection: {
    // top: -200,
    width: 308,
    height: 450,
    marginBottom: 34,
    // marginHorizontal: 25,
    justifyContent: 'center',
    // alignContent: 'center',
  },
  lastLayout: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: 'center',
    top: 170,
    // gap: 21,
    width: 'auto',
    height: 227,
    // left: 0,
    // backgroundColor: Colors.PRIMARY_COLOR,
  },
  forgotInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    alignSelf: 'center',
    color: Colors.SECONDARY_COLOR,
    gap: 10,
    marginTop: 21,
    textDecorationLine: 'underline',
  },
});
