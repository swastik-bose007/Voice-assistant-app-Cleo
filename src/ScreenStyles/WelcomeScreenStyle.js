import { StyleSheet } from "react-native";
import ColorTheme from "../config/ColorTheme";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";

export const welcomeStyles = StyleSheet.create({
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
        fontSize: responsiveScreenFontSize(5),
    },
    subText: {
        fontFamily: "Archivo-Regular",
        fontSize: responsiveScreenFontSize(1.6),
    },
    // botSize: {
    //     height: responsiveScreenHeight(50),
    //     width: responsiveScreenWidth(100),
    //     resizeMode: "cover",
    // },
    buttonText: {
        fontFamily: "ClimateCrisis-Regular",
        color: ColorTheme.white,
        fontSize: responsiveScreenFontSize(2.2),
    },
    buttonStyle: {
        backgroundColor: ColorTheme.raisanBlack1,
        width: responsiveScreenWidth(85),
        height: responsiveScreenHeight(6.5),
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: responsiveScreenWidth(5),
        elevation: 5,
    },
    btnIconColor: {
        color: 'rgba(255, 255, 255, 0.4)',
    }
});
