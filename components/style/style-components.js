import styled from "styled-components";
import Constants from "expo-constants";

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
  primary: "#ffffff",
  secondary: "#59c1c6",
  tertiary: "#0f3142",
  highlight: "#ffb32c",
};

const { primary, secondary, tertiary, highlight } = Colors;

export const StyledContainer = styled.View`
  width: 100%;
  height: 100%;
`;
export const InnerContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
`;

export const PageLogo = styled.Image`
  width: 60%;
  margin: 0 auto;
  height: 50px;
`;
export const LoginFormContainer = styled.View`
  display: flex;
  justify-content: center;
`;

export const LogoContainer = styled.View`
  width: 100%;
  margin: 120px 0;
`;
export const LoginLogoContainer = styled.View`
  width: 100%;
  margin: 50px 0;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${tertiary};
`;
export const Subtitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  text-align: center;
  color: ${tertiary};
`;
export const StyledFormArea = styled.View`
  width: 90%;
  margin: 0 auto;
`;

export const StyledTextInput = styled.TextInput`
  padding: 15px;
  padding-left: 55px;
  border-radius: 5px;
  font-size: 16px;

  margin-bottom: 10px;
  color: ${tertiary};
  border: 2px solid lightgray;

`;
export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 30px;
  position: absolute;
  z-index: 1;
`;
export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 30px;
  position: absolute;
  z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${secondary};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin: 5px 0
  height: 60px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 24px;
`;
export const ButtonBox = styled.View`
  width: 50%;
  margin: 0 auto;
`;
export const InitialContainer = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
`;
export const MessageBox = styled.Text`
  text-align: center;
  font-size: 13px;
`;
export const Line = styled.View`
  height: 1px;
  background-color: lightgrey;
  margin-top: 10px;
`;
