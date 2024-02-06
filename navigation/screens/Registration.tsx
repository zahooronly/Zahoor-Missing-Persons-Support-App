import { SafeAreaView, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
// import AppTextInput from '../../components/InputComponents/AppTextInput';

export default function Registration() {
  const [name, setName] = useState('');
  return (
    <SafeAreaView>
      <View>
        <Text>Findr</Text>
        <Text>Join the Search for Hope</Text>
      </View>
      {/* <AppTextInput placeholder="Jane Cooper" /> */}
      <Text>{name}</Text>
      <TextInput
        onChange={text => setName(text.nativeEvent.text)}
        placeholder="Jane Cooper"
        // style={styles.input}
      />
    </SafeAreaView>
  );
}
