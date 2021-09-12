import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicial from './src/views/Inicial/Inicial';
import Colecao from './src/views/Colecao/Colecao';
import Item from './src/views/Item/Item';
import Perfil from './src/views/Perfil/Perfil';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				tabBarOptions{
					{
						labelStyle: { fontSize: 24 },
						style: { backgroundColorr: '#14417b' },
						activeTintColor: '#FFFFFF'
					}
				}
			>
				<Tab.Screen name="Inicial" component={Inicial} />
				<Tab.Screen name="Perfil" component={Perfil} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
