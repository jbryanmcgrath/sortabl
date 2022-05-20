import React, { useState } from "react";
import { View, TouchableWithoutFeedback, Keyboard } from "react-native";
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  Subtitle,
  LoginLogoContainer,
  StyledFormArea,
  LeftIcon,
  RightIcon,
  StyledButton,
  StyledInputLabel,
  StyledTextInput,
  ButtonText,
  MessageBox,
  Line,
  LoginFormContainer,
  ButtonBox,
} from "../components/style/style-components.js";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <LoginLogoContainer>
            <PageLogo
              resizeMode="contain"
              source={require("./../assets/images/LoginIcon.png")}
            />
          </LoginLogoContainer>

          <PageTitle>Login</PageTitle>

          <LoginFormContainer>
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ handleChange, handleBlur, handleSubmit, values }) => (
                <StyledFormArea>
                  <MyTextInput
                    label="Email Address"
                    icon="mail"
                    placeholder="Email"
                    placeholderTextColor="black"
                    onChangeText={handleChange("email")}
                    onBlur={handleChange("email")}
                    value={values.email}
                    keyboardType="email-address"
                  />
                  <MyTextInput
                    label="Password"
                    icon="lock"
                    textContentType="password"
                    placeholder="*****"
                    placeholderTextColor="black"
                    onChangeText={handleChange("password")}
                    onBlur={handleChange("password")}
                    value={values.password}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                  />
                  <MessageBox></MessageBox>
                  <ButtonBox>
                    <StyledButton>
                      <ButtonText>Login</ButtonText>
                    </StyledButton>
                  </ButtonBox>
                </StyledFormArea>
              )}
            </Formik>
          </LoginFormContainer>
        </InnerContainer>
      </StyledContainer>
    </TouchableWithoutFeedback>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
    const [bgColor, setBgColor] = useState("lightgray");
    const onFocus = () => {
        setBgColor("#59c1c6");
    }

    const onBlur = () => {
        setBgColor("lightgray");
    }
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color="black" />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput
        {...props}
        onFocus={()=> onFocus()}
        onBlur={() => onBlur()}
        style={{ borderColor: bgColor}}
      />
      {isPassword && (
        <RightIcon
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color="black"
          />
        </RightIcon>
      )}
    </View>
  );
};
export default Login;
