import { useState } from "react";
import { StyleSheet,ScrollView } from "react-native";

import FlexScreen from "../Components/Ui/FlexScreen";

import InputText from "../Components/textComponents/InputText";
import Buttons from "../Components/Ui/Button";

export default function MovieSearchScreen({navigation}){
  const [search, setSearch] = useState('');
  const [movieResult, setMovieResult] = useState('');
  const [movie, setMovie] = useState()

  // const MovieApi = process.env.Api_Key
console.log(search)
  async function SearchMovieApi(){
    try {     
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=4be4997946f0bc9f4dee48a492824044&query=${search}`);
      const data = await response.json();
      setMovieResult(data.results);
      } catch(errorLog){
          console.log(errorLog);
      }
  }

  function onPressHandler(){
    console.log(`Movie is ${movie.original_title}`)
    // navigation.navigate('Movie',{
    //   title: movie.original_title
    // })
    }    

  return(<FlexScreen style={styles.screen}>
    <InputText setEvent={setSearch} />
    <Buttons onPress={SearchMovieApi}>Search</Buttons>
    <ScrollView>
      {movieResult && movieResult.map((movie)=> 
        <Buttons 
          onPress={onPressHandler} 
           textSize={styles.textSize} 
           style={styles.buttonStyle} 
           key={movie.id}>{movie.original_title}</Buttons>)}
    </ScrollView>
    </FlexScreen>
  )
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 10,
    alignItems: 'center'
  },
  buttonStyle:{
    width: '90%'
  },
  textSize:{
    fontSize: 12
  }
});