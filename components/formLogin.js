import React, {useEffect} from 'react';
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
  const handleSubmit = () => {
    props.navigation.navigate('Profile');
  };
  return (
    <View style={style.container}>
      <TextInput style={style.input} placeholder="mail" />
      <TextInput style={style.input} placeholder="password" />
      <TouchableOpacity style={style.button} onPress={handleSubmit}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Iniciar sesion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FormLogin;
