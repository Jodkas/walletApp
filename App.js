import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './screens/login';
import Profile from './screens/profile';
import SignIn from './screens/signin';
import {login} from './db/firebase';
import {saveUser} from './db/localStorage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          <Stack.Screen
            name="Login"
            component={Login}
            options={{title: 'Inicio de sesion'}}
          />
        }
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: 'Perfil'}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          option={{title: 'Registrarse'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
