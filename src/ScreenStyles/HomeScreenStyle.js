import { StyleSheet } from "react-native";
import ColorTheme from "../config/ColorTheme";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

export const homeStyles = StyleSheet.create({
  bodyColor: {
    backgroundColor: "#fff",
  },
  flexCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  flexStart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  flexEnd: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  headerText: {
    fontFamily: "ClimateCrisis-Regular",
    fontSize: responsiveScreenFontSize(3),
  },
  subText: {
    fontFamily: "Archivo-Regular",
    fontSize: responsiveScreenFontSize(1.6),
  },
  featureCard: {
    borderRadius: responsiveScreenWidth(4),
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "baseline",
    elevation: 2,
  },
  cardIcon: {
    height: responsiveScreenHeight(3.6),
    width: responsiveScreenWidth(8),
  },
  cardGrid: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: responsiveScreenWidth(3),
  },
  cardHeader: {
    fontFamily: "Archivo-ExtraBold",
    fontSize: responsiveScreenFontSize(2),
  },
  cardSubText: {
    fontFamily: "Archivo-Regular",
    fontSize: responsiveScreenFontSize(1.6),
  },
  chatSection: {
    backgroundColor: ColorTheme.raisanBlack2,
    borderRadius: responsiveScreenWidth(5),
  },
  userInput: {
    backgroundColor: ColorTheme.raisanBlack1,
    width: responsiveScreenWidth(70),
    padding: responsiveScreenHeight(1.3),
    marginVertical: responsiveScreenHeight(0.8),
    borderRadius: responsiveScreenWidth(1.4),
  },
  aiInput: {
    backgroundColor: ColorTheme.FernGreen,
    width: responsiveScreenWidth(70),
    padding: responsiveScreenHeight(1.3),
    marginVertical: responsiveScreenHeight(0.8),
    borderRadius: responsiveScreenWidth(1.4),
  },
  chatText: {
    color: ColorTheme.white,
    fontFamily: "Archivo-Regular",
    fontSize: responsiveScreenFontSize(1.6),
  },
  imageBox: {
    backgroundColor: "#4B7F52",
    borderRadius: responsiveScreenWidth(3),
    marginVertical: responsiveScreenHeight(0.8),
  },
  aiImage: {
    width: responsiveScreenWidth(60),
    height: responsiveScreenWidth(60),
    borderRadius: responsiveScreenWidth(3),
  },
  recording: {
    width: responsiveScreenWidth(20),
    height: responsiveScreenWidth(20),
  },
  clearBtn: {
    fontFamily: "Archivo-ExtraBold",
    fontSize: responsiveScreenFontSize(2),
    color: ColorTheme.white,
    backgroundColor: ColorTheme.atomicTangerine,
    padding: responsiveScreenHeight(1.2),
    borderRadius: responsiveScreenWidth(2),
  },
  stopBtn: {
    fontFamily: "Archivo-ExtraBold",
    fontSize: responsiveScreenFontSize(2),
    color: ColorTheme.white,
    backgroundColor: ColorTheme.raisanBlack1,
    padding: responsiveScreenHeight(1.2),
    borderRadius: responsiveScreenWidth(2),
  }
});
