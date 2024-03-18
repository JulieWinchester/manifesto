import { SpecificResource, AnnotationBody, Transform } from "./internal";
/**
    This (subclass/implementation) of SpecificResource
    satisfies requirements of the body of a 3D annotation
    
    
*/
export declare class SpecificResourceForBody extends SpecificResource {
    getSource(): AnnotationBody;
    getTransform(): Transform[];
    getSelector(): undefined;
}
