import React from 'react';
import {StyleSheet, View, SafeAreaView, Dimensions, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import constStyles from '../constants/styles';
import Button from '../components/Home/Button';
import appIcon from '../assets/images/appIcon.png';

const screenHeight = Dimensions.get('screen').height;

const Home = (): JSX.Element => {
  return (
    <SafeAreaView>
      <LinearGradient
        colors={[
          constStyles.colors.primary[600],
          constStyles.colors.primary[800],
        ]}
        style={styles.container}>
        <Image source={appIcon} style={styles.appIcon} />
        <View style={styles.buttonContainer}>
          <Button
            title="Sorting Visualizer"
            icon="wave"
            from="customIcons"
            size={30}
          />
          <Button
            title="Path finder"
            icon="graph"
            from="customIcons"
            size={30}
          />
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
        </View>
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
