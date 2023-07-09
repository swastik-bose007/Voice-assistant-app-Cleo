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
  ScrollView,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveScreenFontSize,
} from "react-native-responsive-dimensions";
import { Permissions, Audio } from 'expo-av';
import Voice from '@react-native-community/voice';
// import { Audio } from "expo-av";
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
  const [recording, setRecording] = useState(false);
  const [speaking, setspeaking] = useState(true);

  //  voice handler events
  const speechStartHandler = e =>{
    console.log("speech start handler");
  }
  const speechEndHandler = e =>{
    setRecording(false);
    console.log("speech end handler");
  }
  const speechResultHandler = e =>{
    console.log("voice event: ", e);
  }

  const speechErrorHandler = e =>{
    console.log("speech error handler: ", e);
  }

  const startRecording = async () =>{
    setRecording(true);
    try{
      await Voice.start('en-GB')
    }
    catch(error){
      console.log("error : ",error);
    }
  }

  const stopRecording = async () =>{
    try{
      await Voice.stop();
      setRecording(false);
      // fetch rsponse 
    }
    catch(error){
      console.log("error : ",error);
    }
  }

  const clear = () => {
    setMessages([]);
  }
  const stopSpeaking = () => {
    setspeaking(false);
  }

  useEffect(() => {
    const requestAudioRecordingPermissions = async () => {
      const { status, expires, permissions } = await Permissions.askAsync(
        Permissions.AUDIO_RECORDING
      );
  
      if (status !== "granted") {
        // Permissions not granted. Don't show the start recording button because it will cause problems if it's pressed.
        setRecording(false);
      } else {
        setRecording(true);
      }
    };
  
    requestAudioRecordingPermissions();
  }, []);

  useEffect(() => {
    //  voice handler events
    Voice.onSpeechStart = speechStartHandler;
    Voice.onSpeechEnd = speechEndHandler;
    Voice.onSpeechResults = speechResultHandler;
    Voice.onSpeechError = speechErrorHandler;

    return () => {
      // destroy the voice instance
      Voice.destroy().then(Voice.removeAllListeners);
    }
  }, []);

  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView className="flex-1 flex justify-center align-middle">
        <View
          className="w-full h-[22%]"
          style={[homeStyles.flexCenter, homeStyles.bodyColor]}
        >
          <CleoFace />
        </View>
        {/* ------- features || messages ------- */}
        {messages.length > 0 ? (
          <View
            className="w-full h-[60%]"
            style={[homeStyles.flexCenter, homeStyles.bodyColor]}
          >
            <View
              className="w-[90%] h-[100%] p-5"
              style={[homeStyles.chatSection]}
            >
              <ScrollView bounces={true} showsHorizontalScrollIndicator={false}>
                {messages.map((message, index) => {
                  if (message.role == "assistant") {
                    if (message.content.includes("https")) {
                      // it's an AI image
                      return (
                        <View key={index} className="flex-row justify-start">
                          <TouchableOpacity
                            activeOpacity={0.6}
                            className="p-2 flex"
                            onPress={() => Linking.openURL(message.content)}
                            style={[homeStyles.imageBox]}
                          >
                            <Image
                              source={{ uri: message.content }}
                              resizeMode="contain"
                              style={[homeStyles.aiImage]}
                            />
                            <Text
                              className="py-1 text-center"
                              style={[homeStyles.chatText]}
                            >
                              click to download
                            </Text>
                          </TouchableOpacity>
                        </View>
                      );
                    } else {
                      // it's an text response
                      return (
                        <View key={index} style={[homeStyles.aiInput]}>
                          <Text selectable={true} style={[homeStyles.chatText]}>
                            {message.content}
                          </Text>
                        </View>
                      );
                    }
                  } else {
                    // user input
                    return (
                      <View key={index} className="flex-row justify-end">
                        <View style={[homeStyles.userInput]}>
                          <Text selectable={true} style={[homeStyles.chatText]}>
                            {message.content}
                          </Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <View
            className="w-full h-[60%]"
            style={[homeStyles.flexCenter, homeStyles.bodyColor]}
          >
            <Features />
          </View>
        )}
        {/* ----------- recording, cllear and stop buttons ---------------- */}
        <View
          className="w-full h-[18%] flex-row"
          style={[homeStyles.flexCenter, homeStyles.bodyColor]}
        >
          {recording ? (
            // -------- recording stop btn ----------------
            <TouchableOpacity activeOpacity={0.6} onPress={stopRecording}>
              <Image
                className="rounded-full"
                source={require("../../assets/images/voiceLoading.gif")}
                style={[homeStyles.recording]}
              />
            </TouchableOpacity>
          ) : (
            // --------- recording start btn --------------
            <TouchableOpacity activeOpacity={0.6} onPress={startRecording}>
              <Image
                className="rounded-full"
                source={require("../../assets/images/voiceRecording.gif")}
                style={[homeStyles.recording]}
              />
            </TouchableOpacity>
          )}
          {messages.length > 0 && (
            <TouchableOpacity activeOpacity={0.8} className="absolute right-12" onPress={clear}>
              <Text style={[ homeStyles.clearBtn ]}>clear</Text>
            </TouchableOpacity>
          )}
          {speaking && (
            <TouchableOpacity activeOpacity={0.8} className="absolute left-12" onPress={stopSpeaking}>
              <Text style={[ homeStyles.stopBtn ]}>stop</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
