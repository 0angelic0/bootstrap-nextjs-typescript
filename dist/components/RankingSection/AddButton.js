"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var PrizeEditor_1 = require("./PrizeEditor");
///////////////////////////////////////////////////////////////////////////////
// Modal
///////////////////////////////////////////////////////////////////////////////
var AddButton = /** @class */ (function (_super) {
    __extends(AddButton, _super);
    function AddButton(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOpen = function (event) {
            _this.setState({
                open: true
            });
        };
        _this.handleClose = function (event) {
            _this.setState({
                open: false
            });
        };
        _this.handleEditor = function (news) {
            _this.setState({
                open: false
            });
            _this.props.handleEditor(news);
        };
        _this.state = {
            open: false
        };
        return _this;
    }
    AddButton.prototype.render = function () {
        return React.createElement(semantic_ui_react_1.Modal, { closeOnEscape: true, closeOnDimmerClick: true, trigger: React.createElement(semantic_ui_react_1.Button, { basic: true, color: "green", onClick: this.handleOpen }, "\u0E40\u0E1E\u0E34\u0E48\u0E21"), onClose: this.handleClose, closeIcon: true },
            React.createElement(semantic_ui_react_1.Modal.Header, null, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25"),
            React.createElement(semantic_ui_react_1.Modal.Content, null,
                React.createElement(PrizeEditor_1.default, { handleEditor: this.handleEditor, gameid: this.props.gameid })));
    };
    return AddButton;
}(React.Component));
exports.default = AddButton;
//# sourceMappingURL=AddButton.js.map