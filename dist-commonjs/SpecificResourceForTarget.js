"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecificResourceForTarget = void 0;
var internal_1 = require("./internal");
/**
    This (subclass/implementation) of SpecificResource
    satisfies requirements to the target of a 3D annotation
    
    It will have a PointSelector as a selector property
    and a string (the URI of a Scene ) as its source
*/
var SpecificResourceForTarget = /** @class */ (function (_super) {
    __extends(SpecificResourceForTarget, _super);
    function SpecificResourceForTarget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /*
    options: IManifestoOptions;
    
    isSpecificResource : boolean = true;
  
    constructor(jsonld: any, options?: IManifestoOptions) {
      super(jsonld);
      this.options = <IManifestoOptions>options;
    }
    */
    SpecificResourceForTarget.prototype.getSource = function () {
        var raw = this.getProperty("source");
        if (raw) {
            var item = ([].concat(raw))[0];
            if (item) {
                if (typeof (item) === "string")
                    return item;
                else {
                    var id = item["id"];
                    if (typeof (id) === "string")
                        return id;
                }
            }
        }
        throw new Error("cannot resolve Source " + JSON.stringify(raw));
    };
    /**
    Developer note: Not allowing the getSelector to be undefined
    */
    SpecificResourceForTarget.prototype.getSelector = function () {
        var raw = this.getProperty("selector");
        if (raw) {
            var item = ([].concat(raw))[0];
            if (item) {
                if (item["type"] === "PointSelector")
                    return new internal_1.PointSelector(item);
            }
        }
        throw new Error("unable to resolve SpecificResource selector " + JSON.stringify(this.__jsonld));
    };
    return SpecificResourceForTarget;
}(internal_1.SpecificResource));
exports.SpecificResourceForTarget = SpecificResourceForTarget;
//# sourceMappingURL=SpecificResourceForTarget.js.map