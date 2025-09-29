import { Alert, Pressable, Text , View} from "react-native"
import CSafeAreaView from "../../components/CSafeArea"
import authStyles from "./styles"
import InputComponent from "../../components/input-component"
import { useEffect, useState } from "react"
import { COLORS } from "../../theme/theme"
import Button from "../../components/button"
import { router } from "expo-router"




const Verification = ()=>{


    const [timer , setTimer ] = useState(30)


    const [passwordVisible, setPasswordVisible] = useState(false)


    useEffect(()=>{

        if(timer != 0){
            setTimeout(()=>{
                setTimer(timer -1)
            }, 1000)
        }
    }, [timer])

    return(
        <CSafeAreaView>

           <View style={{marginTop:20}}> 
            <Text style={authStyles.mainText}>We’ve sent you an SMS to{'\n'}+2348105205402</Text>
            <Text style={authStyles.subText}>It contains a 6-digit code - Please enter it below</Text>

           </View>


           <View style={{marginTop:40}}>
            <InputComponent label={'Verification code'} labelType={'password'} textVisible={passwordVisible} togglePasswordVisibility={()=> setPasswordVisible(!passwordVisible)}/>
           </View>


           <View style={{marginVertical:40}}>
            <Text style={{textAlign:'center', fontFamily:'medium', color:COLORS.black}} >Didn't get the code?  

                {
                    timer == 0 ? 
                        <Text onPress={()=> Alert.alert('Click', 'I was clicked')} style={{color:COLORS.primary}}> Resend</Text>
                

                    :
                      <Text style={{color:COLORS.primary}}> Resend in 00:{timer}</Text>

                }
                
              
            
            </Text>

           </View>

           <View>
            <Button text={'Confirm'} onPress={()=> router.push('./tell-us-about-yourself')} />
           </View>

        </CSafeAreaView>
    )
}


export default Verification;