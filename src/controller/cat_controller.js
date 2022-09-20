import { CatRepository } from '../repository/cat_repository.js';

export class CatController {

    constructor(){
        this.repo = new CatRepository();
    }

    getRandomCat(){
        return new Promise(async (resolve, reject)=>{

            let catData = await this.repo.getRandomCat();

            if(!catData.hasError())
                resolve(catData.data.url);
            else
                reject(catData.error);       
             
        });
    }


}