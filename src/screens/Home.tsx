import React from 'react';
import {StyleSheet, View, SafeAreaView, Image, StatusBar} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import constants from '../constants';
import Button from '../components/Home/Button';
import {HomeStackParamList} from '../routes/HomeStack';
import {mixins} from '../styles';

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
          <Button
            title="Sorting Visualizer"
            icon="wave"
            from="customIcons"
            size={30}
            navigateToVisualizer={() => {
              navigation.navigate('sortingVisualizer');
            }}
          />
          <Button
            title="Path finder"
            icon="graph"
            from="customIcons"
            size={30}
            navigateToVisualizer={() => {
              navigation.navigate('pathFinder');
            }}
          />
          <Button
            title="Stack Visualizer"
            icon="stack"
            from="customIcons"
            size={30}
            navigateToVisualizer={() => {
              navigation.navigate('stackVisualizer');
            }}
          />
          <Button
            title="Queue Visualizer"
            icon="people-queue"
            from="customIcons"
            size={30}
            navigateToVisualizer={() => {
              navigation.navigate('queueVisualizer');
            }}
          />
          <Button
            title="Linked List Visualizer"
            icon="project-diagram"
            from="fontAwesome"
            size={30}
            navigateToVisualizer={() => {
              navigation.navigate('linkedListVisualizer');
            }}
          />
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
