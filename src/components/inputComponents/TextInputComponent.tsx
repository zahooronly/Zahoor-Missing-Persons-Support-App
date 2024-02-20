import React from 'react';
import { Colors } from '../../constants/Constants';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

type InputComponentsProps = {
  icon: boolean;
  name: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholderText: string;
};

const TextInputComponent = ({
  icon,
  name,
  value,
  onChangeText,
  placeholderText,
}: InputComponentsProps) => {
  return (
    <View style={styles.container}>
      {icon && (
        <View>
          <Image
            source={require('../../assets/MailIcon.png')}
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
      </View>
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.PRIMARY_COLOR,
    marginVertical: 10,
  },
  name: {
    fontSize: 14,
    color: Colors.SECONDARY_COLOR,
    fontWeight: '500',
    marginBottom: 6,
    height: 40,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    minHeight: 100,
    borderColor: Colors.BORDER_COLOR,
    borderRadius: 8,
    paddingHorizontal: 14,
    // paddingVertical: 10,
    // marginBottom: 16,
  },
  inputContainer: {
    flex: 1,
    marginLeft: 10,
    height: 20,
    // paddingVertical: 10,
    lineHeight: 20,
  },
  image: {
    width: 16.67,
    height: 13.33,
    top: 3.33,
    left: 1.67,
    borderWidth: 1.67,
  },
});
