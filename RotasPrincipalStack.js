import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Inicial from '../../views/Inicial/Inicial';
import Colecao from '../../views/Colecao/Colecao';
import Item from '../../views/Item/Item';
import estiloRotasStack from './estiloRotasStack';

const Stack = createStackNavigator();

const RotasPrincipalStack = () => {
	return (
		<Stack.Navigator initialRouteName="Inicial" >
			<Stack.Screen
				name="Inicial" component={Inicial}
				options={ { cardStyle: estiloRotasStack.screenInicial,
							headerShown: false} } />

				<Stack.Screen
				name="Colecao" component={Colecao}
				options={ { cardStyle: estiloRotasStack.screenColecao,
							headerShown: false} } />

				<Stack.Screen
				name="Item" component={Item}
				options={ { cardStyle: estiloRotasStack.screenItem,
							headerShown: false} } />
	);
}
export default RotasPrincipalStack;
