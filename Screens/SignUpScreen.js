import { useState } from "react";
import { StyleSheet, Alert } from "react-native";

// Ui 
import FlexScreen from "../Components/Ui/FlexScreen";
import Buttons from "../Components/Ui/Button";
// text
import TextTitle from "../Components/textComponents/textTitle";
import SubTitle from "../Components/textComponents/SubTitle";
import InputText from "../Components/textComponents/InputText";

export default function SignUpScreen(){
  const [userName, setUserName ] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');

  function onSignUpHandler(){

    if ((userName === '') || (password === '') || (confirmPassword === '') || (email === '')){
      Alert.alert('Sign Up failed','Please check details and try again', [
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
    <FlexScreen style={styles.screen}>
        <TextTitle>Sign Up Page</TextTitle>
        <SubTitle>Username:</SubTitle>
        <InputText  
                defaultText="Enter Username" 
                setLogin={setUserName}  
                />
        <SubTitle>Email:</SubTitle>
        <InputText  
                defaultText="Enter Email" 
                setLogin={setEmail}  
                />
        <SubTitle>Password:</SubTitle>
        <InputText  
                defaultText="Enter Password" 
                setLogin={setPassword}  
                secret={true}/>
        <SubTitle>Confirm Password:</SubTitle>
        <InputText  
                defaultText="Confirm Password" 
                setLogin={setConfirmPassword}  
                secret={true}/>
          <Buttons onPress={onSignUpHandler} style={styles.buttonStyle}>Sign Up</Buttons>
    </FlexScreen>
  )
};

const styles = StyleSheet.create({
  screen:{
    alignItems: 'center'
  },
  buttonStyle:{
    marginTop: 30
  }
})