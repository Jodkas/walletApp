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

const FormSignIn = props => {
  const [email, setemail] = useState(null);
  const [password, setPassword] = useState(null);
  const [first, setFirst] = useState(null);
  const [last, setLast] = useState(null);

  const handleSubmit = async () => {
    try {
      if (email == null || password == null || first == null || last == null) {
        throw 'campos incompletos';
      } else {
        await createUser(email, password);
        await addUser(first, last, email);
        await saveUser(email, password);
        props.navigation.navigate('Login');
      }
    } catch (err) {
      Alert.alert(err);
    }
  };
  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        autoComplete="name"
        placeholder="first name"
        onChange={e => setFirst(e.nativeEvent.text)}
      />
      <TextInput
        style={style.input}
        placeholder="last name"
        onChange={e => setLast(e.nativeEvent.text)}
      />
      <TextInput
        style={style.input}
        keyboardType="email-address"
        autocomplete="email"
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
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormSignIn;
