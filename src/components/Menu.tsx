import React, {useEffect, useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {screenConst} from '../constants';
import {useSelector, useDispatch} from 'react-redux';
import {actionCreators, AppState} from '../redux';
import {bindActionCreators} from 'redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface MenuProps {
  size: number;
  children: JSX.Element[] | JSX.Element;
}

const Menu: React.FC<MenuProps> = ({children, size}): JSX.Element => {
  const dispatch = useDispatch();
  const [right, setRight] = useState(-size);
  const {isVisible} = useSelector((state: AppState) => state.menuReducer);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      right: withTiming(right, {
        duration: 500,
        easing: Easing.out(Easing.exp),
      }),
    };
  });

  const {menuChangeVisibility} = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    if (isVisible) {
      setRight(0);
    } else {
      setRight(-size);
    }
  }, [isVisible, size]);
  return (
    <>
      <GestureDetector>
        <Animated.View
          style={[styles.animatedContainer, {width: size}, animatedStyle]}>
          <TouchableOpacity
            style={styles.closeMenuContainer}
            onPress={() => {
              menuChangeVisibility(false);
            }}>
            <MaterialIcons
              name="keyboard-arrow-right"
              color="white"
              size={25}
            />
          </TouchableOpacity>
          <View style={styles.childrenContainer}>{children}</View>
        </Animated.View>
      </GestureDetector>
    </>
  );
};

const styles = StyleSheet.create({
  animatedContainer: {
    position: 'absolute',
    zIndex: 100,
    backgroundColor: '#0D0D0D',
    height: screenConst.screenWidth,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    display: 'flex',
    flexDirection: 'row',
  },
  childrenContainer: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  closeMenuContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
});

export default Menu;
