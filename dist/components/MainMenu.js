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
var MainMenu = /** @class */ (function (_super) {
    __extends(MainMenu, _super);
    function MainMenu(props) {
        var _this = _super.call(this, props) || this;
        _this.handleMenuItemClick = function (event, _a) {
            var name = _a.name;
            _this.props.onPageChange(name);
        };
        _this.state = {
            activeItem: ''
        };
        return _this;
    }
    MainMenu.prototype.render = function () {
        var activeItem = this.props.page;
        return (React.createElement(semantic_ui_react_1.Sidebar, { as: semantic_ui_react_1.Menu, animation: 'push', direction: 'top', visible: true, inverted: true },
            React.createElement(semantic_ui_react_1.Container, null,
                React.createElement(semantic_ui_react_1.Menu.Item, { header: true },
                    "Backoffice",
                    React.createElement(semantic_ui_react_1.Label, { color: "green" }, " Server Online ")),
                React.createElement(semantic_ui_react_1.Menu.Item, { name: 'news', color: 'red', active: activeItem === 'news', onClick: this.handleMenuItemClick }, "\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23"),
                this.props.role === 'admin' && React.createElement(semantic_ui_react_1.Menu.Item, { name: 'dashboard', color: 'red', active: activeItem === 'dashboard', onClick: this.handleMenuItemClick }, "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E01\u0E21"),
                React.createElement(semantic_ui_react_1.Menu.Item, { position: 'right' },
                    React.createElement(semantic_ui_react_1.Button, { color: 'red', onClick: this.props.onLogout }, "Logout")))));
    };
    return MainMenu;
}(React.Component));
exports.default = MainMenu;
//# sourceMappingURL=MainMenu.js.map