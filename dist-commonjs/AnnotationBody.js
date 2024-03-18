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
exports.AnnotationBody = void 0;
var dist_commonjs_1 = require("@iiif/vocabulary/dist-commonjs");
var internal_1 = require("./internal");
var AnnotationBody = /** @class */ (function (_super) {
    __extends(AnnotationBody, _super);
    function AnnotationBody(jsonld, options) {
        var _this = _super.call(this, jsonld, options) || this;
        _this.isModel = (_this.getProperty('type') == dist_commonjs_1.ExternalResourceType.MODEL);
        return _this;
    }
    AnnotationBody.prototype.getFormat = function () {
        var format = this.getProperty("format");
        console.log("getFormat() : format is " + format);
        if (format) {
            return internal_1.Utils.getMediaType(format);
        }
        return null;
    };
    AnnotationBody.prototype.getType = function () {
        var type = this.getProperty("type");
        if (type) {
            return (internal_1.Utils.normaliseType(this.getProperty("type")));
        }
        return null;
    };
    AnnotationBody.prototype.getWidth = function () {
        return this.getProperty("width");
    };
    AnnotationBody.prototype.getHeight = function () {
        return this.getProperty("height");
    };
    return AnnotationBody;
}(internal_1.ManifestResource));
exports.AnnotationBody = AnnotationBody;
//# sourceMappingURL=AnnotationBody.js.map