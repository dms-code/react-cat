
export class JSONResponse {

    constructor(data=null, error=null){
      this.data = data;
      this.error = error;
    }

    hasError(){
      return this.error != null;
    }
}

export async function getData(url = ""){
    
    if(url == "") 
      return new JSONResponse(error="Url can't be null.");

    const response = await fetch(url);

    if(response.status == 200)
      return new JSONResponse(data=await response.json());
    else
      return new JSONResponse(error=response.error);
}