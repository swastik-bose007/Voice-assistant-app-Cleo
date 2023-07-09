import { StyleSheet } from "react-native";
import ColorTheme from "../config/ColorTheme";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

export const homeStyles = StyleSheet.create({
    bodyColor: {
        backgroundColor: ColorTheme.white,
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
        elevation: 2
    },
    cardIcon:{
        height: responsiveScreenHeight(3.6),
        width: responsiveScreenWidth(8),
    },
    cardGrid: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: responsiveScreenWidth(3)
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
    }
});