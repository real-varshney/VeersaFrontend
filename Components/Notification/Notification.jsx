import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Div from '../../Utils/Div'

const Notification = ({onBack}) => {
  return (
    <View>
      <View style={{flexDirection:'row', paddingHorizontal: 20, alignItems:'center'}}>
        <TouchableOpacity onPress={onBack}>
        <Image source={require('../../assets/Images/back.png')} style={{height: 20, width: 16}}/></TouchableOpacity>
        <Div style={{fontSize: 18, marginLeft: 12, fontFamily: 'font-semibold'}}>Notifications</Div>
      </View>
      <View style={{paddingHorizontal:20, marginTop: 40}}>
        <View style={{marginBottom: 25}}>
      <View style={{justifyContent:'space-between', flexDirection:'row'}}>
        <Div style={{fontSize: 16, }}>Reminder</Div>
        <Div style={{color: '#A0A0A0'}}>Just Now</Div>
      </View>
      <Text style={{color: '#A0A0A0', lineHeight: 20, fontFamily:'font-regular', marginTop: 8}} numberOfLines={3}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam eaque eligendi asperiores nesciunt quaerat quasi libero dolorem laborum delectus unde!
      </Text>
      </View>
      </View>
    </View>
    
  )
}

export default Notification
