import React, {useEffect, useRef} from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';

const style = StyleSheet.create({
  container: {
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 2,
    borderBottomWidth: 5,
    borderRadius: 50,
    borderColor: '#812',
  },
});

const Load = props => {
  const degrees = useRef(new Animated.Value(0)).current;
  const spin = degrees.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  useEffect(() => {
    Animated.loop(
      Animated.timing(degrees, {
        toValue: 2,
        easing: Easing.linear,
        duration: 1000,
        useNativeDriver: true,
      }),
    ).start();
  }, []);

  return (
    <Animated.View
      style={[
        style.container,
        {
          height: props.scale * 10,
          width: props.scale * 10,
          transform: [{rotate: spin}],
        },
      ]}></Animated.View>
  );
};

export default Load;
