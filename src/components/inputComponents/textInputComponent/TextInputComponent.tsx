import React from 'react';
import { Colors } from '../../../constants/Constants';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

type InputComponentsProps = {
  icon: boolean;
  name: string;
  value: string;
  validationText?: string;
  onChangeText: (text: string) => void;
  placeholderText: string;
};

const TextInputComponent = ({
  icon,
  name,
  value,
  onChangeText,
  placeholderText,
  validationText,
}: InputComponentsProps) => {
  return (
    <View style={styles.container}>
      {icon && (
        <View>
          <Image
            source={require('../../../assets/MailIcon.png')}
            style={styles.image}
          />
        </View>
      )}
      <View style={styles.inputContainer}>
        <Text style={styles.name}>{name}</Text>
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholderText}
          placeholderTextColor={Colors.FADED_SECONDARY_COLOR}
        />
        {validationText && (
          <Text style={styles.textStyle}>{validationText}</Text>
        )}
      </View>
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 'auto',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.BORDER_COLOR,
    marginBottom: 8,
  },
  name: {
    color: Colors.SECONDARY_COLOR,
    width: 'auto',
    height: 20,
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    letterSpacing: 0,
    textAlign: 'left',
  },
  container: {
    width: '100%',
    height: 'auto',
  },
  inputContainer: {
    width: 308,
    height: 'auto',
    marginBottom: 6,
  },
  image: {
    width: 16.67,
    height: 13.33,
    top: 3.33,
    left: 1.67,
    borderWidth: 1.67,
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
});
