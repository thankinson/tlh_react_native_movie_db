import { useState } from "react";
import { FlatList, StyleSheet, View} from "react-native";
// ui
import FlexScreen from "../Components/Ui/FlexScreen";
import Buttons from "../Components/Ui/Button";
// Text
import InputText from "../Components/textComponents/InputText";
import MovieSearchList from "../Components/lists/MovieSearchList";
import Paragraph from "../Components/textComponents/Paragraph";
// api call
import MovieService from "../service/service";
// styles
import Colors from '../constants/GlobalStyles'


export default function MovieSearchScreen({navigation}){
  const [search, setSearch] = useState('');
  const [movieResult, setMovieResult] = useState('');
 
  const navigateTo =(item)=> {
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

  function SearchResults(){
    if (!movieResult){
      return <Paragraph 
        styleView={styles.paragraphContainer} 
        style={styles.paragraphText}>
          Use search box above to look up a film
        </Paragraph>
    } else {
      return <FlatList 
              contentContainerStyle={styles.list}
              data={movieResult}
              renderItem={({item}) => 
                <MovieSearchList 
                  item={item} 
                  onPress={navigateTo} /> }
              keyExtractor={item => item.id}
            />
    }
  }
  
  return (
    <FlexScreen style={styles.screen}>
      <View style={[styles.screen, styles.searchContainer]}>
        <InputText style={styles.searchInput} setEvent={setSearch} />
        <Buttons style={styles.searchButton} onPress={onSearchHandler}>Search</Buttons>
      </View>
      <View style={styles.listContainer}>
        <SearchResults />
      </View>
      </FlexScreen>
    ) 
};

const styles = StyleSheet.create({
  screen: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.primary010,
  },
  searchContainer: {
    backgroundColor: Colors.primary020,
    borderBottomColor: Colors.secondry001,
    borderWidth: 1,
    elevation: 5
  },
  searchInput:{
    marginTop: 10,
  },
  searchButton:{
    marginBottom: 10
  },
  listContainer:{
    flexGrow: 1,
    alignItems: 'center',
    marginBottom: 200,
  },
  list:{
    marginBottom: 90,
  },
  paragraphContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  paragraphText:{
    fontSize: 18,
    fontWeight: 'bold',
    padding: 5,
    color: 'white',
  }
});