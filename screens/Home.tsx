import React from 'react';
import {StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import constStyles from '../constants/styles';
import Button from '../components/Home/Button';

const screenHeight = Dimensions.get('screen').height;

const Home = (): JSX.Element => {
  return (
    <SafeAreaView>
      <LinearGradient
        colors={[constStyles.primary[600], constStyles.primary[800]]}
        style={styles.container}>
        <Button
          title="Sorting Visualizer"
          icon="wave"
          from="customIcons"
          size={30}
        />
        <Button title="Path finder" icon="graph" from="customIcons" size={30} />
        <Button
          title="Stack Visualizer"
          icon="stack"
          from="customIcons"
          size={30}
        />
        <Button
          title="Queue Visualizer"
          icon="people-queue"
          from="customIcons"
          size={30}
        />
        <Button
          title="Linked List Visualizer"
          icon="project-diagram"
          from="fontAwesome"
          size={30}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
