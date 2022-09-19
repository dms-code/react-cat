import React from 'react'
import { View, Text } from "react-native";
import { CatController } from "../../controller/cat_controller";

export class HomeView extends React.Component {

    constructor(props){
        super(props);

        new CatController().getRandomCat().then((x)=>{
          this.setState({
            data: JSON.stringify(x)
          })
        });


        this.state = { data: "Loading..." }
    }
    
    render(){
      return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{this.state.data}</Text>
          </View>
        );
    }

}