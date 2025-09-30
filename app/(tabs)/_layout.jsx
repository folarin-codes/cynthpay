import { Tabs } from "expo-router"
import { Image, View,Text, Dimensions, StyleSheet } from "react-native"
import { COLORS, SIZES } from "../../theme/theme"
import AntDesign from '@expo/vector-icons/AntDesign';



const TabIcon = ({focused , name , image})=>{
    return(
        <View style={styles.tabView}>

            <Image tintColor={focused ? COLORS.red: COLORS.grey} style={styles.tabIcon} source={image}/>
            {
                focused ? <Image tintColor={COLORS.red} style={{height:8, width:8}} source={require('../../assets/images/dot.png')}/>
                : 
                <Text style={styles.tabText}>{name}</Text>
            }
        </View>
    )
}

const TabLayout = ()=>{
    return(
        <Tabs screenOptions={{headerShown:false, tabBarStyle:{height:88,}}}>

            <Tabs.Screen options={{
                title:'',
                tabBarIcon: ({focused}) => <TabIcon focused={focused} name={'Home'} image={require('../../assets/images/home.png')}/>
            }} name="home"/>

            <Tabs.Screen  options={{
                title:'',
                tabBarIcon: ({focused}) => <TabIcon focused={focused} name={'Transactions'} image={require('../../assets/images/transaction.png')}/>
            }} name="transactions"/>

            <Tabs.Screen  options={{
                title:'',
                tabBarIcon: ({focused}) => <TabIcon focused={focused} name={'Referrals'} image={require('../../assets/images/gift.png')}/>
            }} name="referrals"/>

            <Tabs.Screen 
        
             options={{
                title:'',
                tabBarIcon: ({focused}) => <TabIcon focused={focused} name={'Account'} image={require('../../assets/images/account.png')}/>
            }}
            
            name="account"/>

        </Tabs>
    )
}


export default TabLayout;


const styles = StyleSheet.create({
    tabView:{
        alignItems:'center',  width:Dimensions.get('screen').width * 0.25, marginTop:20, gap:8

    },
    tabIcon :{width:24, height:24},
    tabText:{
        fontFamily:'medium',
        color:COLORS.grey,
        fontSize:SIZES.small

    }
})