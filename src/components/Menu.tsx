import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GestureDetector} from 'react-native-gesture-handler';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';
import {screenConst} from '../constants';

const Menu = (): JSX.Element => {
  const [menuWidth, setMenuWidth] = useState(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {};
  });
  useEffect(() => {
    const changeMenuWidth = setTimeout(() => {
      setMenuWidth(200);
    }, 10);
    return () => {
      clearTimeout(changeMenuWidth);
    };
  }, []);
  return (
    <>
      <GestureDetector>
        <View style={styles.container}>
          <Animated.View style={styles.animatedContainer}>
            <Text>Hello</Text>
          </Animated.View>
        </View>
      </GestureDetector>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 100,
    height: screenConst.screenWidth,
    width: screenConst.screenHeight,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  animatedContainer: {
    backgroundColor: 'white',
    height: screenConst.screenWidth,
    width: 100,
  },
});

export default Menu;
