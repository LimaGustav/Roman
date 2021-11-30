import React, { Compon, Component } from 'react';
import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native';

import api from './services/api'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Projetos from './ListaProjeto'

const bottomTab = createBottomTabNavigator();


export default class Main extends Component {
  render() {
    return (
      <View>
        <StatusBar
          hidden={false} />

        <bottomTab.Navigator
          initialRouteName='Projetos'

          screenOptions={({ route }) => ({
            tabBarIcon: () => {
              if (route.name === 'Projetos') {
                return (
                  <Image
                    source={require('../../assets/images/projetoLogo.png')}
                    // style={styles.tabBarIcon}
                  />
                )
              }
              if (route.name === 'Cadastrar') {
                return (
                  <Image
                    source={require('../../assets/images/novoPLogo.png')}
                    // style={styles.tabBarIcon}
                  />
                )
              }
              // if (route.name === 'Perfil') {
              //   return (
              //     <Image
              //       source={require('../../assets/img/profile.png')}
              //       style={styles.tabBarIcon}
              //     />
              //   )
              // }
            },

            headerShadow: false,
            tabBarShowLabel: false,
            tabBarActiveBackgroundColor: '#B727FF',
            tabBarInactiveBackgroundColor: '#DD99FF',
            tabBarStyle: { height: 50 }
          }
          )}
          
          />

          <bottomTab.Screen name='Projetos' component={Projetos}/>
      </View>
    )
  }
}

