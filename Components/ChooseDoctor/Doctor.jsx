import React, { useEffect, useState } from "react";
import {
  Modal,
  ScrollView,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useApp } from "../../AppContext";
import Div from "../../Utils/Div";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";

const Doctor = ({ res }) => {
  const { UpdateDoc, LoginDoc, LoginUser, UpdateUser ,category,SetCategory} = useApp();
  const [cat, setCat] = useState('')
  const { email, name, photo } = res?.user;
  const TestRegistration_numbers = ["26986", "78629", "12345", "875421"];

  const [userloc, setUserLoc] = useState();
  const [geocodeData, setGeocodeData] = useState(null);
  const navigation = useNavigation();
  const { isDoc, setIsDoc } = useApp();
  const [toggler, setToggler] = useState(2);
  const [num, setNum] = useState("");
  const [address, setAddress] = useState("");
  const [open, setOpen] = useState(false);
  const getCurrentAddress = async (id) => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      console.log(location.coords, "location");
      // setUserLoc({
      //   longitude: location.coords.longitude,
      //   latitude: location.coords.latitude
      // });
      const res = UpdateUser(
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
        id
      );
      if (res.error) {
        console.log(res.message, "eroooror");
      } else {
      }
    } catch (error) {
      console.error(error);
      return "Error getting location";
    }
  };
  const onPatient = async () => {
    const res = await LoginUser(email, name, photo);
    const id = res.data.user._id;

    if (id) {
      ToastAndroid.show("Getting Your Current Address....", ToastAndroid.SHORT);
      await getCurrentAddress(id);
    }

    if (res.error) {
      console.log(res.message);
    } else {
      setIsDoc(false);
      ToastAndroid.show(res.data.message, ToastAndroid.SHORT);
      navigation.navigate("Home");
    }
  };
  const onDoctor = () => {
    setToggler(1);
  };
  const onVerify = () => {
    if (TestRegistration_numbers.includes(num)) {
      setIsDoc(true);
      setToggler(3);
    } else {
      ToastAndroid.show("Invalid Registration Number", ToastAndroid.SHORT);
    }
  };

  const OnAdd = async() => {
    const res =await LoginDoc(email, name, photo);
    console.log(res, "logged in");
    const id = res?.data?.user?._id;
    const data = await getAddress();
      if(data) {
        UpdateDoc(
          {
            longitude: data?.lng,
            latitude: data?.lat,
          },
          id
        );
        SetCategory(id, cat.id);

      }
    
  }

  const getAddress = async () => {
    console.log("address");
    navigation.navigate("Home");
    ToastAndroid.show("Welcome Doctor!", ToastAndroid.SHORT);

    if (address !== "") {
      const apiKey = "fdb5c73a99b34b769f7fc9b58d910b34";
      const encodedAddress = encodeURIComponent(address);
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodedAddress}&key=${apiKey}`;

      try {
        const response = await axios.get(url);
        return response?.data?.results[0]?.geometry;
      } catch (error) {
        console.error("Error fetching geocode data:", error);
      }
    }
  };
  return (
    <View>
      {toggler == 1 ? (
        <View style={{ justifyContent: "center", height: "100%" }}>
          <TextInput
            style={{
              fontFamily: "font-regular",
              borderBottomColor: "#6C63FF",
              borderBottomWidth: 1,
              marginBottom: 18,
              marginHorizontal: 47,
            }}
            placeholder="Enter Your Medical Registration number"
            value={num}
            onChangeText={setNum}
            keyboardType="numeric"
            maxLength={6}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#6C63FF",
              marginHorizontal: 47,
              paddingVertical: 12,
              borderRadius: 16,
            }}
            onPress={onVerify}
          >
            <Div
              style={{
                fontFamily: "font-semibold",
                color: "white",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Verify
            </Div>
          </TouchableOpacity>
        </View>
      ) : toggler == 2 ? (
        <View style={{ justifyContent: "center", height: "100%" }}>
          <TouchableOpacity
            style={{
              backgroundColor: "#6C63FF",
              marginHorizontal: 47,
              paddingVertical: 12,
              marginBottom: 18,
              borderRadius: 16,
            }}
            onPress={onDoctor}
          >
            <Div
              style={{
                fontFamily: "font-semibold",
                color: "white",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Continue as Doctor
            </Div>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#6C63FF",
              marginHorizontal: 47,
              paddingVertical: 12,
              borderRadius: 16,
            }}
            onPress={onPatient}
          >
            <Div
              style={{
                fontFamily: "font-semibold",
                color: "white",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Continue as Patient
            </Div>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ justifyContent: "center", height: "100%" }}>
          <Modal visible={open} transparent>
            <StatusBar backgroundColor={"rgba(0,0,0,0.5)"} />
            <TouchableWithoutFeedback onPress={() => setOpen(false)}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableWithoutFeedback>
                  <View
                    style={{
                      width: "90%",
                      borderRadius: 10,
                      padding: 20,
                      justifyContent: "space-around",
                      alignItems: "center",
                      backgroundColor: "#9D9D9D",
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 2,
                      },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,
                      elevation: 5,
                    }}
                  >
                    <View>
                      <Div
                        style={{
                          fontFamily: "font-semibold",
                          fontSize: 24,
                          color: "white",
                          textAlign: "center",
                        }}
                      >
                        Choose Specialisation
                      </Div>
                      <View
                        style={{
                          height: 1,
                          backgroundColor: "white",
                          marginVertical: 12,
                        }}
                      ></View>
                      <ScrollView style={{ maxHeight: 300 }}>
                        <View style={{ alignItems: "center" }}>
                            {
                              category.map((item, index)=>
                                <TouchableOpacity key={index} onPress={()=> {setCat({
                                  name: item.name,
                                  id: item._id,
                                }); setOpen(false)}}>
                            <Div
                              
                              style={{
                                fontFamily: "font-semibold",
                                fontSize: 18,
                                color: "white",
                                textAlign: "center",
                                marginBottom: 6,
                              }}
                            >
                             {item.name}
                            </Div>
                          </TouchableOpacity>
                              )
                            }
                        </View>
                      </ScrollView>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <TextInput
              style={{
                fontFamily: "font-regular",
                borderBottomColor: "#6C63FF",
                borderBottomWidth: 1,
                marginBottom: 18,
                marginHorizontal: 47,
              }}
              placeholder="Specialisation"
              value={cat.name}
              editable={false}
            />
          </TouchableOpacity>
          <TextInput
            style={{
              fontFamily: "font-regular",
              borderBottomColor: "#6C63FF",
              borderBottomWidth: 1,
              marginBottom: 18,
              marginHorizontal: 47,
            }}
            placeholder="Enter Your Clinic Address"
            value={address}
            onChangeText={setAddress}
          />
          <TouchableOpacity
            style={{
              backgroundColor: "#6C63FF",
              marginHorizontal: 47,
              paddingVertical: 12,
              borderRadius: 16,
            }}
            onPress={OnAdd}
          >
            <Div
              style={{
                fontFamily: "font-semibold",
                color: "white",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Add
            </Div>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Doctor;
