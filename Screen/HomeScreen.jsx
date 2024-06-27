import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ToastAndroid, View } from "react-native";
import Home from "../Components/Home/Home";
import SafeView from "../Utils/SafeView";
import { useApp } from "../AppContext";
import DocHome from "../Components/Home/DocHome";
import * as Location from 'expo-location';
import {
  BottomSheetBackdrop,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  const {authState, UpdateUser} = useApp();

  const { isDoc } = useApp();
  const onNotification = () => {
    navigation.navigate("notification");
  };
  const bottomSheetModalRef = useRef(null);

  const snapPoints = useMemo(() => [375], []);

  const renderBackdrop = useCallback(
    (props) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={1}
        appearsOnIndex={2}
        style={{ backgroundColor: "#00000", opacity: 1 }}
      />
    ),
    []
  );

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);
  return (
    <SafeView style={{ flex: 1 }}>
      {isDoc ? (
        <DocHome />
      ) : (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <Home
              onNotification={onNotification}
              bottomSheetModalRef={bottomSheetModalRef}
              snapPoints={snapPoints}
              handleSheetChanges={handleSheetChanges}
              renderBackdrop={renderBackdrop}
              handlePresentModalPress={handlePresentModalPress}
            />
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      )}
    </SafeView>
  );
};

export default HomeScreen;
