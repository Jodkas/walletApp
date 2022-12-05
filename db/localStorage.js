import AsyncStorage from '@react-native-async-storage/async-storage';

const saveUser = (email, password) => {
  return new Promise(async (res, rej) => {
    try {
      const user = {email, password};
      const jsonUser = JSON.stringify(user);
      await AsyncStorage.setItem('@user', jsonUser);
      res('Exito');
    } catch (err) {
      rej(err);
    }
  });
};

const getUser = () => {
  return new Promise(async (res, rej) => {
    try {
      const jsonUser = await AsyncStorage.getItem('@user');
      jsonUser != null ? res(JSON.parse(jsonUser)) : rej('Sin usuario');
    } catch (err) {
      rej(err);
    }
  });
};

export {saveUser, getUser};
