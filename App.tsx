import { SafeAreaView } from 'react-native';
import React from 'react';
import Login from './screens/Auth/Login/Login';

const App = (): JSX.Element => {
  return (
    <SafeAreaView>
      <Login />
    </SafeAreaView>
  );
};

export default App;
