import { Platform, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import Login from './screens/Auth/Login/Login';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  );
};

export default App;
