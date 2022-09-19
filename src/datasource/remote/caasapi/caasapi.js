import { getData } from '../../../util/network.js'

export class CaasAPI {

    constructor(){
        this.url = "https://cataas.com/cat?json=true";
    }

    async getRandomCat() {
        
        let data =  await getData(this.url);

        

        return data;

    }

    

}
