import React, { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
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
import { styles } from "../styles/index.js";

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [login, setLogin] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
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

            <PageTitle style={styles.fontBold}>Login</PageTitle>

            <LoginFormContainer>
              <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <StyledFormArea>
                  <MyTextInput
                    name="email"
                    label="Email Address"
                    icon="mail"
                    placeholder="Email"
                    placeholderTextColor="black"
                    onChangeText={handleChange}
                    onBlur={handleChange}
                    value={values.email}
                    keyboardType="email-address"
                    style={styles.font}
                  />
                  <MyTextInput
                    name="password"
                    label="Password"
                    icon="lock"
                    textContentType="password"
                    placeholder="*****"
                    placeholderTextColor="black"
                    onChangeText={handleChange}
                    onBlur={handleChange}
                    value={values.password}
                    secureTextEntry={hidePassword}
                    isPassword={true}
                    hidePassword={hidePassword}
                    setHidePassword={setHidePassword}
                    style={styles.font}
                  />
                  <MessageBox></MessageBox>
                  <ButtonBox>
                    <StyledButton>
                      <ButtonText style={styles.font}>Login</ButtonText>
                    </StyledButton>
                  </ButtonBox>
                </StyledFormArea>
              </Formik>
            </LoginFormContainer>
            <TouchableOpacity style={styles.createAccountLinkWrapper}>
              <ButtonText style={[styles.font, styles.createAccountLink]}>
                Create Account
              </ButtonText>
            </TouchableOpacity>
          </InnerContainer>
        </StyledContainer>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
  };

  const onBlur = () => {
    setBgColor("lightgray");
  };
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color="black" />
      </LeftIcon>
      <StyledInputLabel style={styles.font}>{label}</StyledInputLabel>
      <StyledTextInput
        {...props}
        onFocus={() => onFocus()}
        onBlur={() => onBlur()}
        style={{ borderColor: bgColor, fontFamily: "comfortaa-regular" }}
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
