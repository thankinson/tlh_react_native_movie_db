import { createDrawerNavigator } from "@react-navigation/drawer";
// navigation vars
const Drawer = createDrawerNavigator();

// navigation
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import MovieSearchScreen from "../Screens/MovieSearchScreen";

export default function DrawerNavigation(){
  return (
    <>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Login" component={LoginScreen}/>
          <Drawer.Screen name="Sign Up" component={SignUpScreen} />
          <Drawer.Screen name="Find a film" component={MovieSearchScreen} />
        </Drawer.Navigator>
    </>
  )
}