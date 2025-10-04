import { router } from "expo-router";
import CSafeAreaView from "../../components/CSafeArea"
import { Pressable, Text } from "react-native"




const AddMoney = ()=>{
    return(
        <CSafeAreaView>


            <Pressable style={{backgroundColor:'black', width:'30%'}} onPress={()=> router.back()}>
                <Text>go back</Text>
            </Pressable>
            <Text style={{color:'red'}}>ADD MONEY</Text>

        </CSafeAreaView>
    )
}


export default AddMoney;