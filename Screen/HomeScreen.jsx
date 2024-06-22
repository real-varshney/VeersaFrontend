import React from 'react'
import { View } from 'react-native'
import Home from '../Components/Home/Home'
import SafeView from '../Utils/SafeView'

const HomeScreen = () => {
  return (
    <SafeView>
     <Home />
    </SafeView>
  )
}

export default HomeScreen
