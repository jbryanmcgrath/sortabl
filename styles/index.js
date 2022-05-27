import { StyleSheet } from "react-native";

export const Colors = {
  primary: "#ffffff",
  secondary: "#59c1c6",
  tertiary: "#0f3142",
  highlight: "#ffb32c",
};

const { primary, secondary, tertiary, highlight } = Colors;

export const styles = StyleSheet.create({
  font: {
    fontFamily: "comfortaa-regular",
  },
  fontBold: {
    fontFamily: "comfortaa-bold",
  },
  createAccountLink: {
    color: tertiary,
    textAlign: "center",
    fontSize: 20,
  },
  createAccountLinkWrapper: {
    marginTop: 50,
    display: "flex",
    justifyContent: "center",
  },
});
