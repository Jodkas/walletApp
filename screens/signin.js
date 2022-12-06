import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import FormSignIn from '../components/formSignIn';
import {addUser, createUser} from '../db/firebase';
import {saveUser} from '../db/localStorage';
import {signInValidation} from '../db/validations';

const style = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [username, setUsername] = useState('');
  const [signInLoad, setSignInLoad] = useState(false);

  const handleSignIn = async () => {
    setSignInLoad(true);
    signInValidation(username, first, last, email, password)
      .then(() => createUser(email, password))
      .then(() => addUser(username, first, last, email, password))
      .then(() => saveUser)
      .then(() => {
        navigation.navigate('Login');
        setSignInLoad(false);
      })
      .catch(err => {
        Alert.alert(err);
        setSignInLoad(false);
      });
  };

  return (
    <View style={style.container}>
      <FormSignIn
        navigation={navigation}
        variables={{email, password, first, last, username, signInLoad}}
        functions={{
          setEmail,
          setPassword,
          setFirst,
          setLast,
          setUsername,
          handleSignIn,
        }}
      />
    </View>
  );
};

export default SignIn;
