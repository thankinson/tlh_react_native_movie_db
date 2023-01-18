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
// style
import Colors from '../constants/GlobalStyles'

export default function MovieScreen({ route, navigation }){
  const { film } = route.params;
  return (

        <FlexScreen style={styles.screen} >
          <Images film={film.poster} />
          <TextTitle>{film.title}</TextTitle>
          {/* <SubTitle>Synopsis</SubTitle> */}
          {/* <Paragraph style={styles.paragraphText}>{film.overview}</Paragraph> */}
          <Buttons>Add DVD to Collection</Buttons>
          <Buttons>Add Blu-Ray to Collection</Buttons>

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
    alignItems: 'center',
    backgroundColor: Colors.primary010
  },
  poster:{
    width: 300,
    minHeight: '60%',
    marginTop: 10
  },
  paragraphTextTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  paragraphText:{
    color: 'white',
    fontSize: 16
  }
});