import React from 'react'
import { Image, TextInput, TouchableOpacity, View , Dimensions, ScrollView} from 'react-native'
import Div from '../../Utils/Div'
import { useApp } from '../../AppContext';


const {width, height} = Dimensions.get("screen");
const DocHome = () => {
    const {authState} = useApp();
  return (
    <View>
       <View style={{paddingHorizontal: 20, justifyContent: 'space-between', flexDirection: 'row', marginTop: 12, alignItems: 'center'}}>
        <TouchableOpacity>
            {
                authState.image ? 
                <Image source={{uri: authState.image}} style={{height: 47, width: 47, borderRadius: 999}}/>:
                <Image source={require('../../assets/Images/user.png')} style={{height: 47, width: 47}}/>

            }
        </TouchableOpacity>
      </View>
      <Div style={{fontStyle: 'font-semibold', fontSize: 24, paddingHorizontal: 20, paddingTop: 12}}> Hello Dr. Pranav !</Div>

    
        <ScrollView style={{ marginHorizontal: 30, maxHeight: height*0.76, marginTop: 20, marginBottom: 20}} showsVerticalScrollIndicator={false}>
    <Div style={{fontFamily: 'font-semibold' , color: '1E1F2E', fontSize: 24, marginBottom: 20}}>Confirmed</Div>
            <View style={{backgroundColor: 'white', flexDirection:"row", padding: 16, borderRadius: 12, justifyContent:'space-between', marginBottom: 10, elevation: 5}}>
                <View style={{flexDirection:"row",}}>
                <View style={{height: 87, width: 88, borderRadius: 14, backgroundColor: 'white', alignItems: 'center', }}>
                <Image source={require('../../assets/Images/user.png')} style={{height: 87, width: 88, resizeMode: 'contain'}}/>
                </View>
                <View style={{marginLeft: 10, justifyContent:'space-between'}}> 
                    <View>
                    <Div style={{fontFamily: 'font-semibold', color: '#1E1F2E', fontSize: 15}}>Pranav Pathway</Div>
                    <Div style={{fontSize: 12}}>Age: 20</Div>
                    <Div style={{fontSize: 12}}>Gender: Male</Div>
                    </View>
                    <Div style={{fontSize: 16, color: '#9C9C9C'}}>10:00 AM - 10:30AM</Div>
                </View>
                </View>
                
            </View>
            <View style={{backgroundColor: 'white', flexDirection:"row", padding: 16, borderRadius: 12, justifyContent:'space-between', marginBottom: 10, elevation: 5}}>
                <View style={{flexDirection:"row",}}>
                <View style={{height: 87, width: 88, borderRadius: 14, backgroundColor: 'white', alignItems: 'center', }}>
                <Image source={require('../../assets/Images/user.png')} style={{height: 87, width: 88, resizeMode: 'contain'}}/>
                </View>
                <View style={{marginLeft: 10, justifyContent:'space-between'}}> 
                    <View>
                    <Div style={{fontFamily: 'font-semibold', color: '#1E1F2E', fontSize: 15}}>Pranav Pathway</Div>
                    <Div style={{fontSize: 12}}>Age: 20</Div>
                    <Div style={{fontSize: 12}}>Gender: Male</Div>
                    </View>
                    <Div style={{fontSize: 16, color: '#9C9C9C'}}>10:00 AM - 10:30AM</Div>
                </View>
                </View>
                
            </View>
           
    <Div style={{fontFamily: 'font-semibold' , color: '1E1F2E', fontSize: 24, marginBottom: 20, marginTop: 10}}>Waiting</Div>
    <View style={{backgroundColor: 'white', flexDirection:"row", padding: 16, borderRadius: 12, justifyContent:'space-between', marginBottom: 10, elevation: 5}}>
                <View style={{flexDirection:"row",}}>
                <View style={{height: 87, width: 88, borderRadius: 14, backgroundColor: 'white', alignItems: 'center', }}>
                <Image source={require('../../assets/Images/user.png')} style={{height: 87, width: 88, resizeMode: 'contain'}}/>
                </View>
                <View style={{marginLeft: 10, justifyContent:'space-between'}}> 
                    <View>
                    <Div style={{fontFamily: 'font-semibold', color: '#1E1F2E', fontSize: 15}}>Pranav Pathway</Div>
                    <Div style={{fontSize: 12}}>Age: 20</Div>
                    <Div style={{fontSize: 12}}>Gender: Male</Div>
                    </View>
                    <Div style={{fontSize: 16, color: '#9C9C9C'}}>10:00 AM - 10:30AM</Div>
                </View>
                </View>
                <View style={{justifyContent:'space-around'}}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/Images/accept.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/Images/cancel.png')}/>
                    </TouchableOpacity>
                </View>
                
            </View>
    <View style={{backgroundColor: 'white', flexDirection:"row", padding: 16, borderRadius: 12, justifyContent:'space-between', marginBottom: 10, elevation: 5}}>
                <View style={{flexDirection:"row",}}>
                <View style={{height: 87, width: 88, borderRadius: 14, backgroundColor: 'white', alignItems: 'center', }}>
                <Image source={require('../../assets/Images/user.png')} style={{height: 87, width: 88, resizeMode: 'contain'}}/>
                </View>
                <View style={{marginLeft: 10, justifyContent:'space-between'}}> 
                    <View>
                    <Div style={{fontFamily: 'font-semibold', color: '#1E1F2E', fontSize: 15}}>Pranav Pathway</Div>
                    <Div style={{fontSize: 12}}>Age: 20</Div>
                    <Div style={{fontSize: 12}}>Gender: Male</Div>
                    </View>
                    <Div style={{fontSize: 16, color: '#9C9C9C'}}>10:00 AM - 10:30AM</Div>
                </View>
                </View>
                <View style={{justifyContent:'space-around'}}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/Images/accept.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/Images/cancel.png')}/>
                    </TouchableOpacity>
                </View>
                
            </View>
    <View style={{backgroundColor: 'white', flexDirection:"row", padding: 16, borderRadius: 12, justifyContent:'space-between', marginBottom: 10, elevation: 5}}>
                <View style={{flexDirection:"row",}}>
                <View style={{height: 87, width: 88, borderRadius: 14, backgroundColor: 'white', alignItems: 'center', }}>
                <Image source={require('../../assets/Images/user.png')} style={{height: 87, width: 88, resizeMode: 'contain'}}/>
                </View>
                <View style={{marginLeft: 10, justifyContent:'space-between'}}> 
                    <View>
                    <Div style={{fontFamily: 'font-semibold', color: '#1E1F2E', fontSize: 15}}>Pranav Pathway</Div>
                    <Div style={{fontSize: 12}}>Age: 20</Div>
                    <Div style={{fontSize: 12}}>Gender: Male</Div>
                    </View>
                    <Div style={{fontSize: 16, color: '#9C9C9C'}}>10:00 AM - 10:30AM</Div>
                </View>
                </View>
                <View style={{justifyContent:'space-around'}}>
                    <TouchableOpacity>
                        <Image source={require('../../assets/Images/accept.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/Images/cancel.png')}/>
                    </TouchableOpacity>
                </View>
                
            </View>
          
        </ScrollView>
    </View>
  )
}


export default DocHome
