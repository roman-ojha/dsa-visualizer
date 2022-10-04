import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {GestureDetector} from 'react-native-gesture-handler';
import Animated, {useAnimatedStyle, withSpring} from 'react-native-reanimated';
import {screenConst} from '../constants';

interface MenuProps {
  isVisible: boolean;
  size: number;
  children: JSX.Element[] | JSX.Element;
}

const Menu: React.FC<MenuProps> = ({
  isVisible,
  size,
  children,
}): JSX.Element => {
  const [state, setState] = useState({
    isVisible: true,
    menuSize: 0,
  });
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(state.menuSize),
    };
  });
  const animatedView = useRef<Animated.View>(null);

  const hideMenu = () => {};

  //   const changeMenuWidth = setTimeout(() => {
  //     setState({
  //       ...state,
  //       menuSize: size,
  //     });
  //   }, 10);
  console.log('hello');
  useEffect(() => {
    console.log(animatedView);
    return () => {
      //   clearTimeout(changeMenuWidth);
    };
  }, [animatedView]);
  return state.isVisible ? (
    <>
      <GestureDetector>
        <TouchableOpacity style={styles.container} onPress={hideMenu}>
          <Animated.View
            style={[styles.animatedContainer, animatedStyle]}
            ref={animatedView}>
            {children}
          </Animated.View>
        </TouchableOpacity>
      </GestureDetector>
    </>
  ) : (
    <></>
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
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
});

export default Menu;
