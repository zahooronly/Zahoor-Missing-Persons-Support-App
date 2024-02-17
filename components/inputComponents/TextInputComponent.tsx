import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Colors } from '../../constants/Constants';
import { EmailIcon } from '../../assets/SVGs';

type InputComponentsProps = {
  icon: boolean;
  name: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholderText: string;
};

const TextInputComponent = ({
  icon,
}: // value,
// onChangeText,
// placeholderText,
InputComponentsProps) => {
  return (
    <View style={styles.container}>
      {icon && <EmailIcon />}
      <TextInput style={styles.input} />
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  input: {},
  name: {
    fontSize: 14,
    color: Colors.SECONDARY_COLOR,
    fontWeight: '500',
    marginBottom: 6,
  },
  container: {
    width: 308,
    height: 70,
    borderColor: Colors.BORDER_COLOR,
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
});
