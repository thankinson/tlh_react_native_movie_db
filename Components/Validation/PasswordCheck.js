import { StyleSheet } from "react-native"
import SubTitle from "../textComponents/SubTitle"

export default function PasswordCheck({password, confirmPassword, setPassCheck}){
  if (password != confirmPassword || password === '' || confirmPassword === ''){
    return <SubTitle style={styles.isFalse}>Password Not Match</SubTitle>
} else {
  setPassCheck(true)
  return <SubTitle style={styles.isTrue}>Password Match</SubTitle>
}}

const styles = StyleSheet.create({
  isTrue:{
    color: 'green'
  },
  isFalse:{
    color: 'red' 
  }

})