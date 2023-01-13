import { useState } from "react";
import { StyleSheet, Alert } from "react-native";

// Ui 
import FlexScreen from "../Components/Ui/FlexScreen";
import Buttons from "../Components/Ui/Button";
// text
import TextTitle from "../Components/textComponents/textTitle";
import SubTitle from "../Components/textComponents/SubTitle";
import InputText from "../Components/textComponents/InputText";
// validation
import PasswordCheck from "../Components/Validation/PasswordCheck";

export default function SignUpScreen(){
  const [userName, setUserName ] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passCheck, setPassCheck] = useState(false)
  const [email, setEmail] = useState('');
  const [user, setUser ]= useState([])

  function onSignUpHandler(){
    
    if ((userName === '') || (password === '') || (confirmPassword === '') || (email === '')){
      Alert.alert('Sign Up failed','Please check details and try again', [
        {
          text: 'Close Window',
          style: 'cancel',
        }])
    } else if (password != confirmPassword){
        Alert.alert('Password Incorect','Please check and confirm passwords are correct', [
          {
            text: 'Close Window',
            style: 'cancel',
          }])
      } else {
        setUser([
          {
            username: userName,
            email: email,
            password : password,
          }
        ])
      }
      console.log(user)

    };
  


  return (
    <FlexScreen style={styles.screen}>
        <TextTitle>Sign Up Page</TextTitle>
        <SubTitle>Username:</SubTitle>
        <InputText  
                defaultText="Enter Username" 
                setEvent={setUserName}  
                />
        <SubTitle>Email:</SubTitle>
        <InputText  
                defaultText="Enter Email" 
                setEvent={setEmail}  
                />
        <SubTitle>Password:</SubTitle>
        <InputText  
                defaultText="Enter Password" 
                setEvent={setPassword}  
                secret={true}/>
        <SubTitle>Confirm Password:</SubTitle>
        <InputText  
                defaultText="Confirm Password" 
                setEvent={setConfirmPassword}  
                secret={true}/>
          <PasswordCheck 
          password={password} 
          confirmPassword={confirmPassword}
          setPassCheck={setPassCheck}
          />
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