import CSafeAreaView from "../../components/CSafeArea"
import { Text, View, StyleSheet, Platform, Dimensions  } from "react-native";
import Button from "../../components/button";
import authStyles from "./styles";
import {
CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { useState } from "react";
import { COLORS } from "../../theme/theme";
import { router } from "expo-router";
import CodeInputField from "../../components/code-field";

const CELL_COUNT = 4;
const autoComplete = Platform.select({
  android: 'sms-otp',
  default: 'one-time-code',
});

const ConfirmPasscode = ()=>{


    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  })


  console.log('pin code ', value)



    return(
        <CSafeAreaView>
            <View style={{marginTop:20}}>
                <Text style={authStyles.mainText}>Confirm your 4-digit passcode</Text>
                <Text style={authStyles.subText}>You will use it to login and securely complete your transactions.</Text>
            </View>           

            <View>
               <CodeInputField 
                 value={value}
                  onChangeText={setValue}
                  cellCount={4}
                />
            </View>

            <View style={{marginTop:Dimensions.get('screen').height*.07}}>
                <Button text={"Confirm"} onPress={()=> router.push('./login')}/>
            </View>

        </CSafeAreaView>
    )
}





export default ConfirmPasscode;