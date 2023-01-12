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
    borderBottomWidth: 1,
    marginHorizontal: 24
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
  }
})