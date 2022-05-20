import React from 'react'
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
    StyledButton, StyledInputLabel, StyledTextInput

} from './../components/styles'
import { StatusBar } from 'expo-status-bar'
import { Formik } from 'formik';
import { Octicons } from '@expo/vector-icons'
import { Colors } from './../components/styles';



const Login = () => {
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
                            secureTextEntry={true}
                        />

                    </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>
    )
}


const MyTextInput = ({ label, icon, ...props }) => {
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color="black" />
            </LeftIcon>
            <StyledInputLabel>{label}</StyledInputLabel>
            <StyledTextInput {...props} />
        </View>
    )
}
export default Login