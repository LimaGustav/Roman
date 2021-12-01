import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

import Login from './src/screens/Login'
import Main from './src/screens/Main'
import Projetos from './src/screens/ListaProjeto'
import Cadastro from './src/screens/Cadastro';

export default function Stack() {
  return (
    <NavigationContainer>
      <StatusBar
        hidden={true}
      />

      <AuthStack.Navigator
       initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Main" component={Main} />
        <AuthStack.Screen name="Projetos" component={Projetos} />
        <AuthStack.Screen name="Cadastro" component={Cadastro} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
