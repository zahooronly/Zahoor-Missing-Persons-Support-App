import { Platform, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
// import Login from './src/screens/auth/login/Login';
import Registration from './src/screens/auth/registration/Registration';
import SplashScreen from 'react-native-splash-screen';

const App = (): JSX.Element => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  });
  return (
    <SafeAreaView>
      {/* <Login /> */}
      <Registration />
    </SafeAreaView>
  );
};

export default App;
