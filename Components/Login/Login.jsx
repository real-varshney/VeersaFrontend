import React from "react";
import { Text, View, Dimensions, Image, TextInput, TouchableOpacity } from "react-native";
import Div from "../../Utils/Div";

const {width, height} = Dimensions.get("screen");

const Login = (props) => {
  const {handleGoogleButton} = props;
  return (
    <View style={{justifyContent: 'space-between', height: height }}>
      <View style={{alignItems: 'center', marginTop: 40}}>

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
