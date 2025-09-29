
import { TouchableOpacity , Text, Alert} from "react-native"
import { COLORS } from "../theme/theme";

const Button = ({text, buttonStyle,onPress})=>{

    return(
        <TouchableOpacity onPress={onPress} style={{backgroundColor:COLORS.primary, borderRadius:12, height:58, padding:10, justifyContent:'center', marginVertical:10, ...buttonStyle}}>

            <Text style={{color:'white', textAlign:'center', fontWeight:'bold', fontSize:20}}>{text}</Text>

        </TouchableOpacity>

    )

}


export default Button;