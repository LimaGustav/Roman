import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api'

export default function Login(){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    realizarLogin = async () => {
        const respota = await api.post('/login', {
            email: email,
            senha: senha
        })

        const token = resposta.data.token;

        await AsyncStorage.setItem('userToken', token);

        if (resposta.status == 200) {
        }
    }

    return(
        <ImageBackground
          source={require('../../assets/images/fundoLogin.png')}
          style={StyleSheet.absoluteFillObject}
        >

            <TextInput
            placeholder="email"
            placeholderTextColor="#FFF"
            keyboardType="email-address"
            onChangeText={(campo) => setEmail(campo)}
            value={email}>

            </TextInput>

            <TextInput
            placeholder="password"
            placeholderTextColor="#FFF"
            keyboardType="default"
            onChangeText={(campo) => setSenha(campo)}
            value={senha}>

            </TextInput>

        </ImageBackground>
    )

}

const styles = StyleSheet.create({
    
})

