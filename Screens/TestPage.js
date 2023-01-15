import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
// ui
import Buttons from "../Components/Ui/Button";
import FlexScreen from "../Components/Ui/FlexScreen";
// text
import Paragraph from "../Components/textComponents/Paragraph";
import SubTitle from "../Components/textComponents/SubTitle";
import TextTitle from "../Components/textComponents/textTitle";
// images
import Images from "../Components/images/Images";

export default function MovieScreen({ route, navigation }){
  const { film } = route.params;
  
  return (
    <View>
      <ScrollView>
        <View>
          <Image style={styles.poster} source={{uri: `https://image.tmdb.org/t/p/w300${film}`}} />
        </View>
        <Text>{film.title}</Text>
        <Text>Synopsis</Text>
        <Text>{film.overview}</Text>
        <Text>This is a button</Text>
      </ScrollView>
    </View>
    // <FlexScreen styles={styles.screen}>
    //     <FlexScreen style={styles.screen} >
    //       <Images film={film.poster} />
    //       <TextTitle>{film.title}</TextTitle>
    //       <SubTitle>Synopsis</SubTitle> 
    //        <Paragraph>{film.overview}</Paragraph>
    //       <Buttons>Add To db</Buttons>
    //     </FlexScreen>
       
    // </FlexScreen>
  );
};

const styles = StyleSheet.create({
  container:{
    width: '90%',
    alignItems: 'center',
    marginTop: 5,
  },
  screen:{
    flex: 1,
    alignItems: 'center'
  },
  poster:{
    width: 300,
    minHeight: '60%',
    marginTop: 10
  }
});