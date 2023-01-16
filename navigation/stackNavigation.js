import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// navigation vars

const Stack = createNativeStackNavigator();

// navigation
import DrawerNavigation from "./drawerNavigation";
import MovieScreen from "../Screens/MovieScreen";

export default function StackNavigation(){
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="DrawerNav" 
            component={DrawerNavigation} 
            options={{
              headerShown: false
            }}/>
          <Stack.Screen name="Movie" component={MovieScreen} /> 
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}