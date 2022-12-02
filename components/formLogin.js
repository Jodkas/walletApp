import React from 'react';
import {View, Text, TextInput, StyleSheet, Button, Alert} from 'react-native';

const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    margin: 20,
  },
  button: {
    width: 200,
    margin: 10,
  },
});

const FormLogin = () => {
  return (
    <>
      <TextInput style={style.input} placeholder="mail" />
      <TextInput style={style.input} placeholder="password" />
      <Button
        style={style.button}
        title="Login"
        onPress={() => Alert.alert('Ingreso de sesion correcto')}
      />
    </>
  );
};

export default FormLogin;
