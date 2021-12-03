import api from '../services/api'
import React, { useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    ImageBackground,
    TextInput,
    FlatList,
} from 'react-native';


import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cadastro() {
    const [tituloProjeto, setTituloProjeto] = useState('')
    const [idTema, setIdTema] = useState(0)
    const [listaTema, setListaTema] = useState([])
    const [descricao, setDescricao] = useState('')

    const realizarCadastro = async () => {
        try {

            const token = await AsyncStorage.getItem('userToken');

            const data = {
                idTema: idTema,
                titulo: tituloProjeto,
                descricao: descricao
            }

            // console.warn(idTema)
            // console.warn(tituloProjeto)
            // console.warn(descricao)
            // console.warn(data)

            const resposta = await api.post('/Projetos', data,
                {
                    headers: {
                        Authorization: 'Bearer ' + token
                    },
                },
            );

            // console.warn(resposta)


            if (resposta.status == 201) {
                console.warn('Cadastro realizado com sucesso.');
            } else {
                console.warn('Falha ao realizar o cadastro.')
            }
            setDescricao('');
            setIdTema(0);
            setTituloProjeto('');
        }
        catch (error) {
            console.warn(error);
        }
    };

    const buscarTemas = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');

            const resposta = await api.get('/Tema',
                {
                    headers: {
                        Authorization: 'Bearer ' + token,
                    },
                })
            if (resposta.status === 200) {
                setListaTema(resposta.data)
            }
        } catch (error) {
            console.warn(error)
        }
    }

    useEffect(buscarTemas, [])

    return (

        <ImageBackground
            source={require('../../assets/images/fundoCadastro.png')}
            style={StyleSheet.absoluteFillObject}
        >


            <View style={styles.cadastroContainer}>
                <View style={styles.cadastroWrapper}>

                    <Image
                        source={require('../../assets/images/logoCadastro.png')}
                        style={styles.imgCadastro}
                    />

                    <View style={styles.inputContainerCadastro}>
                        <Picker
                            selectedValue={idTema}
                            onValueChange={(itemValue) => setIdTema(itemValue)}
                            placeholderTextColor='rgba(9, 9, 9, 0.5)'
                            style={styles.select}


                        >
                            <Picker.Item label="Selecione um Tema" value={null} />
                            {
                                listaTema.map(item => {
                                    return (
                                        <Picker.Item key={item.idTema} label={item.titulo} value={item.idTema} />
                                    )
                                })
                            }
                        </Picker>

                        <TextInput
                            placeholder="projeto"
                            keyboardType="default"
                            onChangeText={(campo) => setTituloProjeto(campo)}
                            value={tituloProjeto}
                            placeholderTextColor='rgba(9, 9, 9, 0.5)'
                            style={styles.inputCadastro}
                        ></TextInput>


                        <TextInput
                            placeholder="descrição"
                            keyboardType="default"
                            onChangeText={(campo) => setDescricao(campo)}
                            value={descricao}
                            placeholderTextColor='rgba(9, 9, 9, 0.5)'
                            style={styles.inputCadastro}
                        ></TextInput>

                        <TouchableOpacity
                            style={styles.btnCadastro}
                            onPress={realizarCadastro}
                        >
                            <Text style={styles.btnCadastroText}>
                                Cadastrar
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </ImageBackground>

    )
}

const styles = StyleSheet.create({
    cadastroContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center'
    },

    cadastroWrapper: {
        width: '100%',
        height: 450,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 170
    },

    imgCadastro: {
        height: 197,
        width: 388,
        marginRight: 35,
        marginTop: 50
    },

    inputContainerCadastro: {
        height: 160,
        justifyContent: 'space-between'
    },



    select: {
        width: 229,
        height: 10,
        marginBottom: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: 5,
        padding: 10
    },

    inputCadastro: {
        width: 229,
        height: 42,
        marginBottom: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.85)',
        borderRadius: 5,
        padding: 10
    },

    btnCadastro: {
        width: 229,
        height: 42,

        backgroundColor: '#B7905F',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',


        marginTop: 10
    },

    btnCadastroText: {
        color: '#fff',
        textTransform: 'uppercase'
    }
})
