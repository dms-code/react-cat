import React from 'react'
import { View, Text } from "react-native";
import { CatController } from "../../controller/cat_controller";
import { GifLoader } from '../components/gif_loader.js';

export class HomeView extends React.Component {

    constructor(props){
        super(props);

        this.controller = new  CatController();
        this.state = { data: "Loading..." }
    }

    componentDidMount(){
      
      this.onReload();

    }

    onReload = ()=>{

      this.controller.getRandomCat().then(url=>{

        this.setState({url: url});
    

      }).catch(err=>{

        this.setState({error: true});

      });

    }
    
    render(){
      return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <GifLoader url={this.state.url} onReload={this.onReload} > </GifLoader>
          </View>
        );
    }

}