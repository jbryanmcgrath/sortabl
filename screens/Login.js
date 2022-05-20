import React, { useState } from 'react'
import { View } from 'react-native'
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    Subtitle,
    StyledFormArea,
    LeftIcon,
    RightIcon,
    StyledButton, StyledInputLabel, StyledTextInput, ButtonText, MessageBox, Line

} from './../components/styles'
import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'
import { Colors } from './../components/styles';



const Login = () => {
    const [hidePassword, setHidePassword] = useState(true);


    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/images/LoginIcon.png')} />
                <PageTitle>A CRM FOR 🤟 </PageTitle>
                <Subtitle>Account Login</Subtitle>

                <Formik
                    initialValues={{ email: '', password: '' }}
                    onSubmit={(values) => {
                        console.log(values)
                    }}>
                    {({ handleChange, handleBlur, handleSubmit, values }) => (<StyledFormArea>

                        <MyTextInput
                            label="Email Address"
                            icon='mail'
                            placeholder='Email'
                            placeholderTextColor='black'
                            onChangeText={handleChange('email')}
                            onBlur={handleChange('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />
                        <MyTextInput
                            label="Password"
                            icon='lock'
                            placeholder='*****'
                            placeholderTextColor='black'
                            onChangeText={handleChange('password')}
                            onBlur={handleChange('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MessageBox>...
                        </MessageBox>
                        <StyledButton>
                            <ButtonText>
                                Login
                            </ButtonText>
                        </StyledButton>
                        <Line />
                        <StyledButton>

                            <ButtonText>
                                <Fontisto name="google" />
                                Sign In With Google
                            </ButtonText>
                        </StyledButton>
                    </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    )
}


const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color="black" />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => {
                    setHidePassword(!hidePassword)
                }}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={30} color="black" />
                </RightIcon>
            )}
        </View>
    )
}
export default Login