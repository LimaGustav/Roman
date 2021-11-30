import api from '../services/api'
import React, { useState, useEffect } from 'react';
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

export default function Cadastro() {
    const [tituloProjeto, setTituloProjeto] = useState('')
    const [idTema, setIdTema] = useState('')
    const [descricao, setDescricao] = useState('')

    realizarCadastro = async () => {
        try {

            const token = await AsyncStorage.getItem('userToken');

            const data = {
                idTema: idTema,
                titulo: tituloProjeto,
                descricao: descricao
            }

            const resposta = await api.post('/cadastro', data,
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                },
            );
            if (resposta.status == 201) {
                console.warn('Cadastro realizado com sucesso.');
            } else {
                console.warn('Falha ao realizar o cadastro.')
            }
                }
        catch (error) {
                console.warn(error);
            }
        };

        // return (

        // )
}
