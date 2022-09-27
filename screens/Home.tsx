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
        <Button title="Sorting Visualizer" icon="sort" />
        <Button title="Path finder" icon="sort" />
        <Button title="Stack Visualizer" icon="sort" />
        <Button title="Queue Visualizer" icon="sort" />
        <Button title="Linked List Visualizer" icon="sort" />
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
