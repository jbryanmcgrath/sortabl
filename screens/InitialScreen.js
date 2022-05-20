import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View } from "react-native";
import {
  InitialContainer,
  PageLogo,
  StyledButton,
  ButtonText,
  Line,
  ButtonBox,
  LogoContainer,
  StyledContainer,
} from "../components/style/style-components";


const InitialScreen = ({ navigation }) => {
  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InitialContainer>
        <LogoContainer>
          <PageLogo
            resizeMode="contain"
            source={require("./../assets/images/LoginIcon.png")}
          />
        </LogoContainer>
        <ButtonBox>
          <StyledButton
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            <ButtonText>Login</ButtonText>
          </StyledButton>
          <StyledButton>
            <ButtonText>Sign Up</ButtonText>
          </StyledButton>
        </ButtonBox>
      </InitialContainer>
    </StyledContainer>
  );
};

export default InitialScreen;
