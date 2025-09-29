import { Text, View, StyleSheet, TextInput, Image, Keyboard, Pressable, TouchableOpacity} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import authStyles from "./styles"
import { COLORS, SIZES } from "../../theme/theme"
import { TouchableWithoutFeedback } from "react-native-web"
import { Link, router } from "expo-router"
import CSafeAreaView from "../../components/CSafeArea"
import Button from "../../components/button"



const SignUp = ()=>{
    return(
        <CSafeAreaView>

            <View style={{marginTop:20}}>
                <Text style={{textAlign:'right', fontFamily:'regular', color:COLORS.black}}>You have an account? <Link style={{color:COLORS.primary}} href={'./login'}>Login</Link> </Text>
            </View>
      
            <View style={{gap:5, marginTop:20}}>
                <Text style={authStyles.mainText}>Welcome to <Text style={{color:COLORS.primary}}>Cynth</Text>Pay</Text>
                <Text style={authStyles.subText}>Type in your mobile number to get started</Text>

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


            <View style={loginStyles.form}>
                <Text style={authStyles.formText}>Email Address</Text>

                <View style={loginStyles.input}>
                    <TextInput keyboardType="email-address" style={{width:"100%", paddingLeft:10}}/>
                </View>

            </View>


            <View style={{marginTop:50}}>
                <Button onPress={()=> router.push('./verification')} text={"Continue"}/>
            </View>

            <View style={{marginTop:10}}>
                <Text style={{textAlign:'center', fontFamily:'regular', color:COLORS.grey}}>By continuing you agree to our <Text style={loginStyles.policy}>Terms of Service</Text> and <Text style={loginStyles.policy}>Privacy Policy.</Text> </Text>
            </View>


          
        </CSafeAreaView>
    )
}


export default SignUp;


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