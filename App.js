import { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";


// Ui components
import FlexScreen from "./Components/Ui/FlexScreen";

// navigation
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignUpScreen from "./Screens/SignUpScreen";
import MovieSearchScreen from "./Screens/MovieSearchScreen";
import MovieScreen from "./Screens/MovieScreen";

export default function App() {
  const Drawer = createDrawerNavigator();
  const [bool, setBool] = useState(false)

  return (
    <FlexScreen>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Login" component={LoginScreen}/>
          <Drawer.Screen name="Sign Up" component={SignUpScreen} />
          <Drawer.Screen name="Find a film" component={MovieSearchScreen} />
          <Drawer.Screen name="Movie" component={MovieScreen} /> 
        </Drawer.Navigator>
      </NavigationContainer>
    </FlexScreen>
  );
}
