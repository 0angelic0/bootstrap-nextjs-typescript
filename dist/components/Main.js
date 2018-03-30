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
var CustomHead_1 = require("../components/CustomHead");
var MainMenu_1 = require("../components/MainMenu");
var NewsSection = function () {
    return React.createElement(semantic_ui_react_1.Container, null,
        React.createElement("h1", null, "NewsSection"));
};
var DashboardSection = function () {
    return React.createElement(semantic_ui_react_1.Container, null,
        React.createElement("h1", null, "DashboardSection"));
};
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main(props) {
        var _this = _super.call(this, props) || this;
        _this.handlePageChange = function (page) {
            _this.setState({
                page: page
            });
        };
        var page = 'news';
        _this.state = {
            page: page
        };
        return _this;
    }
    Main.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(CustomHead_1.default, null),
            React.createElement(MainMenu_1.default, { role: this.props.role, page: this.state.page, onPageChange: this.handlePageChange, onLogout: this.props.onLogout }),
            React.createElement(semantic_ui_react_1.Container, { style: { marginTop: '5em' } },
                this.state.page === 'news' && React.createElement(NewsSection, null),
                this.state.page === 'dashboard' && React.createElement(DashboardSection, null))));
    };
    return Main;
}(React.Component));
exports.default = Main;
//# sourceMappingURL=Main.js.map