import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import FormSignIn from '../components/formSignIn';
import {addUser, createUser} from '../db/firebase';
import {saveUser} from '../db/localStorage';

const style = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [signInLoad, setSignInLoad] = useState(false);

  const handleSignIn = async () => {
    setSignInLoad(true);
    if ((email, password, first, last == '')) {
      throw 'campos incompletos';
    } else {
      createUser(email, password)
        .then(() => addUser(first, last, email))
        .then(() => saveUser)
        .then(() => {
          navigation.navigate('Login');
          setSignInLoad(false);
        })
        .catch(err => {
          Alert.alert(err);
          setSignInLoad(false);
        });
    }
  };

  return (
    <View style={style.container}>
      <FormSignIn
        navigation={navigation}
        variables={{email, password, first, last, signInLoad}}
        functions={{setEmail, setPassword, setFirst, setLast, handleSignIn}}
      />
    </View>
  );
};

export default SignIn;
