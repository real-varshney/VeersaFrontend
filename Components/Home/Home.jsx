import React from 'react'
import { Image, TextInput, TouchableOpacity, View , Dimensions, ScrollView} from 'react-native'
import Div from '../../Utils/Div'


const {width, height} = Dimensions.get("screen");
const Home = ({onNotification}) => {
  return (
    <View>
       <View style={{paddingHorizontal: 20, justifyContent: 'space-between', flexDirection: 'row', marginTop: 12, alignItems: 'center'}}>
        <TouchableOpacity>
            <Image source={require('../../assets/Images/user.png')} style={{height: 47, width: 47}}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onNotification}>
            <View style={{
                position: 'absolute',
                right: 0,
                top: 0,
                backgroundColor: '#4B7FFB',
                height: 12, 
                width: 12, 
                borderRadius: 100,

            }}></View>
            <Image source={require('../../assets/Images/bell.png')} style={{height: 30, width: 30, resizeMode: 'center'}}/>
        </TouchableOpacity>
      </View>
      <Div style={{fontStyle: 'font-semibold', fontSize: 24, paddingHorizontal: 20, paddingTop: 12}}> Hello Pranav !</Div>

      <View style={{backgroundColor: '#ffffff', flexDirection: 'row', marginHorizontal: 30, justifyContent: 'space-between', padding: 10, borderRadius: 10, elevation: 10, marginTop: 20}}> 
        <TextInput style={{width: width*0.7, fontSize: 14, fontFamily: 'font-regular'}} placeholder="Enter Specialty or Doctor's Name"/>
        <TouchableOpacity>
        <Image source={require('../../assets/Images/search.png')} style={{height: 24, width: 24}}/>
        </TouchableOpacity>
      </View>
    
    <Div style={{fontFamily: 'font-semibold' , color: '1E1F2E', fontSize: 24, paddingHorizontal: 30, marginTop: 20, marginTop: 20}}>Services</Div>

    <View style={{flexDirection: 'row', justifyContent:'space-around', marginHorizontal: 20, marginTop: 20}}>
        <TouchableOpacity style={{alignItems:'center', backgroundColor: '#467AF9', borderRadius: 16, width: 102, height: 78, justifyContent: 'center', elevation: 5}}>
            <Image source={require('../../assets/Images/tooth.png')} style={{height: 40, width: 32}}/>
            <Div style={{fontFamily: 'font-semibold', color: 'white'}}>Odontology</Div>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center', backgroundColor: '#467AF9', borderRadius: 16, width: 102, height: 78, justifyContent: 'center', elevation: 5}}>
            <Image source={require('../../assets/Images/Brain.png')} style={{height: 40, width: 40}}/>
            <Div style={{fontFamily: 'font-semibold', color: 'white'}}>Neurology</Div>
        </TouchableOpacity>
        <TouchableOpacity style={{alignItems:'center', backgroundColor: '#467AF9', borderRadius: 16, width: 102, height: 78, justifyContent: 'center', elevation: 5}}>
            <Image source={require('../../assets/Images/Heart.png')} style={{height: 45, width: 29}}/>
            <Div style={{fontFamily: 'font-semibold', color: 'white'}}>Cardiology</Div>
        </TouchableOpacity>
    </View>
        <Div style={{fontFamily: 'font-semibold' , color: '#1E1F2E', fontSize: 24, paddingHorizontal: 30, marginTop: 20, marginTop: 20}}>Top Doctors</Div>
        <ScrollView style={{ marginHorizontal: 30, maxHeight: height*0.47, marginTop: 20, marginBottom: 20}} showsVerticalScrollIndicator={false}>
            <View style={{backgroundColor: 'white', flexDirection:"row", padding: 16, borderRadius: 12, justifyContent:'space-between', marginBottom: 10, elevation: 5}}>
                <View style={{flexDirection:"row",}}>
                <View style={{height: 87, width: 88, borderRadius: 14, backgroundColor: 'white', alignItems: 'center', }}>
                <Image source={require('../../assets/Images/user.png')} style={{height: 87, width: 88, resizeMode: 'contain'}}/>
                </View>
                <View style={{marginLeft: 10}}> 
                    <Div style={{fontFamily: 'font-semibold', color: '#1E1F2E', fontSize: 15}}>Dr. Pranav Pathway</Div>
                    <Div style={{color: '#9C9C9C', fontSize: 15}}>Senior Surgeon</Div>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <Image source={require('../../assets/Images/timer.png')} style={{height: 14, width: 12}}/>
                    <Div style={{ color: '#333333', fontSize: 13}}>{" "}10:30AM - 3:30AM</Div>
                    </View>
                    <Div style={{fontFamily: 'font-semibold', color: '#9C9C9C', fontSize: 15}}>Fee: $12</Div>
                </View>
                </View>
                <View style={{justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../assets/Images/star.png')} style={{width: 16, height: 15}}/>
                    <Div>{" "}4.5</Div>
                </View>
                <Div>0.2km</Div>
                </View>
            </View>
            <View style={{backgroundColor: 'white', flexDirection:"row", padding: 16, borderRadius: 12, justifyContent:'space-between', marginBottom: 10, elevation: 5}}>
                <View style={{flexDirection:"row",}}>
                <View style={{height: 87, width: 88, borderRadius: 14, backgroundColor: 'white', alignItems: 'center', }}>
                <Image source={require('../../assets/Images/user.png')} style={{height: 87, width: 88, resizeMode: 'contain'}}/>
                </View>
                <View style={{marginLeft: 10}}> 
                    <Div style={{fontFamily: 'font-semibold', color: '#1E1F2E', fontSize: 15}}>Dr. Pranav Pathway</Div>
                    <Div style={{color: '#9C9C9C', fontSize: 15}}>Senior Surgeon</Div>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <Image source={require('../../assets/Images/timer.png')} style={{height: 14, width: 12}}/>
                    <Div style={{ color: '#333333', fontSize: 13}}>{" "}10:30AM - 3:30AM</Div>
                    </View>
                    <Div style={{fontFamily: 'font-semibold', color: '#9C9C9C', fontSize: 15}}>Fee: $12</Div>
                </View>
                </View>
                <View style={{justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../assets/Images/star.png')} style={{width: 16, height: 15}}/>
                    <Div>{" "}4.5</Div>
                </View>
                <Div>0.2km</Div>
                </View>
            </View>
            <View style={{backgroundColor: 'white', flexDirection:"row", padding: 16, borderRadius: 12, justifyContent:'space-between', marginBottom: 10, elevation: 5}}>
                <View style={{flexDirection:"row",}}>
                <View style={{height: 87, width: 88, borderRadius: 14, backgroundColor: 'white', alignItems: 'center', }}>
                <Image source={require('../../assets/Images/user.png')} style={{height: 87, width: 88, resizeMode: 'contain'}}/>
                </View>
                <View style={{marginLeft: 10}}> 
                    <Div style={{fontFamily: 'font-semibold', color: '#1E1F2E', fontSize: 15}}>Dr. Pranav Pathway</Div>
                    <Div style={{color: '#9C9C9C', fontSize: 15}}>Senior Surgeon</Div>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <Image source={require('../../assets/Images/timer.png')} style={{height: 14, width: 12}}/>
                    <Div style={{ color: '#333333', fontSize: 13}}>{" "}10:30AM - 3:30AM</Div>
                    </View>
                    <Div style={{fontFamily: 'font-semibold', color: '#9C9C9C', fontSize: 15}}>Fee: $12</Div>
                </View>
                </View>
                <View style={{justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../assets/Images/star.png')} style={{width: 16, height: 15}}/>
                    <Div>{" "}4.5</Div>
                </View>
                <Div>0.2km</Div>
                </View>
            </View>
            <View style={{backgroundColor: 'white', flexDirection:"row", padding: 16, borderRadius: 12, justifyContent:'space-between', marginBottom: 10, elevation: 5}}>
                <View style={{flexDirection:"row",}}>
                <View style={{height: 87, width: 88, borderRadius: 14, backgroundColor: 'white', alignItems: 'center', }}>
                <Image source={require('../../assets/Images/user.png')} style={{height: 87, width: 88, resizeMode: 'contain'}}/>
                </View>
                <View style={{marginLeft: 10}}> 
                    <Div style={{fontFamily: 'font-semibold', color: '#1E1F2E', fontSize: 15}}>Dr. Pranav Pathway</Div>
                    <Div style={{color: '#9C9C9C', fontSize: 15}}>Senior Surgeon</Div>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <Image source={require('../../assets/Images/timer.png')} style={{height: 14, width: 12}}/>
                    <Div style={{ color: '#333333', fontSize: 13}}>{" "}10:30AM - 3:30AM</Div>
                    </View>
                    <Div style={{fontFamily: 'font-semibold', color: '#9C9C9C', fontSize: 15}}>Fee: $12</Div>
                </View>
                </View>
                <View style={{justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../assets/Images/star.png')} style={{width: 16, height: 15}}/>
                    <Div>{" "}4.5</Div>
                </View>
                <Div>0.2km</Div>
                </View>
            </View>
            <View style={{backgroundColor: 'white', flexDirection:"row", padding: 16, borderRadius: 12, justifyContent:'space-between', marginBottom: 10, elevation: 5}}>
                <View style={{flexDirection:"row",}}>
                <View style={{height: 87, width: 88, borderRadius: 14, backgroundColor: 'white', alignItems: 'center', }}>
                <Image source={require('../../assets/Images/user.png')} style={{height: 87, width: 88, resizeMode: 'contain'}}/>
                </View>
                <View style={{marginLeft: 10}}> 
                    <Div style={{fontFamily: 'font-semibold', color: '#1E1F2E', fontSize: 15}}>Dr. Pranav Pathway</Div>
                    <Div style={{color: '#9C9C9C', fontSize: 15}}>Senior Surgeon</Div>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <Image source={require('../../assets/Images/timer.png')} style={{height: 14, width: 12}}/>
                    <Div style={{ color: '#333333', fontSize: 13}}>{" "}10:30AM - 3:30AM</Div>
                    </View>
                    <Div style={{fontFamily: 'font-semibold', color: '#9C9C9C', fontSize: 15}}>Fee: $12</Div>
                </View>
                </View>
                <View style={{justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../assets/Images/star.png')} style={{width: 16, height: 15}}/>
                    <Div>{" "}4.5</Div>
                </View>
                <Div>0.2km</Div>
                </View>
            </View>
            <View style={{backgroundColor: 'white', flexDirection:"row", padding: 16, borderRadius: 12, justifyContent:'space-between', marginBottom: 10, elevation: 5}}>
                <View style={{flexDirection:"row",}}>
                <View style={{height: 87, width: 88, borderRadius: 14, backgroundColor: 'white', alignItems: 'center', }}>
                <Image source={require('../../assets/Images/user.png')} style={{height: 87, width: 88, resizeMode: 'contain'}}/>
                </View>
                <View style={{marginLeft: 10}}> 
                    <Div style={{fontFamily: 'font-semibold', color: '#1E1F2E', fontSize: 15}}>Dr. Pranav Pathway</Div>
                    <Div style={{color: '#9C9C9C', fontSize: 15}}>Senior Surgeon</Div>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <Image source={require('../../assets/Images/timer.png')} style={{height: 14, width: 12}}/>
                    <Div style={{ color: '#333333', fontSize: 13}}>{" "}10:30AM - 3:30AM</Div>
                    </View>
                    <Div style={{fontFamily: 'font-semibold', color: '#9C9C9C', fontSize: 15}}>Fee: $12</Div>
                </View>
                </View>
                <View style={{justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../assets/Images/star.png')} style={{width: 16, height: 15}}/>
                    <Div>{" "}4.5</Div>
                </View>
                <Div>0.2km</Div>
                </View>
            </View>
            <View style={{backgroundColor: 'white', flexDirection:"row", padding: 16, borderRadius: 12, justifyContent:'space-between', marginBottom: 10, elevation: 5}}>
                <View style={{flexDirection:"row",}}>
                <View style={{height: 87, width: 88, borderRadius: 14, backgroundColor: 'white', alignItems: 'center', }}>
                <Image source={require('../../assets/Images/user.png')} style={{height: 87, width: 88, resizeMode: 'contain'}}/>
                </View>
                <View style={{marginLeft: 10}}> 
                    <Div style={{fontFamily: 'font-semibold', color: '#1E1F2E', fontSize: 15}}>Dr. Pranav Pathway</Div>
                    <Div style={{color: '#9C9C9C', fontSize: 15}}>Senior Surgeon</Div>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <Image source={require('../../assets/Images/timer.png')} style={{height: 14, width: 12}}/>
                    <Div style={{ color: '#333333', fontSize: 13}}>{" "}10:30AM - 3:30AM</Div>
                    </View>
                    <Div style={{fontFamily: 'font-semibold', color: '#9C9C9C', fontSize: 15}}>Fee: $12</Div>
                </View>
                </View>
                <View style={{justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../assets/Images/star.png')} style={{width: 16, height: 15}}/>
                    <Div>{" "}4.5</Div>
                </View>
                <Div>0.2km</Div>
                </View>
            </View>
          
        </ScrollView>
    </View>
  )
}

export default Home
