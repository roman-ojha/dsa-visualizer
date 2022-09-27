import React, {useEffect} from 'react';
// import {SafeAreaView, StyleSheet, useColorScheme} from 'react-native';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

// import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  // return <SafeAreaView style={backgroundStyle}></SafeAreaView>;

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <SafeAreaView>
      <Text style={styles.text}>Hello</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
});

export default App;
