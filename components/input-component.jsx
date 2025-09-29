import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import Feather from '@expo/vector-icons/Feather';
import { COLORS } from "../theme/theme";
import authStyles from "../app/(auth)/styles";

const InputComponent = ({label, icon, inputType, labelType, textVisible=false, togglePasswordVisibility, style})=>{
    return(
        <View>
            <Text style={authStyles.formText}>{label}</Text>

            <View style={styles.inputView}>
                <TextInput secureTextEntry={textVisible} style={[styles.input, style]}/>

                {icon && icon}


                {labelType == 'password' ?

               
                        <TouchableOpacity onPress={togglePasswordVisibility}>

                            {
                               textVisible ? <Feather name="eye" size={24} color="black" /> : <Feather name="eye-off" size={24} color="black" />
                            }

                        </TouchableOpacity>

                : null
                
            }
            </View>

        </View>
    )
}


const styles = StyleSheet.create({

    inputView:{
          borderWidth:2,
        borderRadius:12,
        borderColor:COLORS.border,
        
        flexDirection:'row',
        height:50,
        alignItems:'center'
    },
    input:{
        width:'90%',
        paddingLeft:10
        

    }
  
})


export default InputComponent;
