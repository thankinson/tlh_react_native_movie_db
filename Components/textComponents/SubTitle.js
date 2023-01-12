import { Text, StyleSheet, View } from "react-native";

export default function SubTitle({children, style}){
  return (
    <View style={styles.container}>
      <Text style={[styles.title, style]}>{children}</Text>
    </View>  
      )
};

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    marginHorizontal: 24
  },
  title:{
    fontSize: 14,
    fontWeight: 'bold',
    padding: 5,
  }
})