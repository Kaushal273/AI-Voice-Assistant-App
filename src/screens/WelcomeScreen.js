import { View, Text, Image, TouchableOpacity, } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{
        flex:1, 
        justifyContent:'center', 
        backgroundColor:'#FFFFFF', 
        alignItems:'center'}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
                
                <Text style={{
                    fontWeight:'bold',
                    fontSize: wp(12),
                    color: '#808080'
                }}
                >KYAI</Text>

                <Text style={{color:'#A9A9A9',fontSize: wp(4),}}>
                    Your Own Personal Assistant, powered by AI.
                </Text>

                <View style={{flexDirection:'column', justifyContent:'center', marginTop:90}}>
                    <Image source={require('../../assets/images/welcome.png')} style={{
                        width:wp(70),
                        height:hp(35)}}/>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{
                    backgroundColor:'#50C878',
                    marginHorizontal:5,
                    paddingHorizontal:4,
                    borderRadius:25,
                    width:350,
                    height:45,
                    marginTop:100,
                    marginBottom:-30,
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <Text style={{
                        color:'#FFFFFF',
                        fontWeight:'500',
                        fontSize:wp(5)
                    }}>Get Started</Text>
                </TouchableOpacity>
            </View>
    </SafeAreaView>
  )
}