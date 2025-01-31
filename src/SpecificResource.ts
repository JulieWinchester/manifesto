import {
  IManifestoOptions,
  JSONLDResource
} from "./internal";


/**
    Developer note: This implementation does not strictly adhere
    to the description of SpecificResource in the Web Annotation Model
    document https://www.w3.org/TR/annotation-model/
    section 4 : https://www.w3.org/TR/annotation-model/#specific-resources
    
    In particular, this class is abstract and the 3D subclasses 
    will have distinct function signatures
*/
export abstract class SpecificResource extends JSONLDResource  {

  options: IManifestoOptions;
  
  isSpecificResource : boolean = true;

  constructor(jsonld: any, options?: IManifestoOptions) {
    super(jsonld);
    this.options = <IManifestoOptions>options;
  }
  
  
  
  /*
  getSource() : string 
  {
  	const raw =  this.getProperty("source");
  	if (raw)
  	{
  	    var item = ([].concat(raw))[0];
  	    if (item)
  	    {
  	        if (typeof(item) === "string")  return item;
  	        else
  	        {
  	            const id = item["id"];
  	            if (typeof(id) === "string") return id;
  	        } 
  	    }
  	}
  	throw new Error("cannot resolve Source " + JSON.stringify(raw));
  }
  */
  
  /*
  getSelector() : PointSelector | undefined
  {
  	const raw =  this.getProperty("selector");  
  	if (raw){
        var item = ([].concat(raw))[0];
    
        if (item)
        {
            if (item["type"] === "PointSelector") return new PointSelector(item);
            else
            {
                throw new Error("unable to resolve SpecificResource selector " + JSON.stringify(item));
            }
        }
        return undefined;
  	}
  	else{
  	    return undefined;  	
  	}
  	
  }
  */
  
  /*
  getTransform() : Transform[]{
    var retVal: Transform[] = [];
    
    return retVal;
  }
  */
  
}