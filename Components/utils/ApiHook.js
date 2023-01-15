// The idea for this page was to have a seperate componante to pefom the api call. 
// It didnt Worker. will come back to tis at a later date and see if i can find a way to get it to work

import { View, StyleSheet } from "react-native";
import { call } from "react-native-reanimated"
import InputText from "../textComponents/InputText";
import Buttons from "../Ui/Button";

export default async function ApiHook({ onSearchHandler, setSearch, search} ){ 
  
  // async function SearchMovieApi(){
  //   try {     
  //     const response = await fetch(`${search}`);
  //     const data = await response.json();
  //     setMovieResult(data.results);
  //     } catch(errorLog){
  //         console.log(errorLog);
  //     }
  // };

  // function onSearchHandler(e){
  //   e.preventDefault()
  //   SearchMovieApi()
  // };

    return (
      <View style={styles.screen}>
        <InputText setEvent={setSearch} />
        <Buttons onPress={onSearchHandler}>Search</Buttons>
      </View>
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