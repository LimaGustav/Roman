import React, { Compon, Component } from 'react';
import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import api from '../services/api'

import AsyncStorage from '@react-native-async-storage/async-storage';


export default class ListaProjeto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaProjetos: [],
        };
    }



    buscarProjetos = async () => {
        const token = await AsyncStorage.getItem('userToken');

        if (token != null) {
            const resposta = await api.get('/projetos', {
                headers: {
                    Authorization: 'Bearer ' + token,

                }
            })


            const dadosDaApi = resposta.data;
            this.setState({ listaProjetos: dadosDaApi });
        }

    };


    componentDidMount() {
        this.buscarProjetos();
    };


    render() {
        return (

            <ImageBackground
                source={require('../../assets/images/fundoLista.png')}
                style={StyleSheet.absoluteFillObject}
            >


                <View style={styles.container}>
                    <Image
                        source={require('../../assets/images/logoLoginPuro.png')}
                        style={styles.logoProjeto}
                    />


                    <View style={styles.containerFlatList}>
                        <FlatList
                            contentContainerStyle={styles.mainBodyContent}
                            data={this.state.listaProjetos}
                            keyExtractor={item => item.idProjeto}
                            renderItem={this.renderItem}
                        />
                    </View>


                    {/* <View style={styles.card}>
                        <View style={styles.tituloCardWrapper}>
                            <Text style={styles.tituloCard}>Machine Learning</Text>
                        </View>
                        <View style={styles.textoCardWrapper}>
                            <Text style={styles.textoCard}>
                                <Text style={styles.tituloTexto}>
                                    Machine Learning com Python -
                                </Text>
                                Na aula será desmonstrado métodos para fazer Machine Learning com Python
                            </Text>
                        </View>

                    </View> */}
                </View>

            </ImageBackground>


        )
    }

    renderItem = ({ item }) => (
        <View style={styles.teste}>
            <View style={styles.card}>
                <View style={styles.tituloCardWrapper}>
                    <Text style={styles.tituloCard}>{item.idTemaNavigation.titulo}</Text>
                </View>
                <View style={styles.textoCardWrapper}>
                    <Text style={styles.textoCard}>
                        <Text style={styles.tituloTexto}>
                            {item.titulo} -
                        </Text>
                        {item.descricao}
                    </Text>
                </View>
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },

    logoProjeto: {
        width: 110,
        height: 110,
    },

    containerFlatList: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    teste:{
        alignItems: 'center'
    },

    mainBodyContent: {
        flex: 1,
        justifyContent: 'space-around',
    },

    card: {
        // alignItems: 'center',
        width: '85%'
    },

    tituloCard: {
        color: 'black',
        fontSize: 20,
        fontWeight: '600'
    },

    tituloCardWrapper: {
        backgroundColor: '#9081A6',
        height: 33,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textoCardWrapper: {
        backgroundColor: '#fff',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        padding: 20,
    },


    tituloTexto: {
        fontWeight: '800',
    }

})