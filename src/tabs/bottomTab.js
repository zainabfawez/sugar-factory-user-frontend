import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from '@expo/vector-icons/AntDesign';
import home from '../screens/home'
import signup from '../screens/signup';


export default function BottomTab(){

	const Tab = createMaterialBottomTabNavigator();

	return (
		<Tab.Navigator>
			
			<Tab.Screen
				name="Home"
				component={home}
				options={{
				tabBarLabel: '',
				tabBarIcon: () => (
					<Icon name="search1" size={24} color="gray" />
				),
				}}
			/>

			<Tab.Screen
				name="signup"
				component={signup}
				options={{
				tabBarLabel: 'signup',
				tabBarIcon: () => (
					<Icon name="message1" size={24} color="gray" />
				),
				}}
			/>

		</Tab.Navigator>
	);

}