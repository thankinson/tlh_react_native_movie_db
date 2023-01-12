import {StyleSheet} from "react-native";
// Ui components
import FlexScreen from "../Components/Ui/FlexScreen";
import Buttons from "../Components/Ui/Button";
// text componants
import TextTitle from "../Components/textComponents/textTitle";

export default function TestScreen({navigation}){

  function onPressHandler(){
    navigation.navigate('Home')
  }
  return (
    <FlexScreen>
      <TextTitle>Test Screen</TextTitle>
        <Buttons onPress={onPressHandler}>Home</Buttons>
    </FlexScreen>
  )
};

const styles = StyleSheet.create({

})