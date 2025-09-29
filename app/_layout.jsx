import { Stack } from "expo-router";
import Splash from "./splash";
import { useEffect, useState } from "react";
import { useFonts } from "expo-font";

export default function RootLayout() {

  const [showSplash , setShowSplash] = useState(true)


  const [loaded , error] = useFonts({

    regular : require('../assets/fonts/Poppins-Regular.ttf'),
    medium : require('../assets/fonts/Poppins-Medium.ttf'),
    bold : require('../assets/fonts/Poppins-Bold.ttf'),
    light : require('../assets/fonts/Poppins-Light.ttf'),
    semibold : require('../assets/fonts/Poppins-SemiBold.ttf'),
  })


  useEffect(()=>{

    setTimeout(()=>{

      setShowSplash(false)

    }, 300)

  })


  if(showSplash || !loaded){
    return <Splash/>
  }


  return (

    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index"/>
      <Stack.Screen options={{headerShown:false}} name="(auth)"/>
      <Stack.Screen name="(tabs)"/>
    </Stack>

  )
}
