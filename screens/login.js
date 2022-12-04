import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import FormLogin from '../components/formLogin';



const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

const Login = ({navigation}) => {
  return (
    <View style={style.container}>
      <FormLogin navigation={navigation} />
    </View>
  );
};

export default Login;
