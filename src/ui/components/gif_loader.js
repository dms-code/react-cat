import React from 'react'
import { View, Image, Button } from "react-native";

export function GifLoader (props) {

    const {
        url = "",
        onReload = (_value) => {}
      } = props;


      
    return(
        <View>
            <Image style={{width: 200, height: 80, marginBottom:50}} 
                   loadingIndicatorSource={require('../assets/img/cat.gif')} 
                   source={{uri:url}}/>
                   
            <Button title='Reload' onPress={onReload}></Button>
        </View>
    )    

}