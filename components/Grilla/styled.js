import React from 'react'
import styled from 'styled-components'

const PuestaSol = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #3CAADF;
    padding: 5px 0;
`
const Container = styled.View`
    display: flex;
    background-color: #3CAADF;
    padding-bottom: 20px;
`
const Titulo = styled.Text`
    font-size: 48px;
    color: #fff;
    font-weight: 400;
    text-align: center;
    margin: 30px 0;
`
const Grados = styled.Text`
    font-size: 56px;
    color: #fff;
    margin: 30px 0 40px;
    font-weight: 600;
    text-align: center;
`
const ImageClima = styled.Image`
    width: 100px;
    height: 100px;
    margin: 0 auto;
`
const TextSunRise = styled.Text`
    font-size: 16px;
    color: #fff;
    font-weight: 500;
`
const SunRiseHour = styled.Text`
    font-size: 21px;
    color: #fff;
    margin-bottom: 8px;
    font-weight: 500;
    text-align: left;
`
const TextSunSet = styled.Text`
    font-size: 16px;
    color: #fff;
    font-weight: 500;
    text-align: left;
`
const SunSetHour = styled.Text`
    font-size: 21px;
    color: #fff;
    margin-bottom: 8px;
    font-weight: 500;
    text-align: left;
`
const ContainerDiasSiguientes = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #3CAADF;
    padding: 10px 0;
    border-bottom-width: 1px;
    border-color: #fff;
`
const ContainerDiasSigTemp = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    background-color: #3CAADF;
    padding-top: 6px;
    padding-bottom: 6px;
`
const ImageDiasSiguientes = styled.Image`
    width: 25px;
    height: 25px;
`
const DiasSiguientes = styled.Text`
    font-size: 18px;
    color: #fff;
    font-weight: 500;
    text-align: left;
`
const TempSiguientesMax = styled.Text`
    font-size: 18px;
    color: #fff;
    font-weight: 500;
    margin-left: 10px;
    margin-right: 10px;
`
const TempSiguientesMin = styled.Text`
    font-size: 18px;
    color: #6F6F6F;
    font-weight: 500;
    margin-left: 10px;
    margin-right: 10px;
`
const Text = styled.Text`
    font-size: 18px;
    color: #6F6F6F;
    font-weight: 500;
    margin-left: 10px;
    margin-right: 10px;
    text-align: left;
`

export { Container, Titulo, TextSunRise, TextSunSet, PuestaSol, Grados, SunRiseHour, SunSetHour, ImageClima, DiasSiguientes, TempSiguientesMin, TempSiguientesMax, ImageDiasSiguientes, ContainerDiasSiguientes, ContainerDiasSigTemp, Text }