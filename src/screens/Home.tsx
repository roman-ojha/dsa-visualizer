import React from 'react';
import {StyleSheet, View, SafeAreaView, Image, StatusBar} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import constants from '../constants';
import {HomeStackParamList} from '../routes/HomeStack';
import {mixins} from '../styles';
import Buttons from '../components/Home/VisualizerNavigator';

interface HomeProps {
  navigation: StackNavigationProp<HomeStackParamList, 'home'>;
}

const Home: React.FC<HomeProps> = ({navigation}): JSX.Element => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor="black" />
      <LinearGradient
        colors={[
          constants.styles.colors.secondary1[600],
          constants.styles.colors.secondary2[800],
        ]}
        style={styles.container}>
        <Image source={constants.app.appIcon} style={styles.appIcon} />
        <View style={styles.buttonContainer}>
          <Buttons navigation={navigation} />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...mixins.takeFullPage,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    display: 'flex',
  },
  appIcon: {
    width: 100,
    height: 100,
    marginBottom: 50,
  },
});

export default Home;
