

export class CaasDTO{

    from(jsonObject){
        this.id=jsonObject.id;
        this.url=jsonObject.url;
        this.tags=jsonObject.tags;        
    }

}