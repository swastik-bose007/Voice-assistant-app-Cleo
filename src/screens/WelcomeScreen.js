// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
// --------------------------------------------------------------------
// UI COMPONENT
// --------------------------------------------------------------------
import HomeScreen from "./HomeScreen";
// --------------------------------------------------------------------
// COMPONENT STYLES
// --------------------------------------------------------------------
import { welcomeStyles } from "../ScreenStyles/WelcomeScreenStyle";
// --------------------------------------------------------------------
// EXTERNAL ASSET
// --------------------------------------------------------------------
import MaterialCommunity from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcon from "@expo/vector-icons/MaterialIcons";

const WelcomeScreen = ({ navigation }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView className="flex-1 flex justify-center align-middle">
        <View
          className="w-full h-[30%]"
          style={[welcomeStyles.flexCenter, welcomeStyles.bodyColor]}
        >
          <Text style={[welcomeStyles.headerText]}>Cleo</Text>
          <Text className="px-16 text-center" style={[welcomeStyles.subText]}>
            Ai voice assistant application made with chatgpt, Dall-E
          </Text>
        </View>
        <View
          className="w-full h-[40%]"
          style={[welcomeStyles.flexCenter, welcomeStyles.bodyColor]}
        >
          <Image style={[ welcomeStyles.botSize ]} source={require("../../assets/images/welcomeBot.png")} />
        </View>
        <View
          className="w-full h-[30%]"
          style={[welcomeStyles.flexCenter, welcomeStyles.bodyColor]}
        >
          <TouchableOpacity
            style={[welcomeStyles.buttonStyle]}
            activeOpacity={0.9}
            onPress={
              () => navigation.navigate('HomeScreen')
            }
          >
            <MaterialCommunity
              name="robot"
              size={responsiveScreenWidth(5.5)}
              style={[welcomeStyles.btnIconColor]}
            />
            <Text style={[welcomeStyles.buttonText]}>Get Started</Text>
            <MaterialIcon
              name="keyboard-arrow-right"
              size={responsiveScreenWidth(5.5)}
              style={[welcomeStyles.btnIconColor]}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default WelcomeScreen;
