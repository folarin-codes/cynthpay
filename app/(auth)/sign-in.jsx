import { Text, View, StyleSheet, TextInput, Image, Keyboard, Pressable, TouchableOpacity} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import authStyles from "./styles"
import { COLORS, SIZES } from "../../theme/theme"
import { TouchableWithoutFeedback } from "react-native-web"
import { Link, router } from "expo-router"
import CSafeAreaView from "../../components/CSafeArea"
import Button from "../../components/button"
import InputComponent from "../../components/input-component"



const SignIn = ()=>{
    return(
         <CSafeAreaView>

            <View style={{marginTop:20}}>
                <Text style={{textAlign:'right', fontFamily:'regular', color:COLORS.black}}>Are you new? <Link style={{color:COLORS.primary}} href={''}>Create an account</Link> </Text>
            </View>
      
            <View style={{gap:5, marginTop:20}}>
                <Text style={authStyles.mainText}>Welcome to <Text style={{color:COLORS.primary}}>Cynth</Text>Pay</Text>
                <Text style={authStyles.subText}>Log in to your account</Text>

            </View>

            <View style={loginStyles.form}>
                <Text style={authStyles.formText}>Phone Number</Text>


                <View style={loginStyles.input}>

                    <View style={{flexDirection:'row', alignItems:'center', gap:10, borderRightWidth:2, borderColor:COLORS.border, paddingHorizontal:10}}>
                        <Image style={{width:24, height:24}} source={require('../../assets/images/Nigeria.png')}/>
                        <Text style={{fontFamily:'medium'}}>+234</Text>

                    </View>

                    <TextInput maxLength={10} 

                    returnKeyType="done"
                    
                    keyboardType="number-pad" style={{ width:'75%', paddingLeft:20}} onBlur={()=> Keyboard.dismiss()}/>
                </View>

             
            </View>


            <View>
                <InputComponent label={'Password'} labelType={'password'}/>
                <Link style={{fontFamily:'regular', color:COLORS.black, textAlign:'right', marginTop:10}} href={'/'}>Forgot Password?</Link>
            </View>


            <View style={{marginTop:50}}>
                <Button onPress={()=> router.replace('/home')} text={"Login"}/>
            </View>

        

        </CSafeAreaView>


     
    )
}


export default SignIn;



const loginStyles = StyleSheet.create({

    form:{
        marginVertical:20
    },

    input:{

        borderWidth:2,
        borderRadius:12,
        borderColor:COLORS.border,
        // padding:10,
        flexDirection:'row',
        height:50
        
    },
    policy:{
        color:COLORS.primary,
        fontFamily:'medium',
        textDecorationLine:'underline',
    
    }

})