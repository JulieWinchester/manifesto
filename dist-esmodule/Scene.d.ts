import { Annotation, IManifestoOptions, ManifestResource } from "./internal";
export declare class Scene extends ManifestResource {
    constructor(jsonld: any, options: IManifestoOptions);
    getContent(): Annotation[];
    getBackgroundColor(): object | undefined;
}
