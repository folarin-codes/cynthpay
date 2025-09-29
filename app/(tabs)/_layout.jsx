import { Tabs } from "expo-router"



const TabLayout = ()=>{
    return(
        <Tabs screenOptions={{headerShown:false}}>
            <Tabs.Screen name="home"/>
            <Tabs.Screen name="transactions"/>
            <Tabs.Screen name="referrals"/>
            <Tabs.Screen name="account"/>
        </Tabs>
    )
}


export default TabLayout;