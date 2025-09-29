import { Tabs } from "expo-router"
import { Image, View,Text, Dimensions } from "react-native"
import { COLORS, SIZES } from "../../theme/theme"


const TabLayout = ()=>{
    return(
        <Tabs screenOptions={{headerShown:false, tabBarStyle:{height:88, }}}>
            <Tabs.Screen name="home" 
            options={{
                tabBarIcon : ({focused})=> {
                    return(
                        <View style={{alignItems:'center', gap:10, marginTop:20, width:Dimensions.get('screen').width*.25, alignSelf:'center'}}>
                            <Image source={require('../../assets/images/home.png')} tintColor={focused ? COLORS.red : COLORS.grey} style={{height:24, width:24}} />

                            {focused ? <Image source={require('../../assets/images/dot.png')} tintColor={COLORS.red} style={{height:8, width:8}}/> : <Text style={{fontFamily:'medium', color:COLORS.black, fontSize:SIZES.small}}>Home</Text>}

                        </View>
                    )

                },

                title:''
            }}

            
            
            />
            <Tabs.Screen name="transactions"/>
            <Tabs.Screen name="referrals"/>
            <Tabs.Screen name="account"/>
        </Tabs>
    )
}


export default TabLayout;