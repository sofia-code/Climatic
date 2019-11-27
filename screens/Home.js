import React, { useState, useEffect } from 'react'
import { Image, Text, View, ScrollView } from 'react-native'
import { withNavigation } from 'react-navigation';
import SingleCity from '../components/SingleCity'

const Home = (props) => {
    const { navigate } = props.navigation

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        try {
            const response = await fetch(`https://www.metaweather.com/api/location/468739/`);
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
        <ScrollView style={{backgroundColor: '#3CAADF', flex:1}}>
            <SingleCity cod={468739}/>
        </ScrollView>
    )
}

export default withNavigation(Home)
