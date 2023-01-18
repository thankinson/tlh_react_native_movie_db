import {StyleSheet, View} from "react-native";

// Ui components
import FlexScreen from "../Components/Ui/FlexScreen";
// text componants
import TextTitle from "../Components/textComponents/textTitle";
import Paragraph from "../Components/textComponents/Paragraph";
// styles
import Colors from '../constants/GlobalStyles'

export default function HomeScreen({navigation}){

  return (
    <FlexScreen style={styles.screen}>
      <View style={styles.titleContainer}>
        <TextTitle>Mobile MovieDB</TextTitle>
      </View>
      <View style={styles.paragraphContainer}>
        <Paragraph title={styles.paragraphTextTitle}>About The MovieDB APP</Paragraph>
        <Paragraph style={styles.paragraphText}>
          This app is designed to be a database for Movie's you have in your collection. 
        </Paragraph>
        <Paragraph style={styles.paragraphText}>
          Quick search using Find a Movie. 
        </Paragraph>
        <Paragraph style={styles.paragraphText}>
          Able to add DVD or Blu-Ray film to collection.
        </Paragraph>
        <Paragraph style={styles.paragraphText}>
          Check out your collection in the My Collection page.
        </Paragraph>
      </View>
    </FlexScreen>
  )
};

const styles = StyleSheet.create({
  screen:{
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: Colors.primary010
  },
  titleContainer:{
    width: '100%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary001,
    elevation: 10
  },
  paragraphContainer:{
    flex: 1,
    alignItems: 'center',
   
  },
  paragraphTextTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  paragraphText:{
    color: 'white',
    fontSize: 18
  },
});