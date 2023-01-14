import { useState } from "react";
import {StyleSheet, View, Alert} from "react-native";
// Ui components
import FlexScreen from "../Components/Ui/FlexScreen";
import Buttons from "../Components/Ui/Button";
// text componants
import TextTitle from "../Components/textComponents/textTitle";
import SubTitle from "../Components/textComponents/SubTitle";
import InputText from "../Components/textComponents/InputText";

export default function LoginScreen({navigation}){
  const [userName, setUserName ] = useState('');
  const [password, setPassword] = useState('');

  function onPressHandler(){
    navigation.navigate('Sign Up')
  }

  function onLoginHandler(){
    if ((userName === '') || (password === '')){
      Alert.alert('Login failed','Please enter username or password', [
        {
          text: 'Close Window',
          // onPress: ()=> Alert.alert('Cancel Pressed'), // use this for confirm delete later
          style: 'cancel',
        }])
    } else {
      console.log(`username: ${userName}`)
      console.log(`password: ${password}`)
    }
  };

  return (
    <FlexScreen >
      <TextTitle>User Login</TextTitle>
      <FlexScreen style={styles.screen}>
        <View style={styles.loginConatiner}>
          <View style={styles.innerLoginContainer}>
            <SubTitle style={styles.fontSize}>Username</SubTitle>
              <InputText 
                defaultText="Enter Username" 
                setEvent={setUserName} 
                />
          </View>

          <View style={styles.innerLoginContainer}>
            <SubTitle style={styles.fontSize}>Password</SubTitle>
            <InputText 
              defaultText="Enter Password" 
              setEvent={setPassword}  
              secret={true}
              />
          </View>
          <Buttons style={styles.buttonWidth} onPress={onLoginHandler}>Login</Buttons>
          <SubTitle>Or</SubTitle>
          <Buttons onPress={onPressHandler} style={styles.buttonWidth}>Sign Up</Buttons>

        </View>
      </FlexScreen>    
    </FlexScreen>
  )
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center'
  },
  loginConatiner:{
    marginVertical: 12,
    marginHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ccc',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  innerLoginContainer:{
    marginHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWidth:{
    minWidth: 200,
    marginVertical: 20
  }

})