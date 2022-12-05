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
import Load from './load.js';

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
  load: {
    position: 'absolute',
  },
});

const FormLogin = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const pageLoad = props.pageLoad;
  useEffect(() => {
    /* signOutUser()
      .then(() => getUser('@user'))
      .then(user => {
        setEmail(user.email);
        setPassword(user.password);
        handleSubmit(user.email, user.password);
      })
      .catch(err => console.log(err)); */
  }, []);

  const handleSubmit = (email, password) => {
    props.setPageLoad(true);
    login(email, password)
      .then(res => {
        saveUser(email, password);
        props.navigation.navigate('Profile');
        props.setPageLoad(false);
        console.log('inicio de sesion correcto');
      })
      .catch(err => {
        Alert.alert(err);
        props.setPageLoad(false);
      });
  };

  return (
    <View style={style.container}>
      <TextInput
        editable={!pageLoad}
        style={style.input}
        autoComplete="email"
        keyboardType="email-address"
        placeholder="email"
        value={email}
        onChange={e => setEmail(e.nativeEvent.text)}
      />
      <TextInput
        editable={!pageLoad}
        style={style.input}
        autoComplete="password"
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.nativeEvent.text)}
      />
      <TouchableOpacity
        disable={pageLoad}
        style={style.button}
        onPress={() => handleSubmit(email, password)}>
        <Text
          style={
            pageLoad ? {display: 'none'} : {fontSize: 18, fontWeight: 'bold'}
          }>
          Iniciar sesion
        </Text>
        <View style={pageLoad ? style.load : {display: 'none'}}>
          <Load scale="3.5" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FormLogin;
