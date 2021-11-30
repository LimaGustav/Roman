import React, { Compon, Component } from 'react';
import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import api from './services/api'


export default class ListaProjeto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaProjetos: [],
        };
    }


    buscarProjetos = async () => {
        const resposta = await api.get('/projetos', {
            headers: {
                Authorization: 'Bearer ' + token,

            }
        })
        const dadosDaApi = resposta.data;
        this.setState({ listaEventos: dadosDaApi });
    };


    componentDidMount() {
        this.buscarProjetos();
    };


    render() {
        return (

            <View style={StyleSheet.main}>
                <View>
    
                </View>
                <ImageBackground
                    source={require('../../assets/images/fundoLista.png')}
                    style={StyleSheet.absoluteFillObject}
                >
                </ImageBackground>
            </View>

        )
    }
};
