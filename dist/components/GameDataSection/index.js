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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var moment = require("moment");
var NumberUtility_1 = require("../../lib/NumberUtility");
var GameMetricTab_1 = require("./GameMetricTab");
moment.locale('th');
var GameDataSection = /** @class */ (function (_super) {
    __extends(GameDataSection, _super);
    function GameDataSection(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChangeStartDate = function (event) {
            _this.setState({ isLoading: true });
            var startDate = event.currentTarget.value;
            if (moment(startDate, 'YYYY-MM-DD') > moment(_this.state.endDate, 'YYYY-MM-DD')) {
                _this.setState({
                    startDate: startDate,
                    endDate: moment(startDate, 'YYYY-MM-DD').add(1, 'days').format('YYYY-MM-DD')
                });
            }
            else {
                _this.setState({
                    startDate: startDate
                });
            }
            _this.setState({ isLoading: false });
        };
        _this.handleChangeEndDate = function (event) {
            _this.setState({ isLoading: true });
            var endDate = event.currentTarget.value;
            if (moment(endDate, 'YYYY-MM-DD') < moment(_this.state.startDate, 'YYYY-MM-DD')) {
                _this.setState({
                    startDate: moment(endDate, 'YYYY-MM-DD').subtract(1, 'days').format('YYYY-MM-DD'),
                    endDate: endDate
                });
            }
            else {
                _this.setState({
                    endDate: endDate
                });
            }
            _this.setState({ isLoading: false });
        };
        _this.handleClick = function (event) {
            _this.getGameMetric();
        };
        var gameData = {
            total_user: 0,
            total_game_play: 0,
            total_buy_package: 0,
            total_truepoint: 0,
            total_gamebbq_unique_user: 0,
            total_gamebbq_play: 0,
            total_gamechounan_unique_user: 0,
            total_gamechounan_play: 0,
            total_gameuber_unique_user: 0,
            total_gameuber_play: 0
        };
        _this.state = {
            data: gameData,
            startDate: '2017-12-01',
            endDate: moment().format('YYYY-MM-DD'),
            isLoading: true,
            activeGame: 'All'
        };
        return _this;
    }
    GameDataSection.prototype.componentDidMount = function () {
        this.getAvailableGame();
        this.getGameMetric();
    };
    GameDataSection.prototype.getGameMetric = function () {
        return __awaiter(this, void 0, void 0, function () {
            var gameData;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({ isLoading: true });
                        console.log('getGameMetric');
                        console.log('startDate', this.state.startDate);
                        console.log('endDate', this.state.endDate);
                        console.log('update!');
                        return [4 /*yield*/, Backend_1.default.getGameMetric(this.state.startDate, this.state.endDate)];
                    case 1:
                        gameData = _a.sent();
                        this.setState({
                            data: __assign({}, gameData),
                            isLoading: false
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    GameDataSection.prototype.getAvailableGame = function () {
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
    GameDataSection.prototype.render = function () {
        var _this = this;
        return (React.createElement(semantic_ui_react_1.Container, null,
            React.createElement(semantic_ui_react_1.Dimmer.Dimmable, { as: semantic_ui_react_1.Container, dimmed: this.state.isLoading },
                React.createElement(semantic_ui_react_1.Dimmer, { active: this.state.isLoading, inverted: true },
                    React.createElement(semantic_ui_react_1.Loader, null, "Loading")),
                React.createElement("h1", null, "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E40\u0E01\u0E21"),
                React.createElement(semantic_ui_react_1.Container, null,
                    React.createElement(semantic_ui_react_1.Input, { label: "Start Date", type: 'date', onChange: this.handleChangeStartDate, value: this.state.startDate }),
                    React.createElement(semantic_ui_react_1.Input, { label: "End Date", type: 'date', onChange: this.handleChangeEndDate, value: this.state.endDate },
                        React.createElement(semantic_ui_react_1.Label, null, "End Date"),
                        React.createElement("input", null),
                        React.createElement(semantic_ui_react_1.Button, { type: "submit", onClick: this.handleClick }, "Submit"))),
                React.createElement(semantic_ui_react_1.Segment, null,
                    React.createElement("h2", null, "\u0E23\u0E27\u0E21\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"),
                    React.createElement(semantic_ui_react_1.Statistic.Group, { size: "huge", widths: 3 },
                        React.createElement(semantic_ui_react_1.Statistic, null,
                            React.createElement(semantic_ui_react_1.Statistic.Value, null, NumberUtility_1.default.formatNumberWithCommas(this.state.data.total_user)),
                            React.createElement(semantic_ui_react_1.Statistic.Label, null, "Unique Users")),
                        React.createElement(semantic_ui_react_1.Statistic, null,
                            React.createElement(semantic_ui_react_1.Statistic.Value, null, NumberUtility_1.default.formatNumberWithCommas(this.state.data.total_game_play)),
                            React.createElement(semantic_ui_react_1.Statistic.Label, null, "Games Played")),
                        React.createElement(semantic_ui_react_1.Statistic, null,
                            React.createElement(semantic_ui_react_1.Statistic.Value, null, NumberUtility_1.default.formatNumberWithCommas(this.state.data.total_truepoint)),
                            React.createElement(semantic_ui_react_1.Statistic.Label, null, "True Points Burned"))))),
            this.state.games && !this.state.isLoading &&
                React.createElement(semantic_ui_react_1.Container, null, this.state.games.map(function (game) {
                    return React.createElement(GameMetricTab_1.default, { game: game, active: _this.state.activeGame, startDate: _this.state.startDate, endDate: _this.state.endDate });
                }))));
    };
    return GameDataSection;
}(React.Component));
exports.default = GameDataSection;
//# sourceMappingURL=index.js.map