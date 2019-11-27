import React, { useState, useEffect } from 'react'
import { Image, Text, View, ScrollView, TouchableHighlight } from 'react-native'
import { withNavigation } from "react-navigation"

import Cities from '../components/Cities';
import SingleCity from '../components/SingleCity';

const Details = (props) => {
    const { navigate } = props.navigation

    return (
        <ScrollView paddingTop={30} paddingBottom={50} style={{backgroundColor: '#3CAADF', flex:1}}>
            <TouchableHighlight onPress={() => navigate('SingleCity', {cod: 44418})}>
                <Cities cod={44418}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigate('SingleCity', {cod: 468739})}>
                <Cities cod={468739}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigate('SingleCity', {cod: 2379574})}>
                <Cities cod={2379574}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigate('SingleCity', {cod: 455827})}>
                <Cities cod={455827}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigate('SingleCity', {cod: 725746})}>
                <Cities cod={725746}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigate('SingleCity', {cod: 1118370})}>
                <Cities cod={1118370}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigate('SingleCity', {cod: 2442047})}>
                <Cities cod={2442047}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigate('SingleCity', {cod: 2471217})}>
                <Cities cod={2471217}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigate('SingleCity', {cod: 615702})}>
                <Cities cod={615702}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigate('SingleCity', {cod: 2424766})}>
                <Cities cod={2424766}/>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigate('SingleCity', {cod: 116545})}>
                <Cities cod={116545}/>
            </TouchableHighlight>
            
        </ScrollView>
    )
}


export default withNavigation(Details)
