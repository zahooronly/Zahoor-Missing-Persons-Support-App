import { SafeAreaView, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import { Images } from '../../../constants/Constants';
import TextInputComponent from '../../../components/inputComponents/textInputComponent/TextInputComponent';
import CheckBoxInputComponent from '../../../components/inputComponents/checkBoxInputComponent/CheckBoxInputComponent';
import ButtonComponent from '../../../components/inputComponents/buttonComponent/ButtonComponent';
import { styles } from './Styles';

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
        source={Images.VECTOR_ROUNDED_DIAGRAM}
        alt="Image Left"
        style={styles.imageStyles}
      />
      <View style={styles.container}>
        <Text style={styles.heading}>Findr</Text>
        <Text style={styles.caption}>Join the Search for Hope</Text>
      </View>
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
          security={true}
          value={password}
          onChangeText={setPassword}
          placeholderText="*************"
          validationText="Your password must be 8 character. "
          keyboardType="default"
        />
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
        <Text style={styles.underLineText}>Need Help or Have Questions?</Text>
      </View>
    </SafeAreaView>
  );
}
