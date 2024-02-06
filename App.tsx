import { Platform, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
// import Registration from './navigation/screens/Registration';
import AppTextInput from './components/InputComponents/AppTextInput';
// import Registration from './navigation/screens/Registration';

const App = (): JSX.Element => {
  useEffect(() => {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);
  return (
    <View>
      {/* <Registration /> */}
      <AppTextInput placeholder="Jane Cooper" />
      <Text>Findr</Text>
    </View>
  );
};

export default App;
