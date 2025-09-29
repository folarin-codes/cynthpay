import CSafeAreaView from "../../components/CSafeArea"
import { View , Dimensions, Text} from "react-native";
import Button from "../../components/button";
import {
CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { router } from "expo-router";
import { useState } from "react";
const CELL_COUNT = 4;
import CodeInputField from "../../components/code-field";
import authStyles from "./styles";

const Login = ()=>{


        const [value, setValue] = useState('');
        const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
        const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
      })

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
                <Button text={"Confirm"} onPress={()=> router.push('/sign-in')}/>
            </View>


        </CSafeAreaView>
    )

} 



export default Login;