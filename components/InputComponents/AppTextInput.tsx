import { View, TextInput, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../constants/Constants';

interface AppTextInputProps {
  placeholder: string;
}

export default function AppTextInput({ placeholder }: AppTextInputProps) {
  const [name, setName] = useState('');
  return (
    <View>
      <Text>{name}</Text>
      <TextInput
        onChange={text => setName(text.nativeEvent.text)}
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.BORDER_COLOR,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    margin: 10,
    fontSize: 18,
  },
});
