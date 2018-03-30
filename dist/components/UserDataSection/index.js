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
var moment = require("moment");
var _ = require("lodash");
var semantic_ui_react_1 = require("semantic-ui-react");
var Backend_1 = require("../../lib/Backend");
moment.locale('th');
///////////////////////////////////////////////////////////////////////////////
// UserExchangeLogSegment
///////////////////////////////////////////////////////////////////////////////
var UserExchangeLogSegment = function (props) {
    var userExchangeLogDatas = props.userExchangeLogDatas;
    // Group by date
    var data = _.groupBy(userExchangeLogDatas, function (userExchangeLogData) {
        return moment(userExchangeLogData.created_datetime).format('LL');
    });
    // Separate by date, key is a date
    var component = [];
    _.forEach(data, function (value, key) {
        component.push(React.createElement(semantic_ui_react_1.Segment, { key: key },
            React.createElement("h4", null, key),
            React.createElement(semantic_ui_react_1.Segment.Group, null, value.map(function (v) {
                return React.createElement(semantic_ui_react_1.Segment, { key: moment(v.created_datetime).format('LTS') },
                    React.createElement(semantic_ui_react_1.Grid, null,
                        React.createElement(semantic_ui_react_1.Grid.Column, { width: 2 }, 'เวลา ' + moment(v.created_datetime).format('LTS')),
                        React.createElement(semantic_ui_react_1.Grid.Column, { width: 3 }, 'ใช้ ' + v.true_point + ' Points แลก ' + v.ticket + ' Tickets'),
                        React.createElement(semantic_ui_react_1.Grid.Column, { width: 4 },
                            "Points \u0E01\u0E48\u0E2D\u0E19\u0E41\u0E25\u0E01 = ",
                            v.point_before,
                            ", \u0E2B\u0E25\u0E31\u0E07\u0E41\u0E25\u0E01 = ",
                            v.point_after),
                        React.createElement(semantic_ui_react_1.Grid.Column, { width: 4 },
                            "Ticket \u0E01\u0E48\u0E2D\u0E19\u0E41\u0E25\u0E01 = ",
                            v.ticket_before,
                            ", \u0E2B\u0E25\u0E31\u0E07\u0E41\u0E25\u0E01 = ",
                            v.ticket_after),
                        React.createElement(semantic_ui_react_1.Grid.Column, { width: 3 },
                            "\u0E2A\u0E16\u0E32\u0E19\u0E30 = ",
                            v.status)));
            }))));
    });
    return React.createElement(semantic_ui_react_1.Segment.Group, null, component);
};
///////////////////////////////////////////////////////////////////////////////
// UserPlayLogSegment
///////////////////////////////////////////////////////////////////////////////
var UserPlayLogSegment = function (props) {
    var userPlayLogDatas = props.userPlayLogDatas, games = props.games;
    // Group by date
    var data = _.groupBy(userPlayLogDatas, function (userPlayLogData) {
        return moment(userPlayLogData.created_datetime).format('LL');
    });
    // Separate by date, key is a date
    var component = [];
    _.forEach(data, function (value, key) {
        component.push(React.createElement(semantic_ui_react_1.Segment, { key: key },
            React.createElement("h4", null, key),
            React.createElement(semantic_ui_react_1.Segment.Group, null, value.map(function (v) {
                return React.createElement(semantic_ui_react_1.Segment, { key: moment(v.created_datetime).format('LTS') },
                    React.createElement(semantic_ui_react_1.Grid, { columns: 3 },
                        React.createElement(semantic_ui_react_1.Grid.Column, null, 'เวลา ' + moment(v.created_datetime).format('LTS')),
                        React.createElement(semantic_ui_react_1.Grid.Column, null, games[v.game_id - 1].game_name.replace('/n', '')),
                        React.createElement(semantic_ui_react_1.Grid.Column, null, 'คะแนน: ' + v.score)));
            }))));
    });
    return React.createElement(semantic_ui_react_1.Segment.Group, null, component);
};
///////////////////////////////////////////////////////////////////////////////
// GiveTicketLogSegment
///////////////////////////////////////////////////////////////////////////////
var GiveTicketLogSegment = function (props) {
    var giveTicketLogDatas = props.giveTicketLogDatas;
    // Group by date
    var data = _.groupBy(giveTicketLogDatas, function (giveTicketLogData) {
        return moment(giveTicketLogData.created_datetime).format('LL');
    });
    // Separate by date, key is a date
    var component = [];
    _.forEach(data, function (value, key) {
        component.push(React.createElement(semantic_ui_react_1.Segment, { key: key },
            React.createElement("h4", null, key),
            React.createElement(semantic_ui_react_1.Segment.Group, null, value.map(function (v) {
                return React.createElement(semantic_ui_react_1.Segment, { key: moment(v.created_datetime).format('LTS') },
                    React.createElement(semantic_ui_react_1.Grid, { columns: 4 },
                        React.createElement(semantic_ui_react_1.Grid.Column, null, 'เวลา ' + moment(v.created_datetime).format('LTS')),
                        React.createElement(semantic_ui_react_1.Grid.Column, null, 'ก่อนให้: ' + v.ticketbefore),
                        React.createElement(semantic_ui_react_1.Grid.Column, null, 'หลังให้: ' + v.ticketafter),
                        React.createElement(semantic_ui_react_1.Grid.Column, null, 'ให้รวมทั้งหมด: ' + v.total_give)));
            }))));
    });
    return React.createElement(semantic_ui_react_1.Segment.Group, null, component);
};
///////////////////////////////////////////////////////////////////////////////
// UserDayChallenge
///////////////////////////////////////////////////////////////////////////////
var UserDayChallengeSegment = function (props) {
    var userDayChallengeData = props.userDayChallengeData;
    var userDayChallengeLogDatas = userDayChallengeData.logs;
    var userDayChallengeCampaignDatas = userDayChallengeData.campaigns;
    // Group by date
    var data = _.groupBy(userDayChallengeLogDatas, function (userDayChallengeLogData) {
        // return '' + (userDayChallengeLogData.daily_challenge_id + 1);
        // return moment(userDayChallengeLogData.stamp_datetime).format('MMMM YYYY');
        return moment(userDayChallengeCampaignDatas[userDayChallengeLogData.daily_challenge_id - 1].begin_datetime).format("MMMM YYYY");
    });
    var stampCounter = 0;
    // Separate by date, key is a date
    var component = [];
    _.forEach(data, function (value, key) {
        stampCounter = value.length + 1;
        component.push(React.createElement(semantic_ui_react_1.Segment, { key: key },
            React.createElement("h4", null,
                "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23 Check-In \u0E02\u0E2D\u0E07\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E40\u0E14\u0E37\u0E2D\u0E19 ",
                key),
            React.createElement(semantic_ui_react_1.Segment.Group, null, value.map(function (v) {
                stampCounter -= 1;
                return React.createElement(semantic_ui_react_1.Segment, { key: v.stamp_datetime },
                    React.createElement(semantic_ui_react_1.Grid, null,
                        React.createElement(semantic_ui_react_1.Grid.Column, { width: 8 },
                            React.createElement("h4", null,
                                "Check-In \u0E04\u0E23\u0E31\u0E49\u0E07\u0E17\u0E35\u0E48 ",
                                stampCounter),
                            " ",
                            stampCounter % 15 === 0 && React.createElement("b", null, " (\u0E44\u0E14\u0E49\u0E23\u0E31\u0E1A\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E40\u0E1E\u0E34\u0E48\u0E21)")),
                        React.createElement(semantic_ui_react_1.Grid.Column, { width: 8 }, moment(v.stamp_datetime).format('LLLL'))));
            }))));
    });
    return React.createElement(semantic_ui_react_1.Segment.Group, null,
        React.createElement(semantic_ui_react_1.Segment, null,
            React.createElement(semantic_ui_react_1.Message, { attached: true },
                " \u0E21\u0E35\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14: ",
                React.createElement(semantic_ui_react_1.Label, { color: "grey", size: "large" },
                    React.createElement("b", null, userDayChallengeData.total_right)),
                " \u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C "),
            React.createElement(semantic_ui_react_1.Message, { attached: true },
                " Check-In \u0E17\u0E35\u0E48\u0E41\u0E2A\u0E14\u0E07\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19: ",
                React.createElement(semantic_ui_react_1.Label, { color: "grey", size: "large" },
                    React.createElement("b", null, userDayChallengeData.combo),
                    " / 15"),
                " "),
            React.createElement(semantic_ui_react_1.Message, { attached: true },
                " Check-In \u0E04\u0E23\u0E31\u0E49\u0E07\u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14: ",
                React.createElement("b", null, moment(userDayChallengeData.last_stamp).format('LLLL')),
                " "),
            React.createElement(semantic_ui_react_1.Message, null,
                React.createElement(semantic_ui_react_1.Message.Header, null,
                    " \u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E40\u0E14\u0E37\u0E2D\u0E19 ",
                    moment().format("MMMM"),
                    " "),
                React.createElement("p", null,
                    " \u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48: ",
                    React.createElement("b", null, moment(userDayChallengeData.begin_datetime).format('LLLL')),
                    " "),
                React.createElement("p", null,
                    " \u0E2A\u0E34\u0E49\u0E19\u0E2A\u0E38\u0E14: ",
                    React.createElement("b", null, moment(userDayChallengeData.end_datetime).format('LLLL')),
                    " "),
                React.createElement("p", null,
                    " \u0E23\u0E2D\u0E1A\u0E19\u0E35\u0E49\u0E21\u0E35\u0E40\u0E27\u0E25\u0E32\u0E40\u0E2B\u0E25\u0E37\u0E2D ",
                    React.createElement("b", null, userDayChallengeData.remain_day),
                    " \u0E27\u0E31\u0E19 \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E23\u0E31\u0E1A\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E4C\u0E25\u0E38\u0E49\u0E19\u0E23\u0E31\u0E1A\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E1B\u0E23\u0E30\u0E08\u0E33\u0E40\u0E14\u0E37\u0E2D\u0E19\u0E19\u0E35\u0E49 "))),
        component);
};
///////////////////////////////////////////////////////////////////////////////
// ServerStatusLogSegment
///////////////////////////////////////////////////////////////////////////////
var ServerStatusLogSegment = function (props) {
    var serverStatusLogData = props.serverStatusLogData;
    // Group by date
    var data = _.groupBy(serverStatusLogData, function (serverLog) {
        return moment(serverLog.datetime).format('LL');
    });
    // Separate by date, key is a date
    var component = [];
    _.forEach(data, function (value, key) {
        component.push(React.createElement(semantic_ui_react_1.Segment, { key: key },
            React.createElement("h4", null, key),
            React.createElement(semantic_ui_react_1.Segment.Group, null, value.map(function (v) {
                return React.createElement(semantic_ui_react_1.Segment, { key: moment(v.created_datetime).format('LTS') },
                    React.createElement(semantic_ui_react_1.Grid, { columns: 3 },
                        React.createElement(semantic_ui_react_1.Grid.Column, null,
                            React.createElement(semantic_ui_react_1.Label, { empty: true, circular: true, color: v.status === 'On' ? 'green' : 'red' }),
                            " ",
                            'สถานะ ' + v.status),
                        React.createElement(semantic_ui_react_1.Grid.Column, null, 'เวลา ' + moment(v.created_datetime).format('LTS'))));
            }))));
    });
    return React.createElement(semantic_ui_react_1.Segment.Group, null, component);
};
var UserDataSection = /** @class */ (function (_super) {
    __extends(UserDataSection, _super);
    function UserDataSection(props) {
        var _this = _super.call(this, props) || this;
        _this.handleSearchInputChange = function (event) {
            _this.setState({
                searchingThaiID: event.currentTarget.value
            });
        };
        _this.handleSearchInputKeyPress = function (event) {
            if (event.key === 'Enter') {
                _this.searchUserIfValid();
            }
        };
        _this.handleSearchButtonClick = function (event) {
            _this.searchUserIfValid();
        };
        _this.handleExchangeLogButtonClick = function (event) {
            _this.getUserExchangeLog();
        };
        _this.handlePlayLogButtonClick = function (event) {
            _this.getUserPlayLog();
        };
        _this.handleGiveTicketLogButtonClick = function (event) {
            _this.getUserGiveTicketLog();
        };
        _this.handleDayChallengeButtonClick = function (event) {
            _this.getUserDayChallenge();
        };
        _this.handleServerStatusLogClick = function (event) {
            _this.getServerStatusLog();
        };
        _this.handleHideServerStatusLogClick = function (event) {
            _this.setState({
                serverStatusLogData: undefined
            });
        };
        _this.handleHideDayChallengeButtonClick = function (event) {
            _this.setState({
                userDayChallengeData: undefined
            });
        };
        _this.handleHideExchangeLogButtonClick = function (event) {
            _this.setState({
                userExchangeLogDatas: undefined
            });
        };
        _this.handleHidePlayLogButtonClick = function (event) {
            _this.setState({
                userPlayLogDatas: undefined
            });
        };
        _this.handleHideGiveTicketLogButtonClick = function (event) {
            _this.setState({
                giveTicketLogDatas: undefined
            });
        };
        _this.state = {
            searchingThaiID: '',
            searchErrorMsg: '',
            games: []
        };
        return _this;
    }
    UserDataSection.prototype.componentDidMount = function () {
        this.getGame();
    };
    UserDataSection.prototype.getGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var games;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('UserDataSection getGame');
                        return [4 /*yield*/, Backend_1.default.getGame()];
                    case 1:
                        games = _a.sent();
                        console.log('games', games);
                        this.setState({
                            games: games
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserDataSection.prototype.searchUserIfValid = function () {
        // if (this.state.searchingThaiID.length !== 13) {
        //   this.setState({
        //     searchErrorMsg: 'กรุณากรอกเลขบัตรประชาชน 13 หลัก',
        //     userData: undefined,
        //     userExchangeLogDatas: undefined,
        //     userPlayLogDatas: undefined
        //   });
        //   return;
        // }
        this.searchUser();
    };
    UserDataSection.prototype.searchUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('UserDataSection searchUser');
                        return [4 /*yield*/, Backend_1.default.getUser(this.state.searchingThaiID)];
                    case 1:
                        data = _a.sent();
                        console.log('data', data);
                        if (data.userNotFound) {
                            this.setState({
                                searchErrorMsg: 'ไม่พบผู้เล่น ' + this.state.searchingThaiID,
                                userData: undefined,
                                userExchangeLogDatas: undefined,
                                userPlayLogDatas: undefined
                            });
                            return [2 /*return*/];
                        }
                        this.setState({
                            searchErrorMsg: '',
                            userData: data,
                            userExchangeLogDatas: undefined,
                            userPlayLogDatas: undefined
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserDataSection.prototype.getUserExchangeLog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Backend_1.default.getUserExchangeLog(this.state.searchingThaiID)];
                    case 1:
                        data = _a.sent();
                        this.setState({
                            userExchangeLogDatas: data
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserDataSection.prototype.getUserPlayLog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('UserDataSection getUserPlayLog');
                        return [4 /*yield*/, Backend_1.default.getUserPlayLog(this.state.searchingThaiID)];
                    case 1:
                        data = _a.sent();
                        console.log('data', data);
                        this.setState({
                            userPlayLogDatas: data
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserDataSection.prototype.getUserGiveTicketLog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('UserDataSection getUserGivenTicketLog');
                        return [4 /*yield*/, Backend_1.default.getUserGivenTicketLog(this.state.searchingThaiID)];
                    case 1:
                        data = _a.sent();
                        console.log('data', data);
                        this.setState({
                            giveTicketLogDatas: data
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserDataSection.prototype.getUserDayChallenge = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('UserDataSection getUserDayChallenge');
                        return [4 /*yield*/, Backend_1.default.getUserDayChallenge(this.state.searchingThaiID, 1)];
                    case 1:
                        data = _a.sent();
                        console.log('data', data);
                        this.setState({
                            userDayChallengeData: data
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserDataSection.prototype.getServerStatusLog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('UserDataSection getServerStatusLog');
                        return [4 /*yield*/, Backend_1.default.getServerStatusLog()];
                    case 1:
                        data = _a.sent();
                        console.log('server status', data);
                        this.setState({
                            serverStatusLogData: data
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    UserDataSection.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement(semantic_ui_react_1.Container, null,
                React.createElement("h1", null, "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E2A\u0E16\u0E32\u0E19\u0E30 Server"),
                this.state.serverStatusLogData === undefined ?
                    React.createElement(semantic_ui_react_1.Button, { onClick: this.handleServerStatusLogClick }, "\u0E14\u0E39\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E2A\u0E16\u0E32\u0E19\u0E30 Server") :
                    React.createElement("div", null,
                        React.createElement(semantic_ui_react_1.Button, { onClick: this.handleHideServerStatusLogClick }, "\u0E0B\u0E48\u0E2D\u0E19\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E2A\u0E16\u0E32\u0E19\u0E30 Server"),
                        React.createElement(ServerStatusLogSegment, { serverStatusLogData: this.state.serverStatusLogData }))),
            React.createElement(semantic_ui_react_1.Divider, null),
            React.createElement(semantic_ui_react_1.Container, null,
                React.createElement("h1", null, "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19"),
                React.createElement(semantic_ui_react_1.Input, { action: { icon: "search", onClick: this.handleSearchButtonClick }, placeholder: "True ID หรือ Email", onChange: this.handleSearchInputChange, onKeyPress: this.handleSearchInputKeyPress, value: this.state.searchingThaiID }),
                this.state.searchErrorMsg && React.createElement(semantic_ui_react_1.Message, { error: true }, this.state.searchErrorMsg)),
            this.state.userData &&
                React.createElement(semantic_ui_react_1.Container, null,
                    React.createElement(semantic_ui_react_1.Segment, null,
                        React.createElement(semantic_ui_react_1.Label, { as: 'a', color: 'red', ribbon: true }, "Profile"),
                        React.createElement(semantic_ui_react_1.Header, { as: "h2", block: true },
                            React.createElement(semantic_ui_react_1.Image, { src: this.state.userData.user.icon }),
                            ' ',
                            this.state.userData.user.trueid),
                        React.createElement("p", null,
                            "\u0E44\u0E2D\u0E14\u0E35\u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19: ",
                            React.createElement("b", null, this.state.userData.user.uid)),
                        React.createElement("p", null,
                            "Ticket: ",
                            React.createElement("b", null, this.state.userData.user.ticket)),
                        React.createElement("p", null,
                            "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E02\u0E49\u0E32\u0E40\u0E01\u0E21\u0E04\u0E23\u0E31\u0E49\u0E07\u0E41\u0E23\u0E01: ",
                            moment(this.state.userData.user.created_datetime).format('LLLL')),
                        React.createElement("p", null,
                            "\u0E27\u0E31\u0E19\u0E17\u0E35\u0E48\u0E40\u0E02\u0E49\u0E32\u0E40\u0E01\u0E21\u0E04\u0E23\u0E31\u0E49\u0E07\u0E25\u0E48\u0E32\u0E2A\u0E38\u0E14: ",
                            moment(this.state.userData.user.last_login_datetime).format('LLLL'))),
                    React.createElement(semantic_ui_react_1.Segment, null,
                        React.createElement(semantic_ui_react_1.Label, { as: 'a', color: 'red', ribbon: true }, "15 Days Challenge"),
                        this.state.userDayChallengeData === undefined ?
                            React.createElement(semantic_ui_react_1.Button, { onClick: this.handleDayChallengeButtonClick }, "\u0E14\u0E39\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34 15 Days Challenge") :
                            React.createElement("div", null,
                                React.createElement(semantic_ui_react_1.Header, { as: "h2", block: true }, "\u0E14\u0E39\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34 15 Days Challenge"),
                                React.createElement(semantic_ui_react_1.Button, { onClick: this.handleHideDayChallengeButtonClick }, "\u0E0B\u0E48\u0E2D\u0E19\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34 15 Days Challenge"),
                                React.createElement(UserDayChallengeSegment, { userDayChallengeData: this.state.userDayChallengeData }))),
                    React.createElement(semantic_ui_react_1.Segment, null,
                        React.createElement(semantic_ui_react_1.Label, { as: 'a', color: 'red', ribbon: true }, "High Score"),
                        React.createElement(semantic_ui_react_1.Header, { as: "h2", block: true }, "\u0E04\u0E30\u0E41\u0E19\u0E19\u0E2A\u0E39\u0E07\u0E2A\u0E38\u0E14\u0E02\u0E2D\u0E07\u0E23\u0E2D\u0E1A\u0E2A\u0E31\u0E1B\u0E14\u0E32\u0E2B\u0E4C\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19 (High Score)"),
                        React.createElement(semantic_ui_react_1.Segment.Group, null, this.state.userData.userHighScores.map(function (userHighScore) {
                            return React.createElement(semantic_ui_react_1.Segment, { key: userHighScore.game_id },
                                React.createElement(semantic_ui_react_1.Grid, { columns: 2 },
                                    React.createElement(semantic_ui_react_1.Grid.Column, null,
                                        React.createElement("h4", null, _this.state.games[userHighScore.game_id - 1].game_name.replace('/n', '') + ' - ' + userHighScore.highscore + ' คะแนน')),
                                    React.createElement(semantic_ui_react_1.Grid.Column, null, moment(userHighScore.updated_datetime).format('LLLL'))));
                        }))),
                    React.createElement(semantic_ui_react_1.Segment, null,
                        React.createElement(semantic_ui_react_1.Label, { as: 'a', color: 'red', ribbon: true }, "True Point"),
                        this.state.userExchangeLogDatas === undefined ?
                            React.createElement(semantic_ui_react_1.Button, { onClick: this.handleExchangeLogButtonClick }, "\u0E14\u0E39\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E41\u0E25\u0E01 True Point") :
                            React.createElement("div", null,
                                React.createElement(semantic_ui_react_1.Header, { as: "h2", block: true }, "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E41\u0E25\u0E01 True Point"),
                                React.createElement(semantic_ui_react_1.Button, { onClick: this.handleHideExchangeLogButtonClick }, "\u0E0B\u0E48\u0E2D\u0E19\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E41\u0E25\u0E01 True Point"),
                                React.createElement(UserExchangeLogSegment, { userExchangeLogDatas: this.state.userExchangeLogDatas }))),
                    React.createElement(semantic_ui_react_1.Segment, null,
                        React.createElement(semantic_ui_react_1.Label, { as: 'a', color: 'red', ribbon: true }, "Play History"),
                        this.state.userPlayLogDatas === undefined ?
                            React.createElement(semantic_ui_react_1.Button, { onClick: this.handlePlayLogButtonClick }, "\u0E14\u0E39\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E40\u0E25\u0E48\u0E19") :
                            React.createElement("div", null,
                                React.createElement(semantic_ui_react_1.Header, { as: "h2", block: true }, "\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E40\u0E25\u0E48\u0E19"),
                                React.createElement(semantic_ui_react_1.Button, { onClick: this.handleHidePlayLogButtonClick }, "\u0E0B\u0E48\u0E2D\u0E19\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E41\u0E25\u0E01 True Point"),
                                React.createElement(UserPlayLogSegment, { userPlayLogDatas: this.state.userPlayLogDatas, games: this.state.games }))),
                    React.createElement(semantic_ui_react_1.Segment, null,
                        React.createElement(semantic_ui_react_1.Label, { as: 'a', color: 'red', ribbon: true }, "Ticket"),
                        this.state.giveTicketLogDatas === undefined ?
                            React.createElement(semantic_ui_react_1.Button, { onClick: this.handleGiveTicketLogButtonClick }, "\u0E14\u0E39\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49 Ticket") :
                            React.createElement("div", null,
                                React.createElement(semantic_ui_react_1.Header, { as: "h2", block: true }, "\u0E14\u0E39\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49 Ticket"),
                                React.createElement(semantic_ui_react_1.Button, { onClick: this.handleHideGiveTicketLogButtonClick }, "\u0E0B\u0E48\u0E2D\u0E19\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E43\u0E2B\u0E49 Ticket"),
                                React.createElement(GiveTicketLogSegment, { giveTicketLogDatas: this.state.giveTicketLogDatas }))))));
    };
    return UserDataSection;
}(React.Component));
exports.default = UserDataSection;
//# sourceMappingURL=index.js.map