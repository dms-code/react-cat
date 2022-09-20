import { getData, JSONResponse } from '../../../util/network.js'
import { CaasDTO } from './caas_dto.js';

export class CaasAPI {

    constructor(){
        this.url = "https://cataas.com";
    }

    async getRandomCat() {
        
        let resp =  await getData(this.url+"/cat/gif?json=true");

        if(!resp.hasError()){
            let dto = new CaasDTO();
            dto.from(resp.data);
            dto.url = this.url + dto.url;
            return new JSONResponse(data=dto);
        }
        else{
            return resp;
        }
    }

    

}
