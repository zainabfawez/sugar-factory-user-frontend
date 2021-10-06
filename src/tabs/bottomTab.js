import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'; 
import Icon from '@expo/vector-icons/AntDesign';
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Header } from '@react-navigation/elements';
import home from '../screens/home'
import search from '../screens/search';
import notifications from '../screens/notifications';
import messages from '../screens/messages';
import editProfile from '../screens/editProfile';



export default function BottomTab( { navigation }){

	

	const Tab = createMaterialBottomTabNavigator();

	

	return (
		<Tab.Navigator>
			
			<Tab.Screen
				name="Home"
				component={home}
				options={{
					tabBarLabel: 'home',
					tabBarIcon: () => (
						<FontAwesome name="home" size={24} color="black" />
					),
				}}
			/>

			<Tab.Screen
				name="search"
				component={search}
				options={{
					
					tabBarLabel: 'search',
					tabBarIcon: () => (
						<Icon name="search1" size={24} color="black" />
					),
				}}
			/>

			<Tab.Screen
				name="messages"
				component={messages}
				options={{
					tabBarLabel: 'Messages',
					tabBarIcon: () => (
						<AntDesign name="message1" size={24} color="black" />
					),
				}}
			/>

			<Tab.Screen
				name="notifications"
				component={notifications}
				options={{
					tabBarLabel: 'Notifications',
					tabBarIcon: () => (
						<Ionicons name="notifications" size={24} color="black" />
					),
				}}
			/>

			<Tab.Screen
				name="editProfile"
				component={editProfile}
				options={{
					tabBarLabel: 'editProfile',
					tabBarIcon: () => (
						<AntDesign name="profile" size={24} color="black" />
					),
				}}
			/>
		</Tab.Navigator>
	);

}