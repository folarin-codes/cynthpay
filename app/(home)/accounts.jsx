import { Text } from "react-native"
import CSafeAreaView from "../../components/CSafeArea"
import { router } from "expo-router";



const Account = ()=>{
    return(
        <CSafeAreaView>
            <Text onPress={()=> router.back()}>Account</Text>

        </CSafeAreaView>
    )
}


export default Account;