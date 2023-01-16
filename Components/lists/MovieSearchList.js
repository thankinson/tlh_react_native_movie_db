import { ScrollView, StyleSheet, View, FlatList } from "react-native";

import Buttons from "../Ui/Button";

export default function MovieSearchList({navigateTo, data}){

  return(
    <View>
      <FlatList 
        data={data}
        renderItem={({item})=>
          <Buttons 
            onPress={()=> navigateTo(item)} 
            textSize={styles.textSize} 
            style={styles.buttonStyle} >
            {item.original_title}
          </Buttons>}
      keyExtractor={item => item.id}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    // flexGrow: 1,
    alignItems: 'center',
    width: '100%'
  },
  // screen:{
  //   width: '100%',
  //   alignItems: 'center',
  // },
  textSize:{
    fontSize: 12
  },

});