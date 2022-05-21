import React, { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
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

const Login = () => {
  const [hidePassword, setHidePassword] = useState(true);

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
                      style={styles.font}
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
                      style={styles.font}
                    />
                    <MessageBox></MessageBox>
                    <ButtonBox>
                      <StyledButton>
                        <ButtonText style={styles.font}>Login</ButtonText>
                      </StyledButton>
                    </ButtonBox>
                  </StyledFormArea>
                )}
              </Formik>
            </LoginFormContainer>
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

const styles = StyleSheet.create({
  font: {
    fontFamily: "comfortaa-regular",
  },
  fontBold: {
    fontFamily: "comfortaa-bold",
  },
});
export default Login;
