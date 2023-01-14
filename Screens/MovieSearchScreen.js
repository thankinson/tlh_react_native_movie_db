import { useState } from "react";
import { StyleSheet,ScrollView } from "react-native";

// import {API_URL} from '@env'

// ui
import FlexScreen from "../Components/Ui/FlexScreen";
import Buttons from "../Components/Ui/Button";
// Text
import InputText from "../Components/textComponents/InputText";

export default function MovieSearchScreen({navigation}){
  const [search, setSearch] = useState('');
  const [movieResult, setMovieResult] = useState('');
  const [movieSelect, setMovieSelect] = useState({
    id: '', 
    title: '', 
    poster: '',
    overview: ''
  })
  
  async function SearchMovieApi(){
    try {     
      const response = await fetch(`${search}`);
      // const response = await fetch(`${API_URL}${search}`);
      const data = await response.json();
      setMovieResult(data.results);
      } catch(errorLog){
          console.log(errorLog);
      }
  };
  
  function onSearchHandler(e){
    e.preventDefault()
    SearchMovieApi()
  };

  function navigateTo(movie){
    navigation.navigate(
  'Movie', 
    {
      film: {
        id: movie.id, 
        title: movie.title, 
        poster: movie.poster_path,
        overview: movie.overview
      }
    }
  )};
  
  return(
  <FlexScreen style={styles.screen}>
    <InputText setEvent={setSearch} />
    <Buttons onPress={onSearchHandler}>Search</Buttons>
    <ScrollView>
      {movieResult && movieResult.map((movie)=>
          <Buttons 
            onPress={()=> navigateTo(movie)} 
            textSize={styles.textSize} 
            style={styles.buttonStyle} 
            key={movie.id}>{movie.original_title}</Buttons>
        )}
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