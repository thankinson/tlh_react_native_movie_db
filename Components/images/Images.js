import { View, Image, StyleSheet } from "react-native";

export default function Images({film}){

  return (
    <View>
      <Image style={styles.poster} source={{uri: `https://image.tmdb.org/t/p/w300${film}`}} />
    </View>
  )
};

const styles = StyleSheet.create({
  poster:{
    width: 300,
    minHeight: '60%',
    marginTop: 20,
    elevation: 5
  }
});