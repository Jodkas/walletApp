import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import FormSignIn from '../components/formSignIn';

const style = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

const SignIn = ({navigation}) => {
  return (
    <View style={style.container}>
      <FormSignIn navigation={navigation} />
    </View>
  );
};

export default SignIn;
