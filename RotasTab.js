import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Perfil from '../../views/Perfil/Perfil';
import RotasDrawer from '../rotasDrawer/RotasDrawer';

const Tab = createBottomTabNavigator();

const RotasTab = () => {
	return (
		<Tab.navigator
			tarBarOptions = { { labelStyle: { fontSize: 24 },
								style: {backgroundColor: '#14417b'},
								activeTintColor: '#FFFFFF' } };
		>

			<Tab.Screen name="Inicial" component={RotasDrawer} />
			<Tab.Screen name="Perfil" component={Perfil} />		

		</Tab.Navigator>
	);
}

export default RotasTab;
