import React, {useState} from 'react';
import {View, TextInput, Button, Text, StyleSheet, Alert} from 'react-native';

const Login = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const submit = () => {
    if (!userName || !password) {
      Alert.alert('Please enter username and password');
    } else {
      Alert.alert(`Thank you ${userName}!!`);
      setUserName('');
      setPassword('');
      navigation.navigate('Home');
    }
  };
  return (
    <View style={styles.login}>
      <Text>UserName: </Text>
      <TextInput
        placeholder="Enter username/email"
        value={userName}
        onChangeText={name => setUserName(name)}
        autoCapitalize={'words'}
        selectTextOnFocus={true}
      />
      <Text>Password: </Text>
      <TextInput
        placeholder="Enter password"
        value={password}
        onChangeText={pwd => setPassword(pwd)}
      />
      <Button onPress={submit} title="Login" />
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    alignItems: 'center',
    flex: 2,
    paddingTop: 20,
  },
});
export default Login;
