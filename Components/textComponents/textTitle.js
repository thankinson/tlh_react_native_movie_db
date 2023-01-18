import { Text, StyleSheet, View } from "react-native";

export default function TextTitle({children, style}){
  return (
    <View style={styles.container}>
      <Text style={[styles.title, style]}>{children}</Text>
    </View>  
      )
};

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    borderBottomColor: '#ccc',
  },
  title:{
    fontSize: 25,
    fontWeight: 'bold',
    padding: 5,
    color: 'white'
  }
})