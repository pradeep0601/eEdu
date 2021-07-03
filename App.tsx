import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Text, View, StyleSheet, Button, Alert, Image} from 'react-native';
import Counter from './components/Counter';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

const {Navigator, Screen} = createStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="eEdu" />
      <NavigationContainer>
        <Navigator>
          <Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Screen name="Home" component={Home} />
        </Navigator>
      </NavigationContainer>
      {/* <View style={styles.container}>
        <Header title="eEdu" /> */}
      {/* <Counter />
      <Button
        onPress={() => {
          alert('You tapped the button!');
        }}
        color="#841584"
        title="Press me!!"
      />
      <Image
        source={{uri: 'https://reactjs.org/logo-og.png'}}
        style={{width: 200, height: 100, flexDirection: 'column-reverse'}}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
