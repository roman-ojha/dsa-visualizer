import React from 'react';
import {StyleSheet, View, SafeAreaView, Image} from 'react-native';
import {} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import constants from '../constants';
import Button from '../components/Home/Button';

const Home = ({navigation}): JSX.Element => {
  return (
    <SafeAreaView>
      <LinearGradient
        colors={[
          constants.styles.colors.primary[600],
          constants.styles.colors.primary[800],
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
            navigateToVisualizer={() => {}}
          />
          <Button
            title="Stack Visualizer"
            icon="stack"
            from="customIcons"
            size={30}
            navigateToVisualizer={() => {}}
          />
          <Button
            title="Queue Visualizer"
            icon="people-queue"
            from="customIcons"
            size={30}
            navigateToVisualizer={() => {}}
          />
          <Button
            title="Linked List Visualizer"
            icon="project-diagram"
            from="fontAwesome"
            size={30}
            navigateToVisualizer={() => {}}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: constants.screen.screenHeight,
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
