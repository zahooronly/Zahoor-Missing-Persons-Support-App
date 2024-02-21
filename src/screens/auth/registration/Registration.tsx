import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../../constants/Constants';
import TextInputComponent from '../../../components/inputComponents/textInputComponent/TextInputComponent';
import CheckBoxInputComponent from '../../../components/inputComponents/checkBoxInputComponent/CheckBoxInputComponent';
import ButtonComponent from '../../../components/inputComponents/buttonComponent/ButtonComponent';
const RoundedImage = require('../../../assets/VectorRoundedDiagram.png');

export default function Registration() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [fullName, setFullName] = useState<string>('');
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const handleCheckboxPress = () => {
    setIsChecked(!isChecked);
  };
  const buttonPressHandler = () => {
    console.log(email, password, fullName, isChecked);
  };
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
            icon={false}
            name="Full Name"
            value={fullName}
            onChangeText={setFullName}
            placeholderText="Jane Cooper"
          />
          <TextInputComponent
            icon={false}
            name="Email"
            value={email}
            onChangeText={setEmail}
            placeholderText="debra.holt@example.com"
            validationText="Your email address is your username."
          />
        </View>
        <TextInputComponent
          icon={false}
          name="Password"
          value={password}
          onChangeText={setPassword}
          placeholderText="*************"
          validationText="Your password must be 8 character. "
        />
        <View>
          <View style={styles.checkboxContainer}>
            <CheckBoxInputComponent
              checked={isChecked}
              size="sm"
              state="Normal"
              onPress={handleCheckboxPress}
            />
            <View style={styles.textContainer}>
              <Text style={styles.checkboxText}>Remember me</Text>
              <Text style={styles.textStyle}>
                Save my login details for next time.
              </Text>
            </View>
          </View>
          <ButtonComponent
            onPressLearnMore={buttonPressHandler}
            titleText="Next"
            accessibilityLabelText="Register Button"
          />
        </View>
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
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 8,
    lineHeight: 20,
    marginBottom: 24,
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 4,
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
  checkboxText: {
    color: Colors.SECONDARY_COLOR,
    textAlign: 'left',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Inter',
  },
  form: {
    top: -130,
    width: 308,
    height: 450,
    marginBottom: 34,
    marginHorizontal: 33,
    justifyContent: 'center',
    // backgroundColor: Colors.FADED_PRIMARY_COLOR,
  },
  formInputField: {
    // height : 77,
    // width: '100%',
  },
});
