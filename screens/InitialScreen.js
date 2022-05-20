import React, { useState } from 'react'
import { View } from 'react-native'
import {
    StyledContainer,
    InitialContainer,
    PageLogo,
    StyledButton, ButtonText, Line, ButtonBoxInitial

} from './../components/styles'
import { StatusBar } from 'expo-status-bar'





const InitialScreen = ({ navigation }) => {



    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InitialContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/images/LoginIcon.png')} />
                <ButtonBoxInitial>
                    <StyledButton onPress={() => {
                        navigation.navigate('Login')
                    }}>
                        <ButtonText>
                            Login
                        </ButtonText>
                    </StyledButton>
                    <Line />
                    <StyledButton>

                        <ButtonText>
                            Sign Up
                        </ButtonText>
                    </StyledButton>
                </ButtonBoxInitial>
            </InitialContainer>
        </StyledContainer>
    )
}

export default InitialScreen