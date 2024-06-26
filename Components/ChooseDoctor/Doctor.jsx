import React, { useState } from 'react'
import { TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native'
import { useApp } from '../../AppContext';
import Div from '../../Utils/Div';
import { useNavigation } from '@react-navigation/native';

const Doctor = () => {
    const TestRegistration_numbers = ['26986', '78629', '12345', '875421']
    const navigation = useNavigation();
    const { isDoc, setIsDoc}= useApp();
    const [toggler, setToggler] = useState(false);
    const [num, setNum] = useState('');
    const onPatient = () => {
        setIsDoc(false)
        navigation.navigate('Home')
    }
    const onDoctor = () => {
        setToggler(true)
    }
    const onVerify = () => {
        if (TestRegistration_numbers.includes(num)) {
            setIsDoc(true);
            navigation.navigate('Home');
            ToastAndroid.show('Welcome Doctor!', ToastAndroid.SHORT);
        } else {
            ToastAndroid.show('Invalid Registration Number', ToastAndroid.SHORT);
        }
    }
  return (
    <View>
    {
        toggler ? <View style={{justifyContent:'center', height: '100%'}}>
            <TextInput  style={{ fontFamily: 'font-regular', borderBottomColor: '#6C63FF', borderBottomWidth: 1,marginBottom: 18, marginHorizontal: 47}} placeholder='Enter Your Medical Registration number' value={num} onChangeText={setNum} keyboardType='numeric' maxLength={6}/>
            <TouchableOpacity style={{backgroundColor: '#6C63FF', marginHorizontal: 47, paddingVertical: 12, borderRadius: 16}} onPress={onVerify}>
                <Div style={{fontFamily: 'font-semibold', color: 'white', fontSize: 20, textAlign: 'center'}}>Verify</Div>
            </TouchableOpacity>
        </View> :

    <View style={{justifyContent:'center', height: '100%'}}>
      <TouchableOpacity style={{backgroundColor: '#6C63FF', marginHorizontal: 47, paddingVertical: 12, marginBottom: 18, borderRadius: 16}} onPress={onDoctor}>
        <Div style={{fontFamily: 'font-semibold', color: 'white', fontSize: 20, textAlign: 'center'}}>Continue as Doctor</Div>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor: '#6C63FF', marginHorizontal: 47, paddingVertical: 12, borderRadius: 16}} onPress={onPatient}>
        <Div style={{fontFamily: 'font-semibold', color: 'white', fontSize: 20, textAlign: 'center'}}>Continue as Patient</Div>
      </TouchableOpacity>
    </View>
    }</View>
  )
}

export default Doctor
