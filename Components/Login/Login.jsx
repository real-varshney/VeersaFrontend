import React, { useCallback, useState } from "react";
import { Text, View, Dimensions, Image, TextInput, TouchableOpacity } from "react-native";
import Div from "../../Utils/Div";
import { BottomSheetModal, BottomSheetView} from "@gorhom/bottom-sheet";
import { useApp } from "../../AppContext";
import Doctor from "../ChooseDoctor/Doctor";

const {width, height} = Dimensions.get("screen");



const Login = (props) => {
  const {handleGoogleButton, bottomSheetModalRef, snapPoints, handleSheetChanges, renderBackdrop} = props;
  return (
    <View style={{justifyContent: 'space-between', height: height }}>
      <View style={{alignItems: 'center', marginTop: 40}}>
      <BottomSheetModal 
      enableDismissOnClose={true}
          ref={bottomSheetModalRef}
          index={0}
          enablePanDownToClose={false}
          onChange={handleSheetChanges}
          snapPoints={snapPoints}
          handleHeight={100}
          backdropComponent={renderBackdrop}

        >
          <BottomSheetView>
            <Doctor />
          </BottomSheetView>
        </BottomSheetModal>
        <Image source={require('../../assets/Images/google.png')} style={{height: 40, width: 40}}/>
      </View>
      <View>
        <View style={{alignItems: 'center', marginTop: 40}}>
        <View style={{width: width*0.8}}>
          <Div style={{fontSize: 32, textAlign: 'center'}}>
          A
          <Div style={{fontSize: 32, color: '#4B7FFB'}}>{" "}
           Healthy Life{" "}
          </Div>
            Is The
          Best Kind Of Life
          </Div>
        </View>
        </View>
        <View>
          <TouchableOpacity
          onPress={handleGoogleButton}
            style={{
              margin: 40,
            }}
          >
            <View
              style={{
                backgroundColor: "#DADADA",
                padding: 10,
                borderRadius: 10,
                flexDirection: 'row',
                alignItems:'center',
                justifyContent: 'center'
              }}
            >
              <Div
                style={{
                  textAlign: "center",
                  color: "#202020",
                  fontSize: 18,
                }}
              >
                Continue with Google {" "}
              </Div>
              <Image source={require('../../assets/Images/google.png')} style={{height: 24, width: 24}}/>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Image source={require('../../assets/Images/background.png')} style={{width: width, height: height*0.65, resizeMode: 'contain'}}/>
      </View>
    </View>
  );
};

export default Login;
