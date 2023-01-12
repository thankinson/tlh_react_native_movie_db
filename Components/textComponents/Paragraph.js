import { Text, StyleSheet, View } from "react-native";

export default function Paragraph({children}){
  return (
    <View style={styles.container}>
      <Text>{children}</Text>
    </View>  
      )
};

const styles = StyleSheet.create({
  container:{
    // alignItems: 'center',
    borderBottomColor: 'black',
    paddingVertical: 5,
    marginHorizontal: 24
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
  }
})