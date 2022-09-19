import { CaasAPI } from './../datasource/remote/caasapi/caasapi.js'

export class CatController {

    async getRandomCat(){
        return await new CaasAPI().getRandomCat();
    }


}