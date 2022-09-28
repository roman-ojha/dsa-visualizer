import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import constants, {screenConst} from '../constants';
import {mixins} from '../styles';
import SortingField from '../components/SortingVisualizer/SortingField';
import CustomIcons from '../components/CustomIcons/CustomIcons';
import Orientation from 'react-native-orientation-locker';

const SortingVisualizer = (): JSX.Element => {
  useEffect(() => {
    console.log('sorting');
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
        {/* <View style={styles.header}>
          <Image source={constants.app.appIconRounded} style={styles.appIcon} />
        </View> */}
        <View style={styles.middleContainer}>
          {/* <View style={styles.titleAndRandomArrayButtonContainer}>
            <View />
            <Text style={styles.sortingTitle}>Bubble Sort</Text>
            <TouchableOpacity style={styles.generateRandomArrayButton}>
              <Text style={styles.generateRandomArrayText}>
                Generate Random Array
              </Text>
            </TouchableOpacity>
          </View> */}
          <SortingField />
        </View>
        {/* <TouchableOpacity style={styles.editContainer}>
          <CustomIcons
            name="arrow-circle"
            color="black"
            size={25}
            style={styles.editIcon}
          />
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity> */}
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...mixins.takeFullPage,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: screenConst.screenHeight,
    height: screenConst.screenWidth,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
  },
  header: {
    width: screenConst.screenWidth,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  appIcon: {
    ...mixins.visualizerPageAppIcon,
    marginTop: 10,
    marginRight: 10,
  },
  editContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: {
    color: 'black',
    transform: [{rotate: '180deg'}],
  },
  editText: {
    fontSize: 20,
    color: 'black',
  },
  middleContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
    width: screenConst.screenWidth,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleAndRandomArrayButtonContainer: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'blue',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sortingTitle: {
    transform: [{rotate: '90deg'}],
  },
  generateRandomArrayButton: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
    transform: [{rotate: '90deg'}],
  },
  generateRandomArrayText: {},
});

export default SortingVisualizer;
