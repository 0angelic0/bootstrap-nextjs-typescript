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
var Cookies = require("js-cookie");
var config = require("../config");
var router_1 = require("../next/router");
var Main_1 = require("../components/Main");
var jwt_decode = require("jwt-decode");
var PageIndex = /** @class */function (_super) {
    __extends(PageIndex, _super);
    function PageIndex(props) {
        var _this = _super.call(this, props) || this;
        _this.handleLogout = function (event) {
            _this.logout();
        };
        return _this;
    }
    PageIndex.getInitialProps = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            var needRediect, role, token, decoded;
            return __generator(this, function (_a) {
                needRediect = this.redirectToAuthLoginIfNotLoggedIn(context);
                console.log('needRediect', needRediect);
                if (needRediect) return [2 /*return*/, {}];
                role = '';
                if (context.req) {
                    role = context.req.jwtPayload.role;
                } else {
                    token = Cookies.get(config.jwt.cookieName);
                    decoded = jwt_decode(token);
                    role = decoded.role;
                }
                return [2 /*return*/, {
                    role: role
                }];
            });
        });
    };
    PageIndex.redirectToAuthLoginIfNotLoggedIn = function (context) {
        var needRediect;
        if (context.req) needRediect = context.req.jwtPayload === undefined;else needRediect = Cookies.get(config.jwt.cookieName) === undefined;
        if (needRediect) {
            router_1.default.push({
                pathname: config.path.login
            });
        }
        return needRediect;
    };
    PageIndex.prototype.logout = function () {
        Cookies.remove(config.jwt.cookieName);
        router_1.default.push({
            pathname: config.path.login
        });
    };
    PageIndex.prototype.render = function () {
        return React.createElement(Main_1.default, { onLogout: this.handleLogout, role: this.props.role });
    };
    return PageIndex;
}(React.Component);
exports.default = PageIndex;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpc3QvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiX19leHRlbmRzIiwiZXh0ZW5kU3RhdGljcyIsIl9fcHJvdG9fXyIsIkFycmF5IiwiZCIsImIiLCJwIiwiaGFzT3duUHJvcGVydHkiLCJfXyIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwicmVzb2x2ZSIsInJlamVjdCIsImZ1bGZpbGxlZCIsInZhbHVlIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwidGhlbiIsImFwcGx5IiwiX19nZW5lcmF0b3IiLCJib2R5IiwiXyIsImxhYmVsIiwic2VudCIsInQiLCJ0cnlzIiwib3BzIiwiZiIsInkiLCJnIiwidmVyYiIsIm4iLCJ2Iiwib3AiLCJUeXBlRXJyb3IiLCJjYWxsIiwicG9wIiwibGVuZ3RoIiwicHVzaCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsIlJlYWN0IiwicmVxdWlyZSIsIkNvb2tpZXMiLCJjb25maWciLCJyb3V0ZXJfMSIsIk1haW5fMSIsImp3dF9kZWNvZGUiLCJQYWdlSW5kZXgiLCJfc3VwZXIiLCJwcm9wcyIsIl90aGlzIiwiaGFuZGxlTG9nb3V0IiwiZXZlbnQiLCJsb2dvdXQiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwibmVlZFJlZGllY3QiLCJyb2xlIiwidG9rZW4iLCJkZWNvZGVkIiwiX2EiLCJyZWRpcmVjdFRvQXV0aExvZ2luSWZOb3RMb2dnZWRJbiIsImNvbnNvbGUiLCJsb2ciLCJyZXEiLCJqd3RQYXlsb2FkIiwiZ2V0Iiwiand0IiwiY29va2llTmFtZSIsInVuZGVmaW5lZCIsImRlZmF1bHQiLCJwYXRobmFtZSIsInBhdGgiLCJsb2dpbiIsInJlbW92ZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJvbkxvZ291dCIsIkNvbXBvbmVudCJdLCJtYXBwaW5n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Qjt1QkFBQSxBQUFPLEFBQ1A7b0JBQUksUUFBSixBQUFZLEtBQUssQUFDYjsyQkFBTyxRQUFBLEFBQVEsSUFBUixBQUFZLFdBQW5CLEFBQThCLEFBQ2pDO0FBRkQsdUJBR0ssQUFDRDs0QkFBUSxRQUFBLEFBQVEsSUFBSSxPQUFBLEFBQU8sSUFBM0IsQUFBUSxBQUF1QixBQUMvQjs4QkFBVSxXQUFWLEFBQVUsQUFBVyxBQUNyQjsyQkFBTyxRQUFQLEFBQWUsQUFDbEI7QUFDRDt3QkFBTyxBQUFDLEVBQUQsQUFBRzswQkFBVixBQUFPLEFBQWUsQUFDUixBQUVqQjtBQUh5QixBQUNkLGlCQUREO0FBZFgsQUFBTyxBQWtCVixhQWxCVTtBQUZYLEFBQU8sQUFxQlYsU0FyQlU7QUFEWCxBQXVCQTtjQUFBLEFBQVUsbUNBQW1DLFVBQUEsQUFBVSxTQUFTLEFBQzVEO1lBQUEsQUFBSSxBQUNKO1lBQUksUUFBSixBQUFZLEtBQ1IsY0FBYyxRQUFBLEFBQVEsSUFBUixBQUFZLGVBRDlCLEFBQ0ksQUFBeUMsZUFFekMsY0FBYyxRQUFBLEFBQVEsSUFBSSxPQUFBLEFBQU8sSUFBbkIsQUFBdUIsZ0JBQXJDLEFBQXFELEFBQ3pEO1lBQUEsQUFBSSxhQUFhLEFBQ2I7cUJBQUEsQUFBUyxRQUFULEFBQWlCOzBCQUNILE9BQUEsQUFBTyxLQURyQixBQUFzQixBQUNJLEFBRTdCO0FBSHlCLEFBQ2xCO0FBR1I7ZUFBQSxBQUFPLEFBQ1Y7QUFaRCxBQWFBO2NBQUEsQUFBVSxVQUFWLEFBQW9CLFNBQVMsWUFBWSxBQUNyQztnQkFBQSxBQUFRLE9BQU8sT0FBQSxBQUFPLElBQXRCLEFBQTBCLEFBQzFCO2lCQUFBLEFBQVMsUUFBVCxBQUFpQjtzQkFDSCxPQUFBLEFBQU8sS0FEckIsQUFBc0IsQUFDSSxBQUU3QjtBQUh5QixBQUNsQjtBQUhSLEFBTUE7Y0FBQSxBQUFVLFVBQVYsQUFBb0IsU0FBUyxZQUFZLEFBQ3JDO2VBQU8sTUFBQSxBQUFNLGNBQWMsT0FBcEIsQUFBMkIsU0FBUyxFQUFFLFVBQVUsS0FBWixBQUFpQixjQUFjLE1BQU0sS0FBQSxBQUFLLE1BQXJGLEFBQU8sQUFBb0MsQUFBZ0QsQUFDOUY7QUFGRCxBQUdBO1dBQUEsQUFBTyxBQUNWO0FBdkQ4QixDQUFBLENBdUQ3QixNQXZERixBQUErQixBQXVEdkI7QUFDUixRQUFBLEFBQVEsVUFBUixBQUFrQjtBQUNsQiIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMva3VuZ2tpbmcvUHJvamVjdHMvYm9vdHN0cmFwLW5leHRqcy10eXBlc2NyaXB0In0=