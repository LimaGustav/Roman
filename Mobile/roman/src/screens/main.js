import React, { Compon, Component } from 'react';
import { FlatList, Image, ImageBackground, StatusBar, StyleSheet, Text, View } from 'react-native';

import api from './services/api'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const bottomTab = createBottomTabNavigator();


import Projetos from './ListaProjeto'



export default class Main extends Component {
  render() {
    return (
      <View style={styles.main}>
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
                  style={styles.tabBarIcon}
                  />
                )
              }
              if (route.name === 'Cadastrar') {
                return (
                  <Image
                    source={require('../../assets/images/novoPLogo.png')}
                  style={styles.tabBarIcon}
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

            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveBackgroundColor: '#fff ',
            tabBarInactiveBackgroundColor: '#361264',
            tabBarStyle: { height: 50 }
          }
          )}
        >
          <bottomTab.Screen name='Projetos' component={Projetos} />
        </bottomTab.Navigator>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  // conteúdo da main
  main: {
    flex: 1,
    backgroundColor: '#F1F1F1'
  },
   // estilo dos ícones da tabBar
   tabBarIcon: {
    width: 40,
    height: 40,
    tintColor: '#361264'
  }
});

