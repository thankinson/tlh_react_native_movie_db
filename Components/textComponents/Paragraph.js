import { Text, StyleSheet, View } from "react-native";

export default function Paragraph({children, style, styleView, title}){
  return (
    <View style={[styles.container, styleView]}>
      <Text style={[styles.title, style, title]}>{children}</Text>
    </View>  
      )
};

const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    borderBottomColor: 'black',
    paddingVertical: 5,
    marginHorizontal: 24
  },
  title:{
    padding: 5,
  }
})