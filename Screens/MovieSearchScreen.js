import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

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
 
  function navigateTo(item){
    navigation.navigate(
      'Movie', 
        {
          film: {
            id: item.id, 
            title: item.original_title, 
            poster: item.poster_path,
            overview: item.overview
          }
        });
  };

  async function onSearchHandler(e){
    e.preventDefault()
    let searchMovie = new MovieService(search)
    const data = await searchMovie.searchMovie()
    setMovieResult(data)
  };
  
  return (
    <FlexScreen style={styles.screen}>
      <View style={styles.screen}>
        <InputText setEvent={setSearch} />
        <Buttons onPress={onSearchHandler}>Search</Buttons>
      </View>
      <FlatList 
        style={styles.list}
        data={movieResult}
        renderItem={({item}) => 
          <MovieSearchList 
            item={item} 
            onPress={navigateTo} /> }
        keyExtractor={item => item.id}
      />
      </FlexScreen>
    ) 
};

const styles = StyleSheet.create({
  screen: {
    marginTop: 5,
    width: '100%',
    alignItems: 'center'
  },
  list:{
    flexGrow: 1,
    marginBottom: 90,
  }
});