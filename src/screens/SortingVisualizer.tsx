import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import constants, {screenConst, stylesConst} from '../constants';
import {mixins} from '../styles';
import SortingField from '../components/SortingVisualizer/SortingField';
import CustomIcons from '../components/CustomIcons/CustomIcons';
import Orientation from 'react-native-orientation-locker';
import VisualizerAppIcon from '../components/VisualizerAppIcon';

const SortingVisualizer = (): JSX.Element => {
  useEffect(() => {
    Orientation.lockToLandscape();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar hidden={true} />
      <LinearGradient
        colors={[
          constants.styles.colors.secondary1[150],
          constants.styles.colors.secondary2[150],
        ]}
        style={styles.container}>
        <View style={styles.header}>
          <VisualizerAppIcon />
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.voidContainer} />
          <SortingField />
          <View style={styles.titleAndRandomArrayButtonContainer}>
            <TouchableOpacity style={styles.generateRandomArrayButton}>
              <Text style={styles.generateRandomArrayText}>
                Generate Random Array
              </Text>
            </TouchableOpacity>
            <Text style={styles.sortingTitle}>Bubble Sort</Text>
            <TouchableOpacity style={styles.sortButton}>
              <Text style={styles.generateRandomArrayText}>Sort</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.editContainer}>
          <CustomIcons
            name="arrow-circle"
            color="black"
            size={25}
            style={styles.editIcon}
          />
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...mixins.takeFullPage,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenConst.screenHeight,
    height: screenConst.screenWidth,
  },
  header: {
    height: screenConst.screenWidth,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  editContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: {
    color: 'black',
    transform: [{rotate: '90deg'}],
  },
  editText: {
    fontSize: 20,
    color: 'black',
    transform: [{rotate: '-90deg'}],
  },
  middleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: screenConst.screenWidth,
  },
  voidContainer: {
    marginBottom: 20,
    height: 50,
  },
  titleAndRandomArrayButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    position: 'relative',
    marginTop: 20,
    height: 50,
  },
  sortingTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: stylesConst.colors.font[80],
  },
  generateRandomArrayButton: {
    position: 'absolute',
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#212121',
    borderRadius: 10,
  },
  sortButton: {
    position: 'absolute',
    right: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#212121',
    borderRadius: 10,
    width: 100,
  },
  generateRandomArrayText: {
    color: stylesConst.colors.font[0],
  },
});

export default SortingVisualizer;
