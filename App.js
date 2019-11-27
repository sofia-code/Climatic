import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './screens/Home'
import Details from './screens/Details'
import SingleCity from './components/SingleCity';


const RootStack = createStackNavigator(
    {
        Home: Home,
        Details: Details,
        SingleCity: SingleCity,
    },
    {
        headerMode: 'none',
    }
);


export default createAppContainer(RootStack);