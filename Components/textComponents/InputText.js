import { View, TextInput, StyleSheet } from "react-native";

export default function InputText({defaultText, setLogin, secret}){

  return(
    <View style={styles.textInput}>
      <TextInput 
        placeholder={defaultText}
        onChangeText={setLogin}
        secureTextEntry={secret}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  textInput:{
    backgroundColor: 'white',
    borderRadius: 8,
    width: 250,
    padding: 5,
    alignItems: 'center',
    elevation: 5
  },
})