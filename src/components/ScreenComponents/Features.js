// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
// --------------------------------------------------------------------
// COMPONENT STYLES
// --------------------------------------------------------------------
import { homeStyles } from "../../ScreenStyles/HomeScreenStyle";

const Features = () => {
  return (
    <View>
      <View
        className="w-screen h-[10%]"
        style={[homeStyles.flexCenter, homeStyles.bodyColor]}
      >
        <Text style={[homeStyles.headerText]}>Features</Text>
      </View>
      <View
        className="w-screen h-[30%]"
        style={[homeStyles.flexCenter, homeStyles.bodyColor]}
      >
        <View
          className="bg-emerald-200 w-[90%] h-[90%] p-4"
          style={[homeStyles.featureCard]}
        >
          <View style={[homeStyles.cardGrid]}>
            <Image
              source={require("../../../assets/images/chatgptIcon.png")}
              style={[homeStyles.cardIcon]}
            />
            <Text style={[homeStyles.cardHeader]}>ChatGPT</Text>
          </View>
          <View>
            <Text className="mt-3" style={[ homeStyles.cardSubText ]}>
              ChatGPT can provide information, answer questions, assist with
              tasks, generate text, and engage in conversation on various
              topics.
            </Text>
          </View>
        </View>
      </View>
      <View
        className="w-screen h-[30%]"
        style={[homeStyles.flexCenter, homeStyles.bodyColor]}
      >
        <View
          className="bg-purple-200 w-[90%] h-[90%] p-4"
          style={[homeStyles.featureCard]}
        >
          <View style={[homeStyles.cardGrid]}>
            <Image
              source={require("../../../assets/images/dalleIcon.png")}
              style={[homeStyles.cardIcon]}
            />
            <Text style={[homeStyles.cardHeader]}>Dall-E</Text>
          </View>
          <View>
            <Text className="mt-3" style={[ homeStyles.cardSubText ]}>
              DALL-E is a neural network that generates images from textual
              descriptions, allowing for creative and diverse visual outputs.
            </Text>
          </View>
        </View>
      </View>
      <View
        className="w-screen h-[30%]"
        style={[homeStyles.flexCenter, homeStyles.bodyColor]}
      >
        <View
          className="bg-cyan-200 w-[90%] h-[90%] p-4"
          style={[homeStyles.featureCard]}
        >
          <View style={[homeStyles.cardGrid]}>
            <Image
              source={require("../../../assets/images/smartIcon.png")}
              style={[homeStyles.cardIcon]}
            />
            <Text style={[homeStyles.cardHeader]}>Smart AI</Text>
          </View>
          <View>
            <Text className="mt-3" style={[ homeStyles.cardSubText ]}>
              Cleo is the daughter of chatGPT & Dall-E, having both of their
              abilities, providing you best outcome of both as personal
              assistant.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Features;
