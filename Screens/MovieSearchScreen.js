import { useState } from "react";
import { StyleSheet, View } from "react-native";

// import {API_URL} from '@env'
// ui
import FlexScreen from "../Components/Ui/FlexScreen";
import Buttons from "../Components/Ui/Button";
// Text
import InputText from "../Components/textComponents/InputText";
import MovieSearchList from "../Components/lists/MovieSearchList";
// api call
import MovieService from "../service/service";

export default function MovieSearchScreen({navigation}){
  const [search, setSearch] = useState('');
  const [movieResult, setMovieResult] = useState('');
 
  async function onSearchHandler(e){
    e.preventDefault()
    let searchMovie = new MovieService(search)
    const data = await searchMovie.searchMovie()
    setMovieResult(data)
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
        });
  };
  
  return (
    <FlexScreen style={styles.screen}>
      <View style={styles.screen}>
        <InputText setEvent={setSearch} />
        <Buttons onPress={onSearchHandler}>Search</Buttons>
      </View>
      <MovieSearchList 
        movieResult={movieResult}
        navigateTo={navigateTo}
        />
      </FlexScreen>
    ) 
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center'
  },
  buttonStyle:{
    width: '90%'
  },
  textSize:{
    fontSize: 12
  }
});