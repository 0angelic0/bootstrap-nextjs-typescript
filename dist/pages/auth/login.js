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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
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
var PageLogin = /** @class */ (function (_super) {
    __extends(PageLogin, _super);
    function PageLogin(props) {
        var _this = _super.call(this, props) || this;
        _this.handleSubmit = function (event) {
            var _a = _this.state, username = _a.username, password = _a.password;
            if (!username || !password) {
                _this.setState({
                    errorMessage: 'Please enter both Username and Password.'
                });
            }
            else {
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
        var username = _a.username, password = _a.password;
        return __awaiter(this, void 0, void 0, function () {
            var res, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
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
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    PageLogin.prototype.render = function () {
        return (React.createElement("div", { className: 'login-form', style: { height: '100vh' } },
            React.createElement(CustomHead_1.default, null),
            React.createElement(semantic_ui_react_1.Grid, { textAlign: 'center', style: { height: '100%' }, verticalAlign: 'middle' },
                React.createElement(semantic_ui_react_1.Grid.Column, { style: { maxWidth: 450 } },
                    React.createElement(semantic_ui_react_1.Header, { as: 'h2', color: 'red', textAlign: 'center' },
                        ' ',
                        "Log-in to your account"),
                    React.createElement(semantic_ui_react_1.Form, { size: 'large' },
                        React.createElement(semantic_ui_react_1.Segment, null,
                            React.createElement(semantic_ui_react_1.Form.Input, { fluid: true, icon: 'user', iconPosition: 'left', placeholder: 'Username', onChange: this.handleChangeUsername }),
                            React.createElement(semantic_ui_react_1.Form.Input, { fluid: true, icon: 'lock', iconPosition: 'left', placeholder: 'Password', type: 'password', onChange: this.handleChangePassword }),
                            React.createElement(semantic_ui_react_1.Button, { color: 'red', fluid: true, size: 'large', onClick: this.handleSubmit }, "Login"))),
                    this.state.errorMessage && React.createElement(semantic_ui_react_1.Message, { error: true }, this.state.errorMessage)))));
    };
    return PageLogin;
}(React.Component));
exports.default = PageLogin;
//# sourceMappingURL=login.js.map