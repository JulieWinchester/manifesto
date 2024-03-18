import { AnnotationMotivation } from "@iiif/vocabulary/dist-commonjs";
import { AnnotationBody, IManifestoOptions, ManifestResource, Resource, SpecificResource } from "./internal";
export declare class Annotation extends ManifestResource {
    constructor(jsonld: any, options: IManifestoOptions);
    getBody(): AnnotationBody[];
    getBody3D(): AnnotationBody | SpecificResource;
    getMotivation(): AnnotationMotivation | null;
    getOn(): string;
    getTarget(): string | SpecificResource;
    getResource(): Resource;
}
