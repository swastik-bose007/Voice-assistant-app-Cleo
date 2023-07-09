// --------------------------------------------------------------------
// SYSTEM COMPONENTS
// --------------------------------------------------------------------
import { View, Text } from 'react-native'
import React,{ useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SplScreen from "expo-splash-screen";
// --------------------------------------------------------------------
// APP NAVIGATION
// --------------------------------------------------------------------
import AppNavigation from './src/navigations'

const App = () => {
  
  // ------------------------------------------------------------
  // fonts
  // ------------------------------------------------------------
  let [fontsLoaded] = useFonts({
    "ClimateCrisis-Regular": require("./assets/fonts/ClimateCrisis-Regular.ttf"),
    "Archivo-Regular": require("./assets/fonts/Archivo-Regular.ttf"),
    "Archivo-ExtraBold": require("./assets/fonts/Archivo-ExtraBold.ttf"),
    "FREEFATFONT-Regular": require("./assets/fonts/FREEFATFONT-Regular.otf"),
  });
  useEffect(() => {
    async function prepare() {
      await SplScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplScreen.hideAsync();
  }


  return (
    <AppNavigation />
  )
}

export default App