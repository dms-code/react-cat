import { CaasAPI } from "../datasource/remote/caasapi/caasapi";
import { JSONResponse } from "../util/network";
import { Cat } from '../model/cat.js'

export class CatRepository{

    constructor(){
        this.remoteDatasource = new CaasAPI();
    }

    getRandomCat = async () => {

        let dto = await this.remoteDatasource.getRandomCat();

        if(!dto.hasError())
            return new JSONResponse(data=new Cat(dto.data.url));
        else            
            return new JSONResponse(error=data.error);

    }

}