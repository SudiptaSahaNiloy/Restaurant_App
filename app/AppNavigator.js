import React from 'react';
import HomeScreen from './screens/HomeScreen';
import DishDetail from './screens/DishDetail';
import MenuScreen from './screens/MenuScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const MenuStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Menu Detail" component={MenuScreen} />
            <Stack.Screen name="Dish Detail" component={DishDetail} />
        </Stack.Navigator>
    )
}

function AppNavigator() {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Menu" component={MenuStack} />
        </Drawer.Navigator>
    )
}

export default AppNavigator
