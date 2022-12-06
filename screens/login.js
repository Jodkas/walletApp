import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Alert,
} from 'react-native';
import FormLogin from '../components/formLogin';
import CheckBox from '@react-native-community/checkbox';
import {getUser, saveUser} from '../db/localStorage';
import {login, signOutUser} from '../db/firebase.js';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  signin: {
    alignItems: 'center',
    alignSelf: 'center',
  },
  header: {
    fontSize: 50,
    textAlign: 'center',
    marginBottom: 30,
    color: 'black',
    fontWeight: 'bold',
  },
});

const Login = ({navigation, route}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginLoad, setloginLoad] = useState(false);

  const handleLogIn = (email, password) => {
    setloginLoad(true);
    login(email, password)
      .then(res => {
        saveUser(email, password);
        navigation.navigate('Profile');
        setloginLoad(false);
        console.log('inicio de sesion correcto');
      })
      .catch(err => {
        Alert.alert(err);
        setloginLoad(false);
      });
  };

  useEffect(() => {
    getUser('@user')
      .then(user => {
        setEmail(user.email);
        setPassword(user.password);
        handleLogIn(user.email, user.password);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <View style={style.container}>
      <Text style={style.header}>WalletApp</Text>
      <FormLogin
        navigation={navigation}
        functions={{setPassword, setEmail, handleLogIn}}
        variables={{email, password, loginLoad}}
      />
      <TouchableOpacity
        disabled={loginLoad}
        style={loginLoad ? [style.signin, {opacity: 0.5}] : style.signin}>
        <Text onPress={() => navigation.navigate('SignIn')}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
