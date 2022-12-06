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
import {createUser, addUser} from '../db/firebase.js';
import {saveUser} from '../db/localStorage.js';
import Load from './load.js';

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    width: 300,
    height: 45,
    margin: 15,
  },
  button: {
    backgroundColor: '#3332',
    height: 50,
    width: 130,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  load: {
    position: 'absolute',
  },
});

const FormSignIn = props => {
  const {email, password, first, last, signInLoad} = props.variables;
  const {setEmail, setPassword, setFirst, setLast, handleSignIn} =
    props.functions;

  return (
    <View style={style.container}>
      <TextInput
        editable={!signInLoad}
        style={style.input}
        autoComplete="name"
        placeholder="first name"
        onChange={e => setFirst(e.nativeEvent.text)}
      />
      <TextInput
        editable={!signInLoad}
        style={style.input}
        placeholder="last name"
        onChange={e => setLast(e.nativeEvent.text)}
      />
      <TextInput
        editable={!signInLoad}
        style={style.input}
        keyboardType="email-address"
        autocomplete="email"
        placeholder="email"
        onChange={e => setEmail(e.nativeEvent.text)}
      />
      <TextInput
        editable={!signInLoad}
        style={style.input}
        autoComplete="password"
        placeholder="password"
        onChange={e => setPassword(e.nativeEvent.text)}
      />
      <TouchableOpacity
        disabled={signInLoad}
        style={style.button}
        onPress={() => handleSignIn()}>
        <Text
          style={
            signInLoad ? {display: 'none'} : {fontSize: 18, fontWeight: 'bold'}
          }>
          Registrarse
        </Text>
        <View style={signInLoad ? style.load : {display: 'none'}}>
          <Load scale="3.5" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FormSignIn;
