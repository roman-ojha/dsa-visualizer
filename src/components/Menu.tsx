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
import CustomIcons from './CustomIcons/CustomIcons';

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
            style={styles.editContainer}
            onPress={() => {
              menuChangeVisibility(false);
            }}>
            {/* <Text style={styles.editText}>Close Edit</Text> */}
            <CustomIcons
              name="arrow-circle"
              color="black"
              size={25}
              style={styles.editIcon}
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
    backgroundColor: 'white',
    height: screenConst.screenWidth,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    display: 'flex',
    flexDirection: 'row',
  },
  childrenContainer: {},
  editContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
  },
  editIcon: {
    color: 'black',
    transform: [{rotate: '-90deg'}],
  },
});

export default Menu;
