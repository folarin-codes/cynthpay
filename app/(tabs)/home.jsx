import CSafeAreaView from "../../components/CSafeArea"
import { Text, View, Image , Pressable, StyleSheet, ScrollView} from "react-native"
import { COLORS, SIZES } from "../../theme/theme"
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import { useState } from "react";
import { router } from "expo-router";



const Home = ()=>{

    const [balanceShown , setBalanceShown] = useState(false)



    return(
        <CSafeAreaView style={{backgroundColor:'#F9FAFB'}}>

            <View style={{marginVertical:10, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <View style={{ backgroundColor:COLORS.border,  borderRadius:25, width:50, height:50, justifyContent:'center'}}>
                <Text style={{fontFamily:'medium', alignSelf:'center'}}>SM</Text>
                </View>


                <View style={{flexDirection:'row', gap:5}}>
                    <Pressable>
                        <Image style={{width:40, height:40}} source={require('../../assets/images/gift-icon.png')}/>

                    </Pressable>

                    <Pressable>
                        <Image style={{width:40, height:40}} source={require('../../assets/images/bell-icon.png')}/>

                    </Pressable>
                    
                  
                </View>

            </View>


            <View style={{backgroundColor:COLORS.black, padding:25, borderRadius:12, marginVertical:20}}>
                <Pressable style={{flexDirection:'row', alignItems:'center', gap:10, backgroundColor:'#323546', width:180, padding:12, borderRadius:20}}>

                    <View style={{flexDirection:'row', alignItems:'center', gap:5}}>
                        <Image style={{height:24, width:24}} source={require('../../assets/images/uk-flag.png')}/>

                        <Text style={{color:COLORS.white, fontFamily:'regular'}}>British Pounds</Text>

                    </View>
                

                    <MaterialIcons name="keyboard-arrow-down" size={24} color={COLORS.white} />



                </Pressable>

                <View style={{flexDirection:'row', alignItems:'center', gap:10, marginVertical:20}}>

                    <Text style={{fontFamily:'semibold', color:COLORS.white, fontSize:SIZES.heading}}>
                       
                        {
                            !balanceShown ? ' $400.00' : '********'
                        }
                        </Text>

                    <Pressable onPress={()=> setBalanceShown(!balanceShown)}>
                        {
                            !balanceShown ?  <Feather name="eye-off" size={24} color={COLORS.white} /> : <Feather name="eye" size={24} color={COLORS.white} />
                        }
                    </Pressable>

                </View>

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>

                    <Pressable onPress={()=> router.push('../(home)/accounts')} style={styles.imageCont} >
                        <View style={[styles.imageBg, {backgroundColor:COLORS.white}]}>
                            <Image style={styles.image} source={require('../../assets/images/bank.png')}/>

                        </View>
                     
                        <Text style={styles.imagetext}>Account</Text>

                    </Pressable>

                    <Pressable onPress={()=> router.push('/add-money')} style={styles.imageCont}>
                        <View style={styles.imageBg}>
                            <Image style={styles.image} source={require('../../assets/images/add.png')}/>

                        </View>
                       
                        <Text style={styles.imagetext}>Add Money</Text>
                        
                    </Pressable>

                    <Pressable onPress={()=> router.push()} style={styles.imageCont} >
                        <View style={styles.imageBg}>
                            <Image style={styles.image} source={require('../../assets/images/send.png')}/>

                        </View>
                       
                        <Text style={styles.imagetext}>Send money</Text>
                        
                    </Pressable>

                    <Pressable onPress={()=> router.push()} style={styles.imageCont}>
                        <View style={styles.imageBg}>
                            <Image style={styles.image} source={require('../../assets/images/swap.png')}/>

                        </View>
                      
                        <Text style={styles.imagetext}>Swap</Text>
                        
                    </Pressable>

                </View>
            </View>


            <ScrollView  showsVerticalScrollIndicator={false}>

          


            <View style={{backgroundColor:'#FFFFFF', padding:20, borderRadius:12}}>

                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <Text style={{fontFamily:'regular', color:COLORS.grey}}>RECENT TRANSACTIONS</Text>
                    <Text style={{fontFamily:'medium', color:COLORS.primary}}>See all</Text>

                </View>


                <View>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginVertical:20}}>
                        <View style={{flexDirection:'row', gap:10,alignItems:'center'}}>
                            <View style={{backgroundColor:'#F9ECEE', height:40, width:40, justifyContent:'center', borderRadius:20}}>
                                <Image style={styles.image2} tintColor={COLORS.red} source={require('../../assets/images/send.png')}/>

                            </View>
                           
                            <View style={{gap:10}}>
                                <Text style={{fontFamily:'semibold', color:COLORS.black}}>Oluwatosin Peter</Text>
                                <Text style={{fontFamily:'medium', color:COLORS.grey}} >Withdraw</Text>
                            </View>
                        </View>

                        <Text style={{fontFamily:'medium', color:COLORS.black}}>-$22.00</Text>

                    </View>


                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginVertical:20}}>
                        <View style={{flexDirection:'row', gap:10,alignItems:'center'}}>
                            <View style={{backgroundColor:'#E6FEF2', height:40, width:40, justifyContent:'center', borderRadius:20}}>
                                <Image style={styles.image2} tintColor={'#04A76C'} source={require('../../assets/images/add.png')}/>

                            </View>
                           
                            <View style={{gap:10}}>
                                <Text style={{fontFamily:'semibold', color:COLORS.black}}>Oluwatosin Peter</Text>
                                <Text style={{fontFamily:'medium', color:COLORS.grey}} >Withdraw</Text>
                            </View>
                        </View>

                        <Text style={{fontFamily:'medium', color:COLORS.black}}>-$22.00</Text>

                    </View>


                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginVertical:20}}>
                        <View style={{flexDirection:'row', gap:10,alignItems:'center'}}>
                            <View style={{backgroundColor:'#E6FEF2', height:40, width:40, justifyContent:'center', borderRadius:20}}>
                                <Image style={styles.image2} tintColor={'#04A76C'} source={require('../../assets/images/add.png')}/>

                            </View>
                           
                            <View style={{gap:10}}>
                                <Text style={{fontFamily:'semibold', color:COLORS.black}}>Oluwatosin Peter</Text>
                                <Text style={{fontFamily:'medium', color:COLORS.grey}} >Withdraw</Text>
                            </View>
                        </View>

                        <Text style={{fontFamily:'medium', color:COLORS.black}}>-$22.00</Text>

                    </View>

                    
                </View>
            
            </View>


            <View style={{marginTop:20}}>
                <Text style={{marginBottom:20, fontFamily:'regular', color:COLORS.grey}}>SEND TO BENEFICIARY</Text>

                <ScrollView horizontal >

                    <Pressable style={{width:164, gap:10, backgroundColor:'white', padding:10, borderRadius:12,marginRight:20}}>

                        <View style={{ backgroundColor:COLORS.border,  borderRadius:25, width:50, height:50, justifyContent:'center'}}>
                            <Text style={{fontFamily:'medium', alignSelf:'center'}}>OP</Text>
                        </View>

                        <Text style={{fontFamily:'medium', color:COLORS.black}}>Oluwatosin Peter</Text>

                        <Text style={{fontFamily:'regular', color:COLORS.grey}}>Monument Bank</Text>

                        <View style={{position:'absolute', right:10, top:10}}>
                            <Image style={styles.image} source={require('../../assets/images/uk-flag.png')}/>
                        </View>


                    </Pressable>


                       <Pressable style={{width:164, gap:10, backgroundColor:'white', padding:10, borderRadius:12}}>

                        <View style={{ backgroundColor:COLORS.border,  borderRadius:25, width:50, height:50, justifyContent:'center'}}>
                            <Text style={{fontFamily:'medium', alignSelf:'center'}}>AP</Text>
                        </View>

                        <Text style={{fontFamily:'medium', color:COLORS.black}}>Anita Peter</Text>

                        <Text style={{fontFamily:'regular', color:COLORS.grey}}>First Bank</Text>

                        <View style={{position:'absolute', right:10, top:10}}>
                            <Image style={styles.image} source={require('../../assets/images/Nigeria.png')}/>
                        </View>


                    </Pressable>

                </ScrollView>

            </View>

            </ScrollView>

            

        </CSafeAreaView>
    )
}

export default Home;


const styles = StyleSheet.create({
    image:{
        height:24,
        width:24,
        alignSelf:'center'
    },
    imagetext:{
        fontFamily:'regular',
        color:COLORS.white
    },
    imageBg :{
        backgroundColor:'#323546',
        justifyContent:'center',
        height:48,
        width:48,
        borderRadius:"50%"
    },
    imageCont:{
        alignItems:'center',
        gap:5
    },
    image2:{
        height:20,
        width:20,
        alignSelf:'center'
    }
})