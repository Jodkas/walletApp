import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import {login, signOutUser} from '../db/firebase.js';
import {getUser, saveUser} from '../db/localStorage.js';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    width: 300,
    margin: 20,
  },
  button: {
    backgroundColor: '#3332',
    height: 50,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const FormLogin = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    signOutUser()
      .then(() => getUser('@user'))
      .then(user => {
        setEmail(user.email);
        setPassword(user.password);
        handleSubmit(user.email, user.password);
      })
      .catch(err => console.log(err));
  }, []);

  const handleSubmit = (email, password) => {
    login(email, password)
      .then(res => {
        saveUser(email, password);
        props.navigation.navigate('Profile');
        console.log('inicio de sesion correcto');
      })
      .catch(err => Alert.alert(err));
  };
  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        autoComplete="email"
        keyboardType="email-address"
        placeholder="email"
        value={email}
        onChange={e => setEmail(e.nativeEvent.text)}
      />
      <TextInput
        style={style.input}
        autoComplete="password"
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.nativeEvent.text)}
      />
      <TouchableOpacity
        style={style.button}
        onPress={() => handleSubmit(email, password)}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Iniciar sesion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormLogin;
