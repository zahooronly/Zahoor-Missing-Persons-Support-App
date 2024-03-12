import { SafeAreaView } from 'react-native';
import React from 'react';
import Forgot from './src/screens/auth/forgot/Forgot';
// import Login from './src/screens/auth/login/Login';
// import Registration from './src/screens/auth/registration/Registration';

const App: React.FC = (): JSX.Element => {
  return (
    <SafeAreaView>
      {/* <Login /> */}
      {/* <Registration /> */}
      <Forgot />
    </SafeAreaView>
  );
};

export default App;
