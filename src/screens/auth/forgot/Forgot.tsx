/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { Colors, Images } from '../../../constants/Constants';
import TextInputComponent from '../../../components/inputComponents/textInputComponent/TextInputComponent';
import Button from '../../../components/inputComponents/buttonComponent/ButtonComponent';

export default function Forgot() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.rowContainer}>
        <Images.BACKSPACE_ICON height={24} width={24} />
        <Text style={styles.title}>Forgot</Text>
      </View>
      <View style={styles.imageContainer}>
        <Images.THINKING_VECTOR height={206} width={296} />
      </View>
      <View style={styles.container}>
        <View style={styles.centeredView}>
          <View style={styles.innerContainer}>
            <Text style={styles.descriptionText}>
              Please enter the email address associated with your account. We'll
              send you a verification code to reset your password.
            </Text>
            <TextInputComponent
              icon={false}
              keyboardType="email-address"
              name="Email"
              onChangeText={() => {}}
              placeholderText="debra.holt@example.com"
              value=""
              security={false}
            />
            <Button
              onPressLearnMore={() => {}}
              titleText="Send Reset Code"
              accessibilityLabelText="Send Reset Code Button"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: Colors.WHITE_COLOR,
    height: '100%',
  },
  rowContainer: {
    flexDirection: 'row',
    gap: 16,
    width: 210,
    height: 28,
    marginTop: 73,
    marginLeft: 47.5,
    alignItems: 'center',
  },
  title: {
    color: Colors.SECONDARY_COLOR,
    fontSize: 23,
    fontWeight: '600',
  },
  imageContainer: {
    marginTop: 56,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  centeredView: {
    width: 308,
    flexDirection: 'column',
    height: 237,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 34,
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },
  descriptionText: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.SECONDARY_COLOR,
    textAlign: 'center',
  },
});
