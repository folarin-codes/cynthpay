import { Stack } from "expo-router"



const HomeLayout = ()=>{
    return(
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="accounts"/>
            <Stack.Screen name="add-money"/>
            <Stack.Screen name="send-money"/>
            <Stack.Screen name="swap"/>

        </Stack>
    )
}

export default HomeLayout;