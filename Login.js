import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import estiloLogin from './estiloLogin';

function Login({ navigation }) {
	const [login, setLogin] = useState('');
	const [senha, setSenha] = useState('');

	const entrar = () => {
		if (login == '' || senha == '') {
			Alert.alert(
				'Preenchimento obrigatório',
				'Informe o login e a senha!',
				[
					{ text: 'OK' },
				]

			);
		} else {
			navigation.replace('Inicial', {login: login});
		}
	}
}
