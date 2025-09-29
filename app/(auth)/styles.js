import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../theme/theme";


 const authStyles = StyleSheet.create({
    conatainer:{
        flex:1,
        backgroundColor:"white",
        paddingHorizontal:'20%'
    },
    formText:{
        fontFamily:'medium',
        fontSize:SIZES.regular,
        color:COLORS.black,
        marginBottom:5

    },
       mainText:{
        fontFamily:'semibold',
        color:COLORS.black,
        fontSize:SIZES.heading,
        marginBottom:5

    },
    subText:{
        color:COLORS.grey,
        fontSize:SIZES.regular,
        fontFamily:'regular'
      

    },

})


export default authStyles;