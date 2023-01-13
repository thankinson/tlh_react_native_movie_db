// this maybe tested later to see how i can call and pass props

export default function onSignUpHandler({userName, password, confirmPassword, email, setUser}){
    
  if ((userName === '') || (password === '') || (confirmPassword === '') || (email === '')){
    Alert.alert('Sign Up failed','Please check details and try again', [
      {
        text: 'Close Window',
        style: 'cancel',
      }])
  } else if (password != confirmPassword || password === '' || confirmPassword === ''){
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
  };