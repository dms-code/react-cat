
export class Response {

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
      return Response(error="Url can't be null.");

    const response = await fetch(url);

    if(response.status == 200)
      return Response(data=await response.json());
    else
      return Response(error=response.error);
}