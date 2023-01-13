import { View, TextInput, StyleSheet } from "react-native";

export default function InputText({defaultText, setEvent, secret}){

  return(
    <View style={styles.container}>
      <TextInput 
        style={styles.fontStyle}
        textAlign={'center'}
        placeholder={defaultText}
        onChangeText={setEvent}
        secureTextEntry={secret}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    borderRadius: 8,
    width: 250,
    padding: 5,
    alignItems: 'center',
    elevation: 5
  },
  fontStyle: {
   width: '100%'
  }
})