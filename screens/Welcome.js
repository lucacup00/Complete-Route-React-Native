import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const Welcome = ({ navigation }) => {
	return (
		<View>
			<Text>Welcome</Text>
			<Button title="press" onPress={() => navigation.navigate('Login')} />
		</View>
	);
};

export default Welcome;
