import { SafeAreaView } from "react-native-safe-area-context"

import {Image, View, Text, StyleSheet, Dimensions} from 'react-native'
import styles from "./styles"
import { router } from "expo-router"
import { useEffect } from "react"
import { COLORS, SIZES } from "../theme/theme"


const Onboarding = ()=>{

    return(
        <SafeAreaView style={styles.container}>

            <View style={{marginTop:Dimensions.get('screen').height*.15}}>
                <Text style={onboardStyles.text}>
                    For{'\n'}Hassle-Free{'\n'}International{'\n'}
                    <Text style={{color:COLORS.red}}>Money Transfers</Text>
                </Text>

            </View>

            <View style={{position:'absolute', bottom:-2, right:-10}}>
                <Image resizeMode="contain" style={{height:480, width:395}} source={require('../assets/images/onboard.png')} />

            </View>



        </SafeAreaView>
    )
}


export default Onboarding;


const onboardStyles = StyleSheet.create({
    text:{

        fontFamily:'medium',
        color:'#001E63',
        fontSize:36,
        lineHeight:50

    }

})