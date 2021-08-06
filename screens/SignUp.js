import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const SignUp = ({ navigation }) => {
	return (
		<View>
			<Text>Signup</Text>
			<Button title="press" onPress={() => navigation.navigate('Login')} />
		</View>
	);
};

export default SignUp;
