import { SpecificResource, PointSelector } from "./internal";
/**
    This (subclass/implementation) of SpecificResource
    satisfies requirements to the target of a 3D annotation
    
    It will have a PointSelector as a selector property
    and a string (the URI of a Scene ) as its source
*/
export declare class SpecificResourceForTarget extends SpecificResource {
    getSource(): string;
    /**
    Developer note: Not allowing the getSelector to be undefined
    */
    getSelector(): PointSelector;
}
