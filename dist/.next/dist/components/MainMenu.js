"use strict";

var _create = require("babel-runtime/core-js/object/create");

var _create2 = _interopRequireDefault(_create);

var _setPrototypeOf = require("babel-runtime/core-js/object/set-prototype-of");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = _setPrototypeOf2.default || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? (0, _create2.default)(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var MainMenu = /** @class */function (_super) {
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
        return React.createElement(semantic_ui_react_1.Sidebar, { as: semantic_ui_react_1.Menu, animation: 'push', direction: 'top', visible: true, inverted: true }, React.createElement(semantic_ui_react_1.Container, null, React.createElement(semantic_ui_react_1.Menu.Item, { header: true }, "Backoffice", React.createElement(semantic_ui_react_1.Label, { color: "green" }, " Server Online ")), React.createElement(semantic_ui_react_1.Menu.Item, { name: 'news', color: 'red', active: activeItem === 'news', onClick: this.handleMenuItemClick }, "\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23"), this.props.role === 'admin' && React.createElement(semantic_ui_react_1.Menu.Item, { name: 'dashboard', color: 'red', active: activeItem === 'dashboard', onClick: this.handleMenuItemClick }, "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E01\u0E21"), React.createElement(semantic_ui_react_1.Menu.Item, { position: 'right' }, React.createElement(semantic_ui_react_1.Button, { color: 'red', onClick: this.props.onLogout }, "Logout"))));
    };
    return MainMenu;
}(React.Component);
exports.default = MainMenu;
//# sourceMappingURL=MainMenu.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvY29tcG9uZW50cy9NYWluTWVudS5qcyJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwiX19wcm90b19fIiwiQXJyYXkiLCJkIiwiYiIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsIl9fIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIlJlYWN0IiwicmVxdWlyZSIsInNlbWFudGljX3VpX3JlYWN0XzEiLCJNYWluTWVudSIsIl9zdXBlciIsInByb3BzIiwiX3RoaXMiLCJjYWxsIiwiaGFuZGxlTWVudUl0ZW1DbGljayIsImV2ZW50IiwiX2EiLCJuYW1lIiwib25QYWdlQ2hhbmdlIiwic3RhdGUiLCJhY3RpdmVJdGVtIiwicmVuZGVyIiwicGFnZSIsImNyZWF0ZUVsZW1lbnQiLCJTaWRlYmFyIiwiYXMiLCJNZW51IiwiYW5pbWF0aW9uIiwiZGlyZWN0aW9uIiwidmlzaWJsZSIsImludmVydGVkIiwiQ29udGFpbmVyIiwiSXRlbSIsImhlYWRlciIsIkxhYmVsIiwiY29sb3IiLCJhY3RpdmUiLCJvbkNsaWNrIiwicm9sZSIsInBvc2l0aW9uIiwiQnV0dG9uIiwib25Mb2dvdXQiLCJDb21wb25lbnQiLCJkZWZhdWx0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSSxZQUFhLGFBQVEsVUFBVCxBQUFjLHlCQUEyQixBQUNyRDtRQUFJLDRDQUNDLEVBQUUsV0FBRixBQUFhLGdCQUFiLEFBQTZCLFNBQVMsVUFBQSxBQUFVLEdBQVYsQUFBYSxHQUFHLEFBQUU7VUFBQSxBQUFFLFlBQUYsQUFBYyxBQUFJO0FBRDNELEtBQUEsSUFFaEIsVUFBQSxBQUFVLEdBQVYsQUFBYSxHQUFHLEFBQUU7YUFBSyxJQUFMLEFBQVMsS0FBVCxBQUFjLEdBQUc7Z0JBQUksRUFBQSxBQUFFLGVBQU4sQUFBSSxBQUFpQixJQUFJLEVBQUEsQUFBRSxLQUFLLEVBQWpELEFBQTBDLEFBQU8sQUFBRTtBQUFLO0FBRjlFLEFBR0E7V0FBTyxVQUFBLEFBQVUsR0FBVixBQUFhLEdBQUcsQUFDbkI7c0JBQUEsQUFBYyxHQUFkLEFBQWlCLEFBQ2pCO2lCQUFBLEFBQVMsS0FBSyxBQUFFO2lCQUFBLEFBQUssY0FBTCxBQUFtQixBQUFJO0FBQ3ZDO1VBQUEsQUFBRSxZQUFZLE1BQUEsQUFBTSxPQUFPLHNCQUFiLEFBQWEsQUFBYyxNQUFNLEdBQUEsQUFBRyxZQUFZLEVBQWYsQUFBaUIsV0FBVyxJQUEzRSxBQUFjLEFBQTZELEFBQUksQUFDbEY7QUFKRCxBQUtIO0FBVEQsQUFBNEMsQ0FBQztBQVU3QyxPQUFBLEFBQU8sZUFBUCxBQUFzQixTQUF0QixBQUErQixjQUFjLEVBQUUsT0FBL0MsQUFBNkMsQUFBUztBQUN0RCxJQUFJLFFBQUosQUFBSSxBQUFRO0FBQ1osSUFBSSxzQkFBSixBQUFJLEFBQXNCO0FBQzFCLElBQUksV0FBVyx1QkFBZSxBQUFVLFFBQVEsQUFDNUM7Y0FBQSxBQUFVLFVBQVYsQUFBb0IsQUFDcEI7YUFBQSxBQUFTLFNBQVQsQUFBa0IsT0FBTyxBQUNyQjtZQUFJLFFBQVEsT0FBQSxBQUFPLEtBQVAsQUFBWSxNQUFaLEFBQWtCLFVBQTlCLEFBQXdDLEFBQ3hDO2NBQUEsQUFBTSxzQkFBc0IsVUFBQSxBQUFVLE9BQVYsQUFBaUIsSUFBSSxBQUM3QztnQkFBSSxPQUFPLEdBQVgsQUFBYyxBQUNkO2tCQUFBLEFBQU0sTUFBTixBQUFZLGFBQVosQUFBeUIsQUFDNUI7QUFIRCxBQUlBO2NBQUEsQUFBTTt3QkFBTixBQUFjLEFBQ0UsQUFFaEI7QUFIYyxBQUNWO2VBRUosQUFBTyxBQUNWO0FBQ0Q7YUFBQSxBQUFTLFVBQVQsQUFBbUIsU0FBUyxZQUFZLEFBQ3BDO1lBQUksYUFBYSxLQUFBLEFBQUssTUFBdEIsQUFBNEIsQUFDNUI7ZUFBUSxNQUFBLEFBQU0sY0FBYyxvQkFBcEIsQUFBd0MsU0FBUyxFQUFFLElBQUksb0JBQU4sQUFBMEIsTUFBTSxXQUFoQyxBQUEyQyxRQUFRLFdBQW5ELEFBQThELE9BQU8sU0FBckUsQUFBOEUsTUFBTSxVQUFySSxBQUFpRCxBQUE4RixRQUNuSixNQUFBLEFBQU0sY0FBYyxvQkFBcEIsQUFBd0MsV0FBeEMsQUFBbUQsTUFDL0MsTUFBQSxBQUFNLGNBQWMsb0JBQUEsQUFBb0IsS0FBeEMsQUFBNkMsTUFBTSxFQUFFLFFBQXJELEFBQW1ELEFBQVUsUUFBN0QsQUFDSSxjQUNBLE1BQUEsQUFBTSxjQUFjLG9CQUFwQixBQUF3QyxPQUFPLEVBQUUsT0FBakQsQUFBK0MsQUFBUyxXQUhoRSxBQUNJLEFBRUksQUFBbUUscUJBQ3ZFLE1BQUEsQUFBTSxjQUFjLG9CQUFBLEFBQW9CLEtBQXhDLEFBQTZDLE1BQU0sRUFBRSxNQUFGLEFBQVEsUUFBUSxPQUFoQixBQUF1QixPQUFPLFFBQVEsZUFBdEMsQUFBcUQsUUFBUSxTQUFTLEtBQXpILEFBQW1ELEFBQTJFLHVCQUpsSSxBQUlJLEFBQXFKLCtDQUNySixLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsV0FBVyxNQUFBLEFBQU0sY0FBYyxvQkFBQSxBQUFvQixLQUF4QyxBQUE2QyxNQUFNLEVBQUUsTUFBRixBQUFRLGFBQWEsT0FBckIsQUFBNEIsT0FBTyxRQUFRLGVBQTNDLEFBQTBELGFBQWEsU0FBUyxLQUFuSSxBQUFtRCxBQUFxRix1QkFMM0ssQUFLbUMsQUFBK0osMkRBQzlMLE1BQUEsQUFBTSxjQUFjLG9CQUFBLEFBQW9CLEtBQXhDLEFBQTZDLE1BQU0sRUFBRSxVQUFyRCxBQUFtRCxBQUFZLFdBQzNELE1BQUEsQUFBTSxjQUFjLG9CQUFwQixBQUF3QyxRQUFRLEVBQUUsT0FBRixBQUFTLE9BQU8sU0FBUyxLQUFBLEFBQUssTUFBOUUsQUFBZ0QsQUFBb0MsWUFSaEcsQUFBUSxBQUNKLEFBTUksQUFDSSxBQUFnRyxBQUMvRztBQVhELEFBWUE7V0FBQSxBQUFPLEFBQ1Y7QUExQjZCLENBQUEsQ0EwQjVCLE1BMUJGLEFBQThCLEFBMEJ0QjtBQUNSLFFBQUEsQUFBUSxVQUFSLEFBQWtCO0FBQ2xCIiwiZmlsZSI6Ik1haW5NZW51LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rdW5na2luZy9Qcm9qZWN0cy9ib290c3RyYXAtbmV4dGpzLXR5cGVzY3JpcHQifQ==