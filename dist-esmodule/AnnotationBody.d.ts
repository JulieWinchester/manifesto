import { ExternalResourceType, MediaType } from "@iiif/vocabulary/dist-commonjs";
import { IManifestoOptions, ManifestResource } from "./internal";
export declare class AnnotationBody extends ManifestResource {
    constructor(jsonld?: any, options?: IManifestoOptions);
    getFormat(): MediaType | null;
    getType(): ExternalResourceType | null;
    getWidth(): number;
    getHeight(): number;
    isModel: boolean | undefined;
    isLight: boolean | undefined;
}
