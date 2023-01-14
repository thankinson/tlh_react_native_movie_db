import { Text, StyleSheet, Image, View } from "react-native";
// ui
import Buttons from "../Components/Ui/Button";
import FlexScreen from "../Components/Ui/FlexScreen";
// text
import Paragraph from "../Components/textComponents/Paragraph";
import SubTitle from "../Components/textComponents/SubTitle";
import TextTitle from "../Components/textComponents/textTitle";

export default function MovieScreen({ route, navigation }){
  const { film } = route.params;
  
  return (<FlexScreen styles={styles.screen}>
    <View style={styles.screen} > 
      <Image style={styles.poster} source={{uri: `https://image.tmdb.org/t/p/w300${film.poster}`}} />
      <TextTitle>{film.title}</TextTitle>
      <SubTitle>Synopsis</SubTitle>
      <Paragraph>{film.overview}</Paragraph>
      <Buttons>Add To db</Buttons>
    </View>
  </FlexScreen>)

}
const styles = StyleSheet.create({
  screen:{
    flex: 1,
    alignItems: 'center'
  },
  poster:{
    width: 300,
    minHeight: '60%',
    marginTop: 10
  }
})