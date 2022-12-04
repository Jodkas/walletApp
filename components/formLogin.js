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
import {login} from '../db/firebase.js';
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
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    login(email, password)
      .then(res => {
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
        onChange={e => setemail(e.nativeEvent.text)}
      />
      <TextInput
        style={style.input}
        autoComplete="password"
        placeholder="password"
        onChange={e => setPassword(e.nativeEvent.text)}
      />
      <TouchableOpacity style={style.button} onPress={handleSubmit}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Iniciar sesion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormLogin;
