import { Text, StyleSheet, Pressable, View } from "react-native";


export default function Buttons({children, onPress, style, textSize}){

  return (
    <View style={[styles.buttonContainer, style]}>
      <Pressable 
        onPress={onPress} 
        android_ripple={{color: '#ccc'}} 
        style={({pressed})=> pressed && styles.pressed}>
        <Text style={[styles.fontStyle, textSize]} >{children}</Text>
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  buttonContainer:{
    borderRadius: 8,
    // borderWidth: 2,
    width: 250,
    backgroundColor: 'white',
    marginHorizontal: 24,
    marginVertical: 12,
    elevation: 10,
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