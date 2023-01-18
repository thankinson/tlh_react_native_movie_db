import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from '@expo/vector-icons';
// navigation vars
const Drawer = createDrawerNavigator();

// navigation
import HomeScreen from "../Screens/HomeScreen";
import LoginScreen from "../Screens/LoginScreen";
import SignUpScreen from "../Screens/SignUpScreen";
import MovieSearchScreen from "../Screens/MovieSearchScreen";
import MyCollectionScreen from "../Screens/MyCollection";
// styles
import Colors from '../constants/GlobalStyles'

export default function DrawerNavigation(){
  return (
    <>
        <Drawer.Navigator
          screenOptions={{
          headerStyle: {backgroundColor: Colors.primary001},
          headerTintColor: 'white',
          }}
        >
          <Drawer.Screen name="Home" 
            component={HomeScreen} 
            options={{
              drawerIcon: ({color, size})=> <Ionicons name='home' color={color} size={size}/>
            }}/>
          {/* <Drawer.Screen name="Login" component={LoginScreen}/>
          <Drawer.Screen name="Sign Up" component={SignUpScreen} /> */}
          <Drawer.Screen 
            name="Find a film" 
            component={MovieSearchScreen}
            options={{
              drawerIcon: ({color, size})=> <Ionicons name='film-outline' color={color} size={size}/>
            }}
             />
                       <Drawer.Screen 
            name="My Collection" 
            component={MyCollectionScreen}
            options={{
              drawerIcon: ({color, size})=> <Ionicons name='film-sharp' color={color} size={size}/>
            }}
             />
        </Drawer.Navigator>
    </>
  )
}