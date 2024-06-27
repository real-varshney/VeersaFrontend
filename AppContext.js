import axios from "axios";
import React, { createContext, useContext, useEffect, useState} from "react";
import * as SecureStore from 'expo-secure-store';
export const AppContext = createContext();

export const useApp = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
    const [isDoc, setIsDoc] = useState(false);
    const [category, setCategory] = useState([])
    const [authState, setAuthState] = useState({
      token: null,
      authenticated: false,
      name: null,
      image: null,
      id: null,
      type: null,

    });
    const BaseUrl = "https://veersabackend.onrender.com/api";
    useEffect(()=> {
      const checkToken = async () => {
        const token = await SecureStore.getItemAsync('TOKEN');
        const id = await SecureStore.getItemAsync('ID');
        const name = await SecureStore.getItemAsync('NAME');
        const image = await SecureStore.getItemAsync('IMAGE');
        const type = await SecureStore.getItemAsync('TYPE');
        if (token) {
          console.log('secured token founded')
          setAuthState({
            token: token,
            name: name,
            image: image,
            id: id,
            authenticated: true,
            type: type
          })
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    
      }
      getAllCategory();
      checkToken();
    }, [])
    const getAllCategory = async() => {
      try {
        const res = await axios.get(`${BaseUrl}/category/all`)
        console.log(res.data)
        setCategory(res.data.categories)
      } catch (error) {
        return {
          error: true,
          message: error
        }
      }
    }
    const LoginUser = async(email, name, profileImage)=> {
      try {
        const res = await axios.post(`${BaseUrl}/auth/googleauth`, {
          role: "USER",
          email: email,
          name: name,
          profileImage: profileImage,
        })
        SecureStore.setItemAsync("TOKEN", res.data.token);
        SecureStore.setItemAsync("NAME", res.data.user.name);
        SecureStore.setItemAsync("IMAGE", res.data.user.profileImage);
        SecureStore.setItemAsync("ID", res.data.user._id);
        SecureStore.setItemAsync("TYPE", res.data.user.role);
        console.log(res.data)
        
        
        return res
      } catch (error) {
        return {
          error: true,
          message: error
        }
      }
    }
    const LoginDoc = async(email, name, profileImage)=> {
      try {
        const res = await axios.post(`${BaseUrl}/auth/googleauth`, {
          role: "DOCTOR",
          email: email,
          name: name,
          profileImage: profileImage,
        })
        //set address and Expo token
        return res
      } catch (error) {
        return {
          error: true,
          message: error
        }
      }
    }
    const UpdateUser = async(data, id)=> {
      try {
        const res = await axios.put(`${BaseUrl}/user/update/${id}`, data)
      
        return res.data
      } catch (error) {
        return {
          error: true,
          message: error
        }
      }
    }
    const UpdateDoc = async(data, id)=> {
      try {
        const res = await axios.put(`${BaseUrl}/doctor/updateProfile/${id}`, data)
        //set address and Expo token
        console.log(res.data)
        return res
      } catch (error) {
        return {
          error: true,
          message: error
        }
      }
    }
    const SetCategory = (docId, catId)=> {
      try {
        const res = axios.put(`${BaseUrl}/doctor/assignDoctorToCategory`, 
          {
            "categoryId": catId,
          "doctorId": docId,
        }
      )
      console.log(res, "category set")
        return res
      } catch (error) {
        return {
          error: true,
          message: error
        }
      }
    }
    const getDocById = (id) => {
      try {
        const res = axios.get(`${BaseUrl}/doctor/getAllByCategory/c${id}`)
        return res
      } catch (error) {
        return {
          error: true,
          message: error
        }
      }
    }

    const GetApprovedList = ()=> {

    }
    const GetWaitingList = ()=>{

    }

    const Approve = ()=> {

    }
    const Deny = ()=>{

    }

    const getRandomList = ()=> {
      
    }

    
  return (

    <AppContext.Provider
      value={{
        isDoc, 
        setIsDoc,
        LoginDoc,
        LoginUser,
        UpdateDoc,
        UpdateUser,
        authState,
        SetCategory,
        category
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
