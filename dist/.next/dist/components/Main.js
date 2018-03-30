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
var CustomHead_1 = require("../components/CustomHead");
var MainMenu_1 = require("../components/MainMenu");
var NewsSection = function NewsSection() {
    return React.createElement(semantic_ui_react_1.Container, null, React.createElement("h1", null, "NewsSection"));
};
var DashboardSection = function DashboardSection() {
    return React.createElement(semantic_ui_react_1.Container, null, React.createElement("h1", null, "DashboardSection"));
};
var Main = /** @class */function (_super) {
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
        return React.createElement("div", null, React.createElement(CustomHead_1.default, null), React.createElement(MainMenu_1.default, { role: this.props.role, page: this.state.page, onPageChange: this.handlePageChange, onLogout: this.props.onLogout }), React.createElement(semantic_ui_react_1.Container, { style: { marginTop: '5em' } }, this.state.page === 'news' && React.createElement(NewsSection, null), this.state.page === 'dashboard' && React.createElement(DashboardSection, null)));
    };
    return Main;
}(React.Component);
exports.default = Main;
//# sourceMappingURL=Main.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvY29tcG9uZW50cy9NYWluLmpzIl0sIm5hbWVzIjpbIl9fZXh0ZW5kcyIsImV4dGVuZFN0YXRpY3MiLCJfX3Byb3RvX18iLCJBcnJheSIsImQiLCJiIiwicCIsImhhc093blByb3BlcnR5IiwiX18iLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiUmVhY3QiLCJyZXF1aXJlIiwic2VtYW50aWNfdWlfcmVhY3RfMSIsIkN1c3RvbUhlYWRfMSIsIk1haW5NZW51XzEiLCJOZXdzU2VjdGlvbiIsImNyZWF0ZUVsZW1lbnQiLCJDb250YWluZXIiLCJEYXNoYm9hcmRTZWN0aW9uIiwiTWFpbiIsIl9zdXBlciIsInByb3BzIiwiX3RoaXMiLCJjYWxsIiwiaGFuZGxlUGFnZUNoYW5nZSIsInBhZ2UiLCJzZXRTdGF0ZSIsInN0YXRlIiwicmVuZGVyIiwiZGVmYXVsdCIsInJvbGUiLCJvblBhZ2VDaGFuZ2UiLCJvbkxvZ291dCIsInN0eWxlIiwibWFyZ2luVG9wIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSSxZQUFhLGFBQVEsVUFBVCxBQUFjLHlCQUEyQixBQUNyRDtRQUFJLDRDQUNDLEVBQUUsV0FBRixBQUFhLGdCQUFiLEFBQTZCLFNBQVMsVUFBQSxBQUFVLEdBQVYsQUFBYSxHQUFHLEFBQUU7VUFBQSxBQUFFLFlBQUYsQUFBYyxBQUFJO0FBRDNELEtBQUEsSUFFaEIsVUFBQSxBQUFVLEdBQVYsQUFBYSxHQUFHLEFBQUU7YUFBSyxJQUFMLEFBQVMsS0FBVCxBQUFjLEdBQUc7Z0JBQUksRUFBQSxBQUFFLGVBQU4sQUFBSSxBQUFpQixJQUFJLEVBQUEsQUFBRSxLQUFLLEVBQWpELEFBQTBDLEFBQU8sQUFBRTtBQUFLO0FBRjlFLEFBR0E7V0FBTyxVQUFBLEFBQVUsR0FBVixBQUFhLEdBQUcsQUFDbkI7c0JBQUEsQUFBYyxHQUFkLEFBQWlCLEFBQ2pCO2lCQUFBLEFBQVMsS0FBSyxBQUFFO2lCQUFBLEFBQUssY0FBTCxBQUFtQixBQUFJO0FBQ3ZDO1VBQUEsQUFBRSxZQUFZLE1BQUEsQUFBTSxPQUFPLHNCQUFiLEFBQWEsQUFBYyxNQUFNLEdBQUEsQUFBRyxZQUFZLEVBQWYsQUFBaUIsV0FBVyxJQUEzRSxBQUFjLEFBQTZELEFBQUksQUFDbEY7QUFKRCxBQUtIO0FBVEQsQUFBNEMsQ0FBQztBQVU3QyxPQUFBLEFBQU8sZUFBUCxBQUFzQixTQUF0QixBQUErQixjQUFjLEVBQUUsT0FBL0MsQUFBNkMsQUFBUztBQUN0RCxJQUFJLFFBQUosQUFBSSxBQUFRO0FBQ1osSUFBSSxzQkFBSixBQUFJLEFBQXNCO0FBQzFCLElBQUksZUFBZSxRQUFuQixBQUFtQixBQUFRO0FBQzNCLElBQUksYUFBYSxRQUFqQixBQUFpQixBQUFRO0FBQ3pCLElBQUksY0FBYyxTQUFkLEFBQWMsY0FBWSxBQUMxQjtXQUFPLE1BQUEsQUFBTSxjQUFjLG9CQUFwQixBQUF3QyxXQUF4QyxBQUFtRCxNQUN0RCxNQUFBLEFBQU0sY0FBTixBQUFvQixNQUFwQixBQUEwQixNQUQ5QixBQUFPLEFBQ0gsQUFBZ0MsQUFDdkM7QUFIRDtBQUlBLElBQUksbUJBQW1CLFNBQW5CLEFBQW1CLG1CQUFZLEFBQy9CO1dBQU8sTUFBQSxBQUFNLGNBQWMsb0JBQXBCLEFBQXdDLFdBQXhDLEFBQW1ELE1BQ3RELE1BQUEsQUFBTSxjQUFOLEFBQW9CLE1BQXBCLEFBQTBCLE1BRDlCLEFBQU8sQUFDSCxBQUFnQyxBQUN2QztBQUhEO0FBSUEsSUFBSSxPQUFPLHVCQUFlLEFBQVUsUUFBUSxBQUN4QztjQUFBLEFBQVUsTUFBVixBQUFnQixBQUNoQjthQUFBLEFBQVMsS0FBVCxBQUFjLE9BQU8sQUFDakI7WUFBSSxRQUFRLE9BQUEsQUFBTyxLQUFQLEFBQVksTUFBWixBQUFrQixVQUE5QixBQUF3QyxBQUN4QztjQUFBLEFBQU0sbUJBQW1CLFVBQUEsQUFBVSxNQUFNLEFBQ3JDO2tCQUFBLEFBQU07c0JBQU4sQUFBZSxBQUNMLEFBRWI7QUFIa0IsQUFDWDtBQUZSLEFBS0E7WUFBSSxPQUFKLEFBQVcsQUFDWDtjQUFBLEFBQU07a0JBQU4sQUFBYyxBQUNKLEFBRVY7QUFIYyxBQUNWO2VBRUosQUFBTyxBQUNWO0FBQ0Q7U0FBQSxBQUFLLFVBQUwsQUFBZSxTQUFTLFlBQVksQUFDaEM7ZUFBUSxNQUFBLEFBQU0sY0FBTixBQUFvQixPQUFwQixBQUEyQixNQUMvQixNQUFBLEFBQU0sY0FBYyxhQUFwQixBQUFpQyxTQUQ3QixBQUNKLEFBQTBDLE9BQzFDLE1BQUEsQUFBTSxjQUFjLFdBQXBCLEFBQStCLFNBQVMsRUFBRSxNQUFNLEtBQUEsQUFBSyxNQUFiLEFBQW1CLE1BQU0sTUFBTSxLQUFBLEFBQUssTUFBcEMsQUFBMEMsTUFBTSxjQUFjLEtBQTlELEFBQW1FLGtCQUFrQixVQUFVLEtBQUEsQUFBSyxNQUZ4SSxBQUVKLEFBQXdDLEFBQTBHLGFBQ2xKLE1BQUEsQUFBTSxjQUFjLG9CQUFwQixBQUF3QyxXQUFXLEVBQUUsT0FBTyxFQUFFLFdBQTlELEFBQW1ELEFBQVMsQUFBYSxXQUNyRSxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsVUFBVSxNQUFBLEFBQU0sY0FBTixBQUFvQixhQUR0RCxBQUNrQyxBQUFpQyxPQUMvRCxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsZUFBZSxNQUFBLEFBQU0sY0FBTixBQUFvQixrQkFML0QsQUFBUSxBQUdKLEFBRXVDLEFBQXNDLEFBQ3BGO0FBUEQsQUFRQTtXQUFBLEFBQU8sQUFDVjtBQXhCeUIsQ0FBQSxDQXdCeEIsTUF4QkYsQUFBMEIsQUF3QmxCO0FBQ1IsUUFBQSxBQUFRLFVBQVIsQUFBa0I7QUFDbEIiLCJmaWxlIjoiTWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3VuZ2tpbmcvUHJvamVjdHMvYm9vdHN0cmFwLW5leHRqcy10eXBlc2NyaXB0In0=