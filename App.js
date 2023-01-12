import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

// Ui components
import FlexScreen from "./Components/Ui/FlexScreen";

// navigation
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import TestScreen from "./Screens/TestScreen";
import SignUpScreen from "./Screens/SignUpScreen";

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <FlexScreen>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Login" component={LoginScreen}/>
          <Drawer.Screen name="Sign Up" component={SignUpScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </FlexScreen>
  );
}
