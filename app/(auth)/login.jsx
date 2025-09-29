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
import { COLORS } from "../../theme/theme";

const Login = ()=>{


        const [value, setValue] = useState('');
        const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
        const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
      })

      if(value.length == 4){
        router.replace('/home')
      }

    return(
        <CSafeAreaView>

          <View style={{marginVertical:10, backgroundColor:COLORS.border,  borderRadius:25, width:50, height:50, justifyContent:'center'}}>
            <Text style={{fontFamily:'medium', alignSelf:'center'}}>SM</Text>
          </View>

               <View style={{marginTop:20}}>
                <Text style={authStyles.mainText}>Welcome to <Text style={{color:COLORS.primary}}>Cynth</Text>pay</Text>
                <Text style={authStyles.subText}>Enter your 4-digit code</Text>
            </View>           

            <View>
               <CodeInputField 
                 value={value}
                  onChangeText={setValue}
                  cellCount={4}
                />
            </View>

            <View style={{marginTop:30,}}>
              <Text style={{textAlign:'center', color:COLORS.black, fontFamily:'medium'}}>Not your account? <Text onPress={()=> router.replace('/sign-up')} style={{color:COLORS.red}}>Logout</Text></Text>
               
            </View>


        </CSafeAreaView>
    )

} 



export default Login;