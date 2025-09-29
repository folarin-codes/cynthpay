import { Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import Onboarding from "./onbaording";
import { useEffect } from "react";
import { router } from "expo-router";
  

   const Index = ()=>{
       
   useEffect(()=>{

    setTimeout(()=>{

        router.push('/sign-up')

    }, 3000)
   }, [])

    return <Onboarding/>
   }


   export default Index;