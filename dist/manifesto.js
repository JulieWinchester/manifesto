var Canvas = (function () {
    function Canvas() {
    }
    return Canvas;
})();
var Manifest = (function () {
    function Manifest() {
    }
    return Manifest;
})();
var http = require("http");
var url = require("url");
module.exports = {
    manifest: null,
    // todo: remove
    sayHello: function (msg) {
        return "hello " + msg;
    },
    load: function (manifestUri, callback) {
        var _this = this;
        var u = url.parse(manifestUri);
        var fetch = http.request({
            host: u.hostname,
            port: u.port || 80,
            path: u.pathname,
            method: "GET",
            withCredentials: false
        }, function (res) {
            var result = "";
            res.on('data', function (chunk) {
                result += chunk;
            });
            res.on('end', function () {
                _this.parse(result, callback);
            });
        });
        fetch.end();
    },
    // todo
    parse: function (manifest, callback) {
        callback(manifest);
    }
};
var Sequence = (function () {
    function Sequence() {
    }
    return Sequence;
})();
var Service = (function () {
    function Service() {
    }
    return Service;
})();
var Structure = (function () {
    function Structure() {
    }
    return Structure;
})();
var Thumb = (function () {
    function Thumb(index, uri, label, width, height, visible) {
        this.index = index;
        this.uri = uri;
        this.label = label;
        this.width = width;
        this.height = height;
        this.visible = visible;
    }
    return Thumb;
})();
var TreeNode = (function () {
    function TreeNode(label, data) {
        this.label = label;
        this.data = data;
        this.nodes = [];
        if (!data)
            this.data = {};
    }
    TreeNode.prototype.addNode = function (node) {
        this.nodes.push(node);
        node.parentNode = this;
    };
    return TreeNode;
})();