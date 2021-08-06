import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';

const Login = ({ navigation }) => {
	return (
		<View>
			<Text>Login</Text>
			<Button title="press" onPress={() => navigation.navigate('SignUp')} />
		</View>
	);
};

export default Login;
