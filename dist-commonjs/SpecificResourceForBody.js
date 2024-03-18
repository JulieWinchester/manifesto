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
exports.SpecificResourceForBody = void 0;
var internal_1 = require("./internal");
/**
    This (subclass/implementation) of SpecificResource
    satisfies requirements of the body of a 3D annotation
    
    
*/
var SpecificResourceForBody = /** @class */ (function (_super) {
    __extends(SpecificResourceForBody, _super);
    function SpecificResourceForBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpecificResourceForBody.prototype.getSource = function () {
        var raw = this.getProperty("source");
        if (raw) {
            var item = ([].concat(raw))[0];
            if (item) {
                return new internal_1.AnnotationBody(item);
            }
        }
        throw new Error("cannot resolve Source " + JSON.stringify(raw));
    };
    SpecificResourceForBody.prototype.getTransform = function () {
        var retVal = [];
        var transformItems = this.getProperty("transform");
        for (var i = 0; i < transformItems.length; ++i) {
            var transformItem = transformItems[i];
            retVal.push(internal_1.TransformParser.BuildFromJson(transformItem));
        }
        return retVal;
    };
    SpecificResourceForBody.prototype.getSelector = function () {
        return undefined;
    };
    return SpecificResourceForBody;
}(internal_1.SpecificResource));
exports.SpecificResourceForBody = SpecificResourceForBody;
//# sourceMappingURL=SpecificResourceForBody.js.map