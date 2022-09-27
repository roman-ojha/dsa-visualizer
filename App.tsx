import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Routes from './src/routes/Index';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return <Routes />;
};

export default App;
