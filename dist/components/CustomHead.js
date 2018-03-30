"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var head_1 = require("../next/head");
var CustomHead = function () {
    return React.createElement(head_1.default, null,
        React.createElement("link", { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' }),
        React.createElement("link", { rel: 'stylesheet', href: 'https://unpkg.com/react-table@latest/react-table.css' }),
        React.createElement("script", { src: "/static/script/azure-storage.common.min.js" }),
        React.createElement("script", { src: "/static/script/azure-storage.blob.min.js" }),
        React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }));
};
exports.default = CustomHead;
//# sourceMappingURL=CustomHead.js.map