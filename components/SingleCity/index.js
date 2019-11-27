import React, { useState, useEffect } from 'react'
import { Image, Text, View, ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation';
import Grilla from '../Grilla'


const Home = (props) => {
    const { navigate } = props.navigation
    const {cod} = props
    const { getParam } = props.navigation
    const item = getParam('cod', 'NO-name');
    console.log(item)
    const codFin = item !== 'NO-name' ? item : cod
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        try {
            const response = await fetch(`https://www.metaweather.com/api/location/${codFin}/`);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            setData(json)
            //console.log(json)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <ScrollView>
            {!isLoading && <Grilla data={data}/> }
        </ScrollView>
    )
}

export default withNavigation(Home)
