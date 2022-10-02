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
import Title from '../components/SortingVisualizer/Title';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../redux';
import {useDispatch} from 'react-redux';

const SortingVisualizer = (): JSX.Element => {
  const dispatch = useDispatch();
  const {generateRandomSortingArray, sortArray} = bindActionCreators(
    actionCreators,
    dispatch,
  );

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
            <TouchableOpacity
              style={styles.generateRandomArrayButton}
              onPress={generateRandomSortingArray}>
              <Text style={styles.generateRandomArrayText}>
                Generate Random Array
              </Text>
            </TouchableOpacity>
            <Title />
            <TouchableOpacity style={styles.sortButton} onPress={sortArray}>
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
