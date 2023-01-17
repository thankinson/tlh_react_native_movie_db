import { StyleSheet, View, Pressable, Text } from "react-native";

export default function MovieSearchList({onPress, item}){
  return ( 
    <View style={styles.buttonContainer}>
      <Pressable 
        onPress={()=>onPress(item)} 
        android_ripple={{color: '#ccc'}} 
        style={[styles.button, ({pressed})=> pressed && styles.pressed]}>
        <View style={styles.innerContainer}>
          <Text style={styles.fontStyle} >{item.original_title}</Text>
        </View>
      </Pressable>
    </View>
    )
};

const styles = StyleSheet.create({
  textSize:{
    fontSize: 12
  },
  buttonContainer:{
    flex: 1,
    margin: 10,
    width: '90%',
    height: 50,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  button: {
    flex: 1
  },
  innerContainer: {
    flex: 1,
    // padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  fontStyle:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    padding: 5
  },
  pressed:{
    opacity: 0.7
  }

});