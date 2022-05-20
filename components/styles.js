import styled from "styled-components";
import { View, Text, Image, TouchableOpacity } from 'react-native'
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    primary: "#ffffff",
    secondary: "#59c1c6",
    tertiary: "#0f3142",
    highlight: "#ffb32c"

};

const { primary, secondary, tertiary, highlight } = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 25px;
    padding-top: ${StatusBarHeight + 10}px;
    background-color: ${primary};
`
export const InnerContainer = styled.View`
    flex:1;
    width: 100%;
    align-items: center;
`

export const PageLogo = styled.Image`
    width: 500px;
    height: 300px;
`

export const PageTitle = styled.Text`
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: ${secondary};
    padding: 10px;
`
export const Subtitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight:bold;
    color: ${tertiary};
`
export const StyledFormArea = styled.View`
    width: 90%;
`

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    border-radius: 5px;
    font-size: 16px;
    height: 60px;
    margin-bottom: 10px;
    color: ${tertiary};
`
export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    text-align: left;
`

export const LeftIcon = styled.View`
    left: 15px;
    top: 30px;
    position: absolute;
    z-index: 1;
`
export const RightIcon = styled.TouchableOpacity`
    left: 15px;
    top: 30px;
    position: absolute;
    z-index: 1;
`

export const StyledButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${tertiary};
    justify-content: center;
    border-radius: 5px;
    margin-top: 5px;
    height: 60px;
`

export const ButtonText = styled.Text`
    color: black;
    font-size: 16px;
    `