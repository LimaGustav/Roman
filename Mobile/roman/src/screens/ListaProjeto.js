import React, { Compon, Component } from 'react';
import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import api from './services/api'

import { TouchableOpacity } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';

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
        this.buscarEventos();
    };




    render() {
        return (
            <View style={styles.main}>
                {/*header*/}
                
                <View style={styles.mainHeader}>
                    <Image
                        source={require("../../assets/img/logo.png" )}  
                        style={styles.mainHeaderImg}
                    />
                </View>
                <Text>Projetos</Text>
            </View>
        )
    }
};

// const styles = StyleSheet.create{
   
// }