import React from 'react'
import { Image, ScrollView, TouchableOpacity, View, Dimensions } from 'react-native'
import Div from '../../Utils/Div'
import {  BottomSheetScrollView } from '@gorhom/bottom-sheet'
const width = Dimensions.get('screen').width

const Appointment = () => {
  return (
    <View style={{ height: '100%'}}>
      <View style={{flexDirection:"row", padding: 16, borderRadius: 12, justifyContent:'space-between', marginBottom: 10}}>
                <View style={{flexDirection:"row",}}>
                <View style={{height: 87, width: 88, borderRadius: 14, backgroundColor: 'white', alignItems: 'center', }}>
                <Image source={require('../../assets/Images/user.png')} style={{height: 87, width: 88, resizeMode: 'contain'}}/>
                </View>
                <View style={{marginLeft: 12, justifyContent:'space-between'}}> 
                  <View>
                    <Div style={{fontFamily: 'font-semibold', color: '#1E1F2E', fontSize: 15}}>Dr. Pranav Pathway</Div>
                    <Div style={{color: '#9C9C9C', fontSize: 15}}>Senior Surgeon</Div>
                    </View>
                    <Div style={{fontFamily: 'font-semibold', color: '#9C9C9C', fontSize: 16}}>Fee: $12</Div>
                </View>
                </View>
                <View style={{justifyContent: 'space-between'}}>
                <Div style={{fontSize: 16}}>0.2km</Div>
                </View>
            </View>
    
    <View style={{paddingHorizontal: 30, justifyContent:'space-between', flexDirection:'row'}}>

      <Div style={{ fontSize: 18}}>Address</Div>
      <TouchableOpacity>

      <Div style={{ fontSize: 16, borderRadius: 12, borderWidth: 1 , borderColor: '#CBCBCB', paddingHorizontal: 12, padding: 3, fontFamily:'font-semibold'}}>12/06/2023</Div>
      </TouchableOpacity>
    </View>
    <Div style={{fontSize: 16, fontFamily:'font-semibold', paddingHorizontal: 30, marginTop: 25, marginBottom: 10}}>Available Time</Div>
    <BottomSheetScrollView
        horizontal
        style={{maxHeight:40}}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity style={{ alignItems: 'center', marginRight: 20 }}>
          <Div style={{ fontSize: 16, borderRadius: 12, borderWidth: 1, borderColor: '#CBCBCB', paddingHorizontal: 12, padding: 3, color: '#9C9C9C' }}>9:00 AM</Div>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center', marginRight: 20 }}>
          <Div style={{ fontSize: 16, borderRadius: 12, borderWidth: 1, borderColor: '#CBCBCB', paddingHorizontal: 12, padding: 3, color: '#9C9C9C' }}>9:00 AM</Div>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center', marginRight: 20 }}>
          <Div style={{ fontSize: 16, borderRadius: 12, borderWidth: 1, borderColor: '#CBCBCB', paddingHorizontal: 12, padding: 3, color: '#9C9C9C' }}>9:00 AM</Div>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center', marginRight: 20 }}>
          <Div style={{ fontSize: 16, borderRadius: 12, borderWidth: 1, borderColor: '#CBCBCB', paddingHorizontal: 12, padding: 3, color: '#9C9C9C' }}>9:00 AM</Div>
        </TouchableOpacity>
        <TouchableOpacity style={{ alignItems: 'center', marginRight: 20 }}>
          <Div style={{ fontSize: 16, borderRadius: 12, borderWidth: 1, borderColor: '#CBCBCB', paddingHorizontal: 12, padding: 3, color: '#9C9C9C' }}>9:00 AM</Div>
        </TouchableOpacity>
      </BottomSheetScrollView>
    <TouchableOpacity style={{backgroundColor: '#6C63FF', marginHorizontal: 47, paddingVertical: 12, borderRadius: 16, marginBottom: 20}}>
        <Div style={{fontFamily: 'font-semibold', color: 'white', fontSize: 20, textAlign: 'center'}}>Book Appointment</Div>
    </TouchableOpacity>
    </View>
  )
}

export default Appointment
