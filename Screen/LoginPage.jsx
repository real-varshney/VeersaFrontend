import React, { useEffect, useState } from 'react'
import Login from '../Components/Login/Login'
import SafeView from '../Utils/SafeView'
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";

const LoginPagejsx = ({navigation}) => {

  const [loader, setLoader] = useState(false)

  const ConfigureGoogleSignIn = () => {
    GoogleSignin.configure({
      androidClientId: '<clientID>',
    })
  }
  useEffect(()=> {
    ConfigureGoogleSignIn();
  },[])


  const signInWithGoogle = async() => {
    console.log("pressed signInWithGoogle")
    try {
      setLoader(true)
      await GoogleSignin.hasPlayServices();
      GoogleSignin.getTokens().then((res)=> {
        //store data function.

      }).catch((err)=> {
        console.log(err)
        setLoader(false)
      })

      console.log(userInfo)
    } catch (error) {
      console.log(error)
    }
  }

  const handleGoogleButton = () => {
    navigation.navigate('Home')
  }
  
  return (
    <SafeView>
    <Login handleGoogleButton={handleGoogleButton}/>
    </SafeView>
  )
}

export default LoginPagejsx
