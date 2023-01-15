import { ScrollView, StyleSheet } from "react-native";

import Buttons from "../Ui/Button";

export default function MovieSearchList({navigateTo, movieResult}){

  return (
      <ScrollView showsVerticalScrollIndicator={false}>
      {movieResult && movieResult.map((movie)=>
          <Buttons 
            onPress={()=> navigateTo(movie)} 
            textSize={styles.textSize} 
            style={styles.buttonStyle} 
            key={movie.id}>{movie.original_title}</Buttons>
        )}
    </ScrollView> 
  );
};

const styles = StyleSheet.create({
  buttonStyle:{
    width: 350,
  },
  textSize:{
    fontSize: 12
  },
  contentContainer:{
  
  }
});