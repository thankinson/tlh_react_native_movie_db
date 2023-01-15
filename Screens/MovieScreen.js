import { StyleSheet } from "react-native";
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
    <FlexScreen styles={styles.screen}>
        <FlexScreen style={styles.screen} >
          <Images film={film.poster} />
          <TextTitle>{film.title}</TextTitle>
          <SubTitle>Synopsis</SubTitle>
          <Paragraph>{film.overview}</Paragraph>
          <Buttons>Add To db</Buttons>
        </FlexScreen>
       
    </FlexScreen>
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