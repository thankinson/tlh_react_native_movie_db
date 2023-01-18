import { Text, StyleSheet, Pressable } from "react-native";

export default function Buttons({children, onPress, style, textSize}){

  return (
      <Pressable 
        onPress={onPress} 
        android_ripple={{color: '#ccc'}} 
        style={[styles.buttonContainer, style, ({pressed})=> pressed && styles.pressed]}>
        <Text style={[styles.fontStyle, textSize]} >{children}</Text>
      </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer:{
    borderRadius: 8,
    width: '80%',
    backgroundColor: 'white',
    marginHorizontal: 24,
    marginVertical: 6,
    justifyContent:'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  fontStyle:{
    textAlign: 'center',
    fontSize: 18,
    padding: 5
  },
  pressed:{
    opacity: 0.7
  }
});