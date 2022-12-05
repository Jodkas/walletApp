import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Load from '../components/load';
import FormLogin from '../components/formLogin';
import CheckBox from '@react-native-community/checkbox';
import {getUser} from '../db/localStorage';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  signin: {
    alignItems: 'center',
  },
  header: {
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 30,
    color: 'black',
    fontWeight: 'bold',
  },
});

const Login = ({navigation}) => {
  const [check, setCheck] = useState(false);
  const [pageLoad, setPageLoad] = useState(false);

  const handleSignin = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={style.container}>
      <Text style={style.header}>WalletApp</Text>
      <FormLogin
        navigation={navigation}
        pageLoad={pageLoad}
        setPageLoad={setPageLoad}
      />
      <TouchableOpacity
        disabled={pageLoad}
        style={pageLoad ? [style.signin, {opacity: 0.5}] : style.signin}
        onPress={handleSignin}>
        <Text>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
