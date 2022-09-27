import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Home from './src/views/Home';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return <Home />;
};

export default App;
