import {StyleSheet, View} from "react-native";

// Ui components
import FlexScreen from "../Components/Ui/FlexScreen";
// text componants
import TextTitle from "../Components/textComponents/textTitle";
import Paragraph from "../Components/textComponents/Paragraph";

export default function HomeScreen({navigation}){

  return (
    <FlexScreen style={styles.screen}>
      <TextTitle>Mobile MovieDB</TextTitle>
      <Paragraph>Welcome to my Test app!</Paragraph>
      <Paragraph>This app is designed to be a base template to build a react-native app with navigation between pages. </Paragraph>
      <Paragraph>Swipe right from the left edge to open navigation draw.</Paragraph>
    </FlexScreen>
  )
};

const styles = StyleSheet.create({
  screen:{
    justifyContent: 'flex-start'
  }
});