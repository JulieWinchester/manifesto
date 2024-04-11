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
exports.SpecificResource = void 0;
var internal_1 = require("./internal");
/**
    Developer note: This implementation does not strictly adhere
    to the description of SpecificResource in the Web Annotation Model
    document https://www.w3.org/TR/annotation-model/
    section 4 : https://www.w3.org/TR/annotation-model/#specific-resources
    
    In particular, this class is abstract and the 3D subclasses
    will have distinct function signatures
*/
var SpecificResource = /** @class */ (function (_super) {
    __extends(SpecificResource, _super);
    function SpecificResource(jsonld, options) {
        var _this = _super.call(this, jsonld, options) || this;
        _this.isSpecificResource = true;
        return _this;
    }
    ;
    SpecificResource.prototype.getSource = function () {
        var raw = this.getPropertyAsObject("source");
        if (raw.isIRI)
            return raw;
        if (raw) {
            var item = ([].concat(raw))[0];
            if (item) {
                return internal_1.AnnotationBodyParser.BuildFromJson(item, this.options);
            }
        }
        throw new Error("cannot resolve Source " + JSON.stringify(raw));
    };
    SpecificResource.prototype.getSelector = function () {
        var raw = this.getProperty("selector");
        if (raw) {
            var item = ([].concat(raw))[0];
            if (item) {
                if (item["type"] === "PointSelector")
                    return new internal_1.PointSelector(item);
            }
            throw new Error("unable to resolve SpecificResource selector " + JSON.stringify(this.__jsonld));
        }
        return null;
    };
    ;
    Object.defineProperty(SpecificResource.prototype, "Selector", {
        get: function () { return this.getSelector(); },
        enumerable: false,
        configurable: true
    });
    SpecificResource.prototype.getTransform = function () {
        var retVal = [];
        var transformItems = this.getProperty("transform");
        for (var i = 0; i < transformItems.length; ++i) {
            var transformItem = transformItems[i];
            retVal.push(internal_1.TransformParser.BuildFromJson(transformItem));
        }
        return retVal;
    };
    ;
    Object.defineProperty(SpecificResource.prototype, "Transform", {
        get: function () { return this.getTransform(); },
        enumerable: false,
        configurable: true
    });
    return SpecificResource;
}(internal_1.ManifestResource));
exports.SpecificResource = SpecificResource;
//# sourceMappingURL=SpecificResource.js.map