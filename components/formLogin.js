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
  const {email, password, loginLoad} = props.variables;
  const {setPassword, setEmail, handleLogIn} = props.functions;

  return (
    <View style={style.container}>
      <TextInput
        editable={!loginLoad}
        style={style.input}
        autoComplete="email"
        keyboardType="email-address"
        placeholder="email"
        value={email}
        onChange={e => setEmail(e.nativeEvent.text)}
      />
      <TextInput
        editable={!loginLoad}
        style={style.input}
        autoComplete="password"
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.nativeEvent.text)}
      />
      <TouchableOpacity
        disable={loginLoad}
        style={style.button}
        onPress={() => handleLogIn(email, password)}>
        <Text
          style={
            loginLoad ? {display: 'none'} : {fontSize: 18, fontWeight: 'bold'}
          }>
          Iniciar sesion
        </Text>
        <View style={loginLoad ? style.load : {display: 'none'}}>
          <Load scale="3.5" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FormLogin;
