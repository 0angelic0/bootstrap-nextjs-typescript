"use strict";

var _iterator = require("babel-runtime/core-js/symbol/iterator");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = require("babel-runtime/core-js/symbol");

var _symbol2 = _interopRequireDefault(_symbol);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

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
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
    return new (P || (P = _promise2.default))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
    var _ = { label: 0, sent: function sent() {
            if (t[0] & 1) throw t[1];return t[1];
        }, trys: [], ops: [] },
        f,
        y,
        t,
        g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof _symbol2.default === "function" && (g[_iterator2.default] = function () {
        return this;
    }), g;
    function verb(n) {
        return function (v) {
            return step([n, v]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) {
            try {
                if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [0, t.value];
                switch (op[0]) {
                    case 0:case 1:
                        t = op;break;
                    case 4:
                        _.label++;return { value: op[1], done: false };
                    case 5:
                        _.label++;y = op[1];op = [0];continue;
                    case 7:
                        op = _.ops.pop();_.trys.pop();continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];t = op;break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];_.ops.push(op);break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [6, e];y = 0;
            } finally {
                f = t = 0;
            }
        }if (op[0] & 5) throw op[1];return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var axios_1 = require("axios");
var router_1 = require("../../next/router");
var CustomHead_1 = require("../../components/CustomHead");
var Cookies = require("js-cookie");
var config = require("../../config");
var PageLogin = /** @class */function (_super) {
    __extends(PageLogin, _super);
    function PageLogin(props) {
        var _this = _super.call(this, props) || this;
        _this.handleSubmit = function (event) {
            var _a = _this.state,
                username = _a.username,
                password = _a.password;
            if (!username || !password) {
                _this.setState({
                    errorMessage: 'Please enter both Username and Password.'
                });
            } else {
                _this.setState({
                    errorMessage: ''
                });
                _this.login(_this.state);
            }
        };
        _this.handleChangeUsername = function (event) {
            _this.setState({
                username: event.currentTarget.value
            });
        };
        _this.handleChangePassword = function (event) {
            _this.setState({
                password: event.currentTarget.value
            });
        };
        _this.state = {
            username: '',
            password: '',
            errorMessage: ''
        };
        return _this;
    }
    PageLogin.prototype.componentWillMount = function () {
        this.redirectToHomeIfAlreadyLoggedIn();
    };
    PageLogin.prototype.redirectToHomeIfAlreadyLoggedIn = function () {
        if (Cookies.get(config.jwt.cookieName) != undefined) {
            router_1.default.push({
                pathname: config.path.home
            });
        }
    };
    PageLogin.prototype.login = function (_a) {
        var username = _a.username,
            password = _a.password;
        return __awaiter(this, void 0, void 0, function () {
            var res, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2,, 3]);
                        return [4 /*yield*/, axios_1.default.post(window.location.origin + '/api/auth', { username: username, password: password })];
                    case 1:
                        res = _b.sent();
                        if (res.data.success) {
                            Cookies.set(config.jwt.cookieName, res.data.token);
                            router_1.default.push({
                                pathname: config.path.home
                            });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _b.sent();
                        this.setState({
                            errorMessage: error_1.response.data.message
                        });
                        return [3 /*break*/, 3];
                    case 3:
                        return [2 /*return*/];
                }
            });
        });
    };
    PageLogin.prototype.render = function () {
        return React.createElement("div", { className: 'login-form', style: { height: '100vh' } }, React.createElement(CustomHead_1.default, null), React.createElement(semantic_ui_react_1.Grid, { textAlign: 'center', style: { height: '100%' }, verticalAlign: 'middle' }, React.createElement(semantic_ui_react_1.Grid.Column, { style: { maxWidth: 450 } }, React.createElement(semantic_ui_react_1.Header, { as: 'h2', color: 'red', textAlign: 'center' }, ' ', "Log-in to your account"), React.createElement(semantic_ui_react_1.Form, { size: 'large' }, React.createElement(semantic_ui_react_1.Segment, null, React.createElement(semantic_ui_react_1.Form.Input, { fluid: true, icon: 'user', iconPosition: 'left', placeholder: 'Username', onChange: this.handleChangeUsername }), React.createElement(semantic_ui_react_1.Form.Input, { fluid: true, icon: 'lock', iconPosition: 'left', placeholder: 'Password', type: 'password', onChange: this.handleChangePassword }), React.createElement(semantic_ui_react_1.Button, { color: 'red', fluid: true, size: 'large', onClick: this.handleSubmit }, "Login"))), this.state.errorMessage && React.createElement(semantic_ui_react_1.Message, { error: true }, this.state.errorMessage))));
    };
    return PageLogin;
}(React.Component);
exports.default = PageLogin;
//# sourceMappingURL=login.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvcGFnZXMvYXV0aC9sb2dpbi5qcyJdLCJuYW1lcyI6WyJfX2V4dGVuZHMiLCJleHRlbmRTdGF0aWNzIiwiX19wcm90b19fIiwiQXJyYXkiLCJkIiwiYiIsInAiLCJoYXNPd25Qcm9wZXJ0eSIsIl9fIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJnZW5lcmF0b3IiLCJyZXNvbHZlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwidmFsdWUiLCJzdGVwIiwibmV4dCIsImUiLCJyZWplY3RlZCIsInJlc3VsdCIsImRvbmUiLCJ0aGVuIiwiYXBwbHkiLCJfX2dlbmVyYXRvciIsImJvZHkiLCJfIiwibGFiZWwiLCJzZW50IiwidCIsInRyeXMiLCJvcHMiLCJmIiwieSIsImciLCJ2ZXJiIiwibiIsInYiLCJvcCIsIlR5cGVFcnJvciIsImNhbGwiLCJwb3AiLCJsZW5ndGgiLCJwdXNoIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwiUmVhY3QiLCJyZXF1aXJlIiwic2VtYW50aWNfdWlfcmVhY3RfMSIsImF4aW9zXzEiLCJyb3V0ZXJfMSIsIkN1c3RvbUhlYWRfMSIsIkNvb2tpZXMiLCJjb25maWciLCJQYWdlTG9naW4iLCJfc3VwZXIiLCJwcm9wcyIsIl90aGlzIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJfYSIsInN0YXRlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInNldFN0YXRlIiwiZXJyb3JNZXNzYWdlIiwibG9naW4iLCJoYW5kbGVDaGFuZ2VVc2VybmFtZSIsImN1cnJlbnRUYXJnZXQiLCJoYW5kbGVDaGFuZ2VQYXNzd29yZCIsImNvbXBvbmVudFdpbGxNb3VudCIsInJlZGlyZWN0VG9Ib21lSWZBbHJlYWR5TG9nZ2VkSW4iLCJnZXQiLCJqd3QiLCJjb29raWVOYW1lIiwidW5kZWZpbmVkIiwiZGVmYXVsdCIsInBhdGhuYW1lIiwicGF0aCIsImhvbWUiLCJyZXMiLCJlcnJvcl8xIiwiX2IiLCJwb3N0Iiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJkYXRhIiwic3VjY2VzcyIsInNldCIsInRva2VuIiwicmVzcG9uc2UiLCJtZXNzYWdlIiwicmVuZGVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInN0eWxlIiwiaGVpZ2h0IiwiR3JpZCIsInRleHRBbGlnbiIsInZlcnRpY2FsQWxpZ24iLCJDb2x1bW4iLCJtYXhXaWR0aCIsIkhlYWRlciIsImFzIiwiY29sb3IiLCJGb3JtIiwic2l6ZSIsIlNlZ21lbnQiLCJJbnB1dCIsImZsdWlkIiwiaWNvbiIsImljb25Qb3NpdGlvbiIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJ0eXBlIiwiQnV0dG9uIiwib25DbGljayIsIk1lc3NhZ2UiLCJlcnJvciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUksWUFBYSxhQUFRLFVBQVQsQUFBYyx5QkFBMkIsQUFDckQ7UUFBSSw0Q0FDQyxFQUFFLFdBQUYsQUFBYSxnQkFBYixBQUE2QixTQUFTLFVBQUEsQUFBVSxHQUFWLEFBQWEsR0FBRyxBQUFFO1VBQUEsQUFBRSxZQUFGLEFBQWMsQUFBSTtBQUQzRCxLQUFBLElBRWhCLFVBQUEsQUFBVSxHQUFWLEFBQWEsR0FBRyxBQUFFO2FBQUssSUFBTCxBQUFTLEtBQVQsQUFBYyxHQUFHO2dCQUFJLEVBQUEsQUFBRSxlQUFOLEFBQUksQUFBaUIsSUFBSSxFQUFBLEFBQUUsS0FBSyxFQUFqRCxBQUEwQyxBQUFPLEFBQUU7QUFBSztBQUY5RSxBQUdBO1dBQU8sVUFBQSxBQUFVLEdBQVYsQUFBYSxHQUFHLEFBQ25CO3NCQUFBLEFBQWMsR0FBZCxBQUFpQixBQUNqQjtpQkFBQSxBQUFTLEtBQUssQUFBRTtpQkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFBSTtBQUN2QztVQUFBLEFBQUUsWUFBWSxNQUFBLEFBQU0sT0FBTyxzQkFBYixBQUFhLEFBQWMsTUFBTSxH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TyxFQUFFLE9BQUYsQUFBUyxNQUFNLE1BQWYsQUFBcUIsUUFBUSxjQUE3QixBQUEyQyxRQUFRLGFBQW5ELEFBQWdFLFlBQVksTUFBNUUsQUFBa0YsWUFBWSxVQUFVLEtBRmhLLEFBRUksQUFBb0QsQUFBNkcseUJBQ2pLLE1BQUEsQUFBTSxjQUFjLG9CQUFwQixBQUF3QyxRQUFRLEVBQUUsT0FBRixBQUFTLE9BQU8sT0FBaEIsQUFBdUIsTUFBTSxNQUE3QixBQUFtQyxTQUFTLFNBQVMsS0FBckcsQUFBZ0QsQUFBMEQsZ0JBUnRILEFBSUksQUFDSSxBQUdJLEFBQTBILFlBQ2xJLEtBQUEsQUFBSyxNQUFMLEFBQVcsZ0JBQWdCLE1BQUEsQUFBTSxjQUFjLG9CQUFwQixBQUF3QyxTQUFTLEVBQUUsT0FBbkQsQUFBaUQsQUFBUyxRQUFRLEtBQUEsQUFBSyxNQVo5RyxBQUFRLEFBRUosQUFDSSxBQVMrQixBQUE2RSxBQUN2SDtBQWRELEFBZUE7V0FBQSxBQUFPLEFBQ1Y7QUExRjhCLENBQUEsQ0EwRjdCLE1BMUZGLEFBQStCLEFBMEZ2QjtBQUNSLFFBQUEsQUFBUSxVQUFSLEFBQWtCO0FBQ2xCIiwiZmlsZSI6ImxvZ2luLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rdW5na2luZy9Qcm9qZWN0cy9ib290c3RyYXAtbmV4dGpzLXR5cGVzY3JpcHQifQ==