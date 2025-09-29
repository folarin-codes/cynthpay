import { Stack } from "expo-router"




const AuthLayout = ()=>{
    return(
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen options={{headerShown:false}}  name="sign-up"/>
            <Stack.Screen name="sign-in"/>
            <Stack.Screen name="login"/>
            <Stack.Screen name="verification"/>
            <Stack.Screen name="tell-us-about-yourself"/>
            <Stack.Screen name="create-passcode"/>
            <Stack.Screen name="confirm-passcode"/>


        </Stack>
    )
}


export default AuthLayout;