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
exports.Annotation = void 0;
var internal_1 = require("./internal");
var Annotation = /** @class */ (function (_super) {
    __extends(Annotation, _super);
    function Annotation(jsonld, options) {
        return _super.call(this, jsonld, options) || this;
    }
    Annotation.prototype.getBody = function () {
        var bodies = [];
        var body = this.getProperty("body");
        // todo: make this a generic "property that can be an object or array enumerator" util
        if (body) {
            if (Array.isArray(body)) {
                for (var i = 0; i < body.length; i++) {
                    var b = body[i];
                    if (b.items) {
                        for (var i_1 = 0; i_1 < b.items.length; i_1++) {
                            // todo: don't ignore that it's a choice. maybe add isChoice() to IAnnotationBody?
                            var c = b.items[i_1];
                            bodies.push(new internal_1.AnnotationBody(c, this.options));
                        }
                    }
                    else {
                        bodies.push(new internal_1.AnnotationBody(b, this.options));
                    }
                }
            }
            else if (body.items) {
                for (var i = 0; i < body.items.length; i++) {
                    var b = body.items[i];
                    bodies.push(new internal_1.AnnotationBody(b, this.options));
                }
            }
            else {
                bodies.push(new internal_1.AnnotationBody(body, this.options));
            }
        }
        return bodies;
    };
    Annotation.prototype.getBody3D = function () {
        var bodies = [].concat(this.getProperty("body"));
        if (bodies.length != 1)
            throw new Error("0 or multiple body items not supported");
        var raw_body = bodies[0];
        if (raw_body.type && raw_body.type === "SpecificResource")
            return new internal_1.SpecificResourceForBody(raw_body);
        else
            return new internal_1.AnnotationBody(raw_body);
    };
    Annotation.prototype.getMotivation = function () {
        var motivation = this.getProperty("motivation");
        if (motivation) {
            //const key: string | undefined = Object.keys(AnnotationMotivationEnum).find(k => AnnotationMotivationEnum[k] === motivation);
            return motivation;
        }
        return null;
    };
    // open annotation
    Annotation.prototype.getOn = function () {
        return this.getProperty("on");
    };
    Annotation.prototype.getTarget = function () {
        var rawTarget = this.getProperty("target");
        if (rawTarget.type && rawTarget.type == "SpecificResource") {
            //console.log("constructing SpecificResource "+ rawTarget);
            return new internal_1.SpecificResourceForTarget(rawTarget);
        }
        else if (typeof (rawTarget) === 'string') {
            //console.log("returning string target");
            return rawTarget;
        }
        else {
            throw new Error("unknown target specified");
        }
    };
    Annotation.prototype.getResource = function () {
        return new internal_1.Resource(this.getProperty("resource"), this.options);
    };
    return Annotation;
}(internal_1.ManifestResource));
exports.Annotation = Annotation;
//# sourceMappingURL=Annotation.js.map