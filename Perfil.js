import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloPerfil from './estiloPerfil';

function Perfil({ navigation }){

	const voltar = () => {
		navigation.goBack();
	}

	return (
		<View style={estiloPerfil.container}>
			<View style={estiloPerfil.borda}>
				<TouchableOpacity style={estiloPerfil.botaoContainer} onPress={voltar}>
					<Text style={estiloPerfil.texto}>Perfil</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}

export default Perfil;
