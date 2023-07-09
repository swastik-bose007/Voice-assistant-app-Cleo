// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import { View, TouchableWithoutFeedback, Keyboard, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
// --------------------------------------------------------------------
// COMPONENT STYLES
// --------------------------------------------------------------------
import { splashStyles } from '../ScreenStyles/SplashScreenStyle';
// --------------------------------------------------------------------
// UI COMPONENT
// --------------------------------------------------------------------
import SplashLogoSVG from '../components/SVGComponents/SplashLogo';

const SplashScreen = ({ navigation }) => {
  console.log(('nnnn', navigation));
  useEffect(() => {
    splashNav();
  }, []);

  const splashNav = () => {
    const intervalNav = setInterval(() => {
      navigation.replace("WelcomeScreen");
      clearInterval(intervalNav);
    }, 3000);
  };

  return (
    <View className="flex-1 flex justify-center align-middle">
      <View className="w-full h-[30%]" style={[ splashStyles.flexEnd, splashStyles.bodyColor ]}>
        <Text style={[ splashStyles.faintedText ]} className="text-start">ASSIS</Text>
      </View>
      <View className="w-full h-[40%]" style={[ splashStyles.flexCenter, splashStyles.bodyColor ]}>
        <SplashLogoSVG />
        <Text className="mt-1.5" style={[ splashStyles.normalText ]}>CLEO</Text>
      </View>
      <View className="w-full h-[30%]" style={[ splashStyles.flexStart, splashStyles.bodyColor ]}>
        <Text style={[ splashStyles.faintedText ]} className="text-start">STANT</Text>
      </View>
    </View>
  ) 
}

export default SplashScreen