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
  ScrollView
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
// --------------------------------------------------------------------
// COMPONENT STYLES
// --------------------------------------------------------------------
import { homeStyles } from "../ScreenStyles/HomeScreenStyle";
// --------------------------------------------------------------------
// UI COMPONENT
// --------------------------------------------------------------------
import CleoFace from "../components/SVGComponents/CleoFace";
import Features from "../components/ScreenComponents/Features";
// --------------------------------------------------------------------
// CONSTANTS
// --------------------------------------------------------------------
import { dummyMessages } from "../constants";

const HomeScreen = () => {
  const [messages, setMessages] = useState(dummyMessages);
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView className="flex-1 flex justify-center align-middle">
        <View className="w-full h-[22%]" style={[homeStyles.flexCenter, homeStyles.bodyColor]}>
          <CleoFace />
        </View>
        {/* ------- features || messages ------- */}
        {
          messages.length > 0 ? (
            <View className="w-full h-[66%]" style={[homeStyles.flexCenter, homeStyles.bodyColor]}>
              <View className="w-[90%] h-[100%] p-5" style={[homeStyles.chatSection]}>
                <ScrollView bounces={true} showsHorizontalScrollIndicator={false}>
                  {
                    messages.map((message, index) =>{
                      return (
                        <View>
                          <Text>{message.content}</Text>
                        </View>
                      )
                    })
                  }
                </ScrollView>
              </View>
            </View>
          ) : (
            <View className="w-full h-[66%]" style={[homeStyles.flexCenter, homeStyles.bodyColor]}>
              <Features />
            </View>
          )
        }

        <View className="w-full h-[12%]" style={[homeStyles.flexCenter, homeStyles.bodyColor]}></View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

export default HomeScreen