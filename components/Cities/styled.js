import React from 'react'
import styled from 'styled-components'


const Container = styled.View`
    background-color: #3CAADF;
`

const ContCities = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #3CAADF;
    border-bottom-width: 2px;
    border-bottom-color: #fff;
    height: 100px;
`

const Text = styled.Text`
    font-size: 32px;
    color: #fff;
    font-weight: 500;
    text-align: left;
`
const Grados = styled.Text`
    font-size: 36px;
    color: #fff;
    font-weight: 500;
    text-align: center;
`



export { Container, Text, ContCities, Grados}