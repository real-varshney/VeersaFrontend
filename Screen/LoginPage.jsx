import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Login from '../Components/Login/Login'
import SafeView from '../Utils/SafeView'
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import { BottomSheetBackdrop, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const LoginPagejsx = ({navigation}) => {

  const [loader, setLoader] = useState(false)
  const [res, setRes] = useState(null)

  const ConfigureGoogleSignIn = () => {
    GoogleSignin.configure({
      androidClientId: '484831520174-8a4gaesq17qiskr3j3f65d1rpaomet75.apps.googleusercontent.com',
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
      GoogleSignin.signIn().then((res)=> {
        setRes(res)
        //store data function.
        console.log('res', res)
        handlePresentModalPress();
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
    // navigation.navigate('Home')
    // handlePresentModalPress();
    signInWithGoogle();

  }

  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => [ '100%'], []);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={1}
        appearsOnIndex={2}
        style={{ backgroundColor: '#00000', opacity: 1}}
      />
    ),
    []
  );

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <BottomSheetModalProvider>
    <SafeView>
    <Login
      handleGoogleButton={handleGoogleButton}
      bottomSheetModalRef={bottomSheetModalRef}
      snapPoints={snapPoints}
      handleSheetChanges={handleSheetChanges}
      renderBackdrop={renderBackdrop}
      res={res}
    />
    </SafeView>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

export default LoginPagejsx
