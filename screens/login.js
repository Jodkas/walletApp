import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import FormLogin from '../components/formLogin';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  signin: {
    alignItems: 'center',
  },
});

const Login = ({navigation}) => {
  const handleSignin = () => {
    navigation.navigate('SignIn');
  };
  return (
    <View style={style.container}>
      <FormLogin navigation={navigation} />
      <TouchableOpacity style={style.signin} onPress={handleSignin}>
        <Text>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
