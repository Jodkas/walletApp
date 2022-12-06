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
  inputHeaderContainer: {
    margin: 5,
  },
  inputHeader: {
    textAlign: 'left',
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    width: 300,
    height: 45,
    color: 'black',
  },
  button: {
    backgroundColor: '#a23',
    height: 50,
    width: 130,
    margin: 15,
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

const FormSignIn = props => {
  const {email, password, first, last, signInLoad} = props.variables;
  const {setEmail, setPassword, setFirst, setLast, setUsername, handleSignIn} =
    props.functions;

  return (
    <View style={style.container}>
      <View style={style.inputHeaderContainer}>
        <Text style={style.inputHeader}>Nombre de usuario</Text>
        <TextInput
          editable={!signInLoad}
          style={style.input}
          autoComplete="username"
          placeholder="Ej: Jodkas"
          placeholderTextColor={'#0006'}
          onChange={e => setUsername(e.nativeEvent.text)}
        />
      </View>
      <View style={style.inputHeaderContainer}>
        <Text style={style.inputHeader}>Nombre/s</Text>

        <TextInput
          editable={!signInLoad}
          style={style.input}
          autoComplete="name"
          placeholder="Ej: Lucas"
          placeholderTextColor={'#0006'}
          onChange={e => setFirst(e.nativeEvent.text)}
        />
      </View>
      <View style={style.inputHeaderContainer}>
        <Text style={style.inputHeader}>Apellido/s</Text>
        <TextInput
          editable={!signInLoad}
          style={style.input}
          placeholder="Ej: Cardozo"
          placeholderTextColor={'#0006'}
          onChange={e => setLast(e.nativeEvent.text)}
        />
      </View>

      <View style={style.inputHeaderContainer}>
        <Text style={style.inputHeader}>Email</Text>
        <TextInput
          editable={!signInLoad}
          style={style.input}
          keyboardType="email-address"
          autocomplete="email"
          placeholder="Ej: lucas@gmail.com"
          placeholderTextColor={'#0006'}
          onChange={e => setEmail(e.nativeEvent.text)}
        />
      </View>

      <View style={style.inputHeaderContainer}>
        <Text style={style.inputHeader}>Contraseña</Text>
        <TextInput
          editable={!signInLoad}
          style={style.input}
          autoComplete="password"
          placeholder="Ej: 123456"
          placeholderTextColor={'#0006'}
          onChange={e => setPassword(e.nativeEvent.text)}
        />
      </View>

      <TouchableOpacity
        disabled={signInLoad}
        style={style.button}
        onPress={() => handleSignIn()}>
        <Text style={signInLoad ? {display: 'none'} : style.buttonText}>
          Registrarse
        </Text>
        <View style={signInLoad ? style.load : {display: 'none'}}>
          <Load scale="3.5" color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FormSignIn;
