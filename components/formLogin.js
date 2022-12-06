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
    color: 'black',
  },
  button: {
    backgroundColor: '#a23',
    height: 50,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
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
        placeholderTextColor={'#0006'}
        value={email}
        onChange={e => setEmail(e.nativeEvent.text)}
      />
      <TextInput
        editable={!loginLoad}
        style={style.input}
        autoComplete="password"
        placeholder="password"
        placeholderTextColor={'#0006'}
        value={password}
        onChange={e => setPassword(e.nativeEvent.text)}
      />
      <TouchableOpacity
        disable={loginLoad}
        style={style.button}
        onPress={() => handleLogIn(email, password)}>
        <Text style={loginLoad ? {display: 'none'} : style.buttonText}>
          Iniciar sesion
        </Text>
        <View style={loginLoad ? style.load : {display: 'none'}}>
          <Load scale="3.5" color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FormLogin;
