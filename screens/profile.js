import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    margin: 20,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {},
});

const Profile = ({navigate, route}) => {
  const {username, first, last, email, password} = route.params;
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.headerText}>Bienvenido {username}!</Text>
      </View>
      <Image
        style={style.image}
        source={require('../assets/images/nashe.png')}
      />
    </View>
  );
};

export default Profile;
