import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./Screen/LoginPage.jsx";
import { useEffect } from "react";
import * as SplashScreen from 'expo-splash-screen';
import HomeScreen from "./Screen/HomeScreen.jsx";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <Navlayout />
  );
}

 export const Navlayout = () => {
  const [fontsLoaded, fontError] = useFonts({
  "font-regular": require("./assets/Fonts/Montserrat-Regular.ttf"),
  "font-semibold": require("./assets/Fonts/Montserrat-SemiBold.ttf"),
  "font-bold": require("./assets/Fonts/Montserrat-Bold.ttf"),
});

useEffect(() => {
  const checkAuthentication = async () => {
    await SplashScreen.preventAutoHideAsync();
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 1000); 
  };

  checkAuthentication();
}, []);

if (!fontsLoaded && !fontError) {
  return null;
}

  return(
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{
              headerShown: false,
            }}
          />
    <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />
    </Stack.Navigator>
  </NavigationContainer>
  )
}