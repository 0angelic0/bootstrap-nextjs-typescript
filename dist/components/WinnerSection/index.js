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
var Backend_1 = require("../../lib/Backend");
var WinnerTab_1 = require("./WinnerTab");
var WinnerSection = /** @class */ (function (_super) {
    __extends(WinnerSection, _super);
    function WinnerSection(props) {
        var _this = _super.call(this, props) || this;
        _this.handleItemClick = function (event, _a) {
            var name = _a.name;
            _this.setState({
                activeGame: name
            });
        };
        _this.state = {
            activeGame: '',
            games: undefined
        };
        return _this;
    }
    WinnerSection.prototype.componentDidMount = function () {
        this.getAvailableGame();
    };
    WinnerSection.prototype.getAvailableGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var gameData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('getAvailableGame');
                        return [4 /*yield*/, Backend_1.default.getAvailableGame()];
                    case 1:
                        gameData = _a.sent();
                        gameData.forEach(function (game) {
                            game.game_name = game.game_name.replace('/n', ' ');
                        });
                        this.setState({
                            activeGame: gameData[0].game_name,
                            games: gameData
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    WinnerSection.prototype.render = function () {
        var _this = this;
        return (React.createElement(semantic_ui_react_1.Container, null,
            React.createElement("h1", null, "\u0E1C\u0E39\u0E49\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25"),
            this.state.games &&
                React.createElement(semantic_ui_react_1.Container, null,
                    React.createElement(semantic_ui_react_1.Menu, { tabular: true }, this.state.games.map(function (game) {
                        return React.createElement(semantic_ui_react_1.Menu.Item, { name: game.game_name, active: _this.state.activeGame === game.game_name, onClick: _this.handleItemClick });
                    })),
                    this.state.games.map(function (game) {
                        return React.createElement(WinnerTab_1.default, { game: game, active: _this.state.activeGame });
                    }))));
    };
    return WinnerSection;
}(React.Component));
exports.default = WinnerSection;
//# sourceMappingURL=index.js.map