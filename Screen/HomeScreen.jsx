import React from 'react'
import { View } from 'react-native'
import Home from '../Components/Home/Home'
import SafeView from '../Utils/SafeView'

const HomeScreen = ({navigation}) => {
  const onNotification = () => {
    navigation.navigate('notification')
  }
  return (
    <SafeView>
     <Home onNotification={onNotification}/>
    </SafeView>
  )
}

export default HomeScreen
