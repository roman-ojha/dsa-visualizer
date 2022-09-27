import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/screens/Home';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return <Home />;
};

export default App;
