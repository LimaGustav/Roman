import React, { Compon, Component } from 'react';
import { FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import api from './services/api'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default class Main extends Component {
    render() {
        return (

            <View style={StyleSheet.main}>

                <bottomTab.Navigator
                    initialRouteName='Projetos'

                    screenOptions={ ({ route }) => ({
                        tabBarIcon: () => {
                          if (route.name === 'Novo Projeto') {
                            return(
                              <Image 
                                source={require('../../assets/images/')}
                                style={styles.tabBarIcon}
                              />
                            )
                          }
                          if (route.name === 'Eventos') {
                            return(
                              <Image 
                                source={require('../../assets/img/calendar.png')}
                                style={styles.tabBarIcon}
                              />
                            )
                          }
                          if (route.name === 'Perfil') {
                            return(
                              <Image 
                                source={require('../../assets/img/profile.png')}
                                style={styles.tabBarIcon}
                              />
                            )
                          }
                        },
          
                />

            </View>

        )
    }
}
