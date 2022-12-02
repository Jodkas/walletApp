import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import FormLogin from '../components/formLogin';

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 200,
    margin: 50,
  },
});

const Login = () => {
  return (
    <View style={style.container}>
      <View>
        <FormLogin />
      </View>
    </View>
  );
};

export default Login;
