import React, {useState, useEffect} from 'react'
import { Container, Text, ContCities, Grados } from './styled'
import { withNavigation } from 'react-navigation';
import { jsxAttribute } from "@babel/types"
import dayjs from "dayjs"
import 'dayjs/locale/es' 


const City = (props) => {
    const {cod} = props
    const { navigate } = props.navigation
    const [data, setData] = useState([]); 
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        try {
            const response = await fetch(`https://www.metaweather.com/api/location/${cod}`);
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            setData(json)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    const { title, consolidated_weather } = data
    console.log(data)


   // const temp = consolidated_weather[0].the_temp

    return (
        <Container>
            {!isLoading && 
            <ContCities>
               
                <Text>{title}</Text>
                <Text>{Math.round(consolidated_weather[0].the_temp)}&#176;</Text>
            </ContCities>
            }
            
        </Container>
    )
}

export default withNavigation(City);