
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


import { KeyboardAvoidingView, Text, View, Platform, StyleSheet, ScrollView } from "react-native";
import CSafeAreaView from "../../components/CSafeArea"
import authStyles from "./styles";
import InputComponent from "../../components/input-component";
import Button from "../../components/button";
import { router } from 'expo-router';

const TellUsAboutYourself = () => {
    return(
        <CSafeAreaView>

            <KeyboardAvoidingView 
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
            >
                <View style={{marginVertical: 20}}>
                    <Text style={authStyles.mainText}>Tell us about you</Text>
                    <Text style={authStyles.subText}>Enter some basic information about yourself</Text>
                </View>

                <ScrollView 
                    style={{ flex: 1, }}
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={{flexDirection:'row', flex: 0, gap: '5%', marginTop: 20}}>
                        <InputComponent style={{width:'47%'}} label={'First name'}/>
                        <InputComponent style={{width:'47%'}} label={'Last name'}/>
                    </View>

                    <View style={styles.inputCont}>
                        <InputComponent icon={<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />} label={'Date of Birth'}/>
                    </View>

                    <View style={styles.inputCont}>
                        <InputComponent icon={<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />} label={'Country'}/>
                    </View>

                    <View style={styles.inputCont}>
                        <InputComponent labelType={'password'} label={'Password'}/>
                    </View>

                    <View style={styles.inputCont}>
                        <InputComponent labelType={'password'} label={'Repeat password'}/>
                    </View>

                    <View style={styles.inputCont}>
                        <InputComponent icon={<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />} label={'Referral code (optional)'}/>
                    </View>

                    <View style={styles.inputCont}>
                        <InputComponent icon={<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />} label={'Referral code (optional)'}/>
                    </View>

                    <View style={styles.inputCont}>
                        <InputComponent icon={<MaterialIcons name="keyboard-arrow-down" size={24} color="black" />} label={'Referral code (optional)'}/>
                    </View>
                </ScrollView>

                <View style={styles.buttonContainer}>
                    <Button onPress={()=> router.push('/create-passcode')} text={'Continue'}/>
                </View>
            </KeyboardAvoidingView>
        </CSafeAreaView>
    )
}

const styles = StyleSheet.create({
    inputCont: {
        marginVertical: 20
    },
    buttonContainer: {
        paddingVertical: 10,
      
        // backgroundColor: 'red'
    }
})

export default TellUsAboutYourself;