import React from "react"
import { Keyboard, TouchableWithoutFeedback } from "react-native"
import { SafeAreaView, SafeAreaViewProps  } from "react-native-safe-area-context"
import authStyles from "../app/(auth)/styles"


const CSafeAreaView = ({children , style})=>{

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={[authStyles.conatainer, style]}>
                {children}


            </SafeAreaView>

        </TouchableWithoutFeedback>
    )

}

export default CSafeAreaView