"use strict";
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
var axios_1 = require("axios");
var config = require("../config");
var EncryptionData = require("./EncryptionData");
var Backend = /** @class */ (function () {
    function Backend() {
    }
    Backend.checkServer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        status = true;
                        return [4 /*yield*/, axios_1.default.get('https://playtown.crossfireworks.com/check')
                                .then(function (response) {
                                status = true;
                            }).catch(function (error) {
                                status = false;
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, status];
                }
            });
        });
    };
    Backend.getNews = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(config.backend.url + '/getnews', {
                            clientid: config.backend.clientid,
                            clientsecret: config.backend.clientsecret,
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    // news has no id
    Backend.addNews = function (news) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(config.backend.url + '/addnews', {
                            clientid: config.backend.clientid,
                            clientsecret: config.backend.clientsecret,
                            news: news
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    // news has id
    Backend.editNews = function (news) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(config.backend.url + '/editnews', {
                            clientid: config.backend.clientid,
                            clientsecret: config.backend.clientsecret,
                            news: news
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    Backend.removeNews = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(config.backend.url + '/deletenews', {
                            clientid: config.backend.clientid,
                            clientsecret: config.backend.clientsecret,
                            id: id
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    Backend.getUser = function (thaiID) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(config.backend.url + '/getuser', {
                            clientid: config.backend.clientid,
                            clientsecret: config.backend.clientsecret,
                            thaiID: thaiID
                        })];
                    case 1:
                        res = _a.sent();
                        data = {};
                        data.userNotFound = res.data[0].length === 0;
                        if (!data.userNotFound) {
                            data.user = res.data[0][0];
                            data.user.stamp = res.data[1][0].stamp;
                            data.userHighScores = res.data[2];
                        }
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Backend.getUserExchangeLog = function (thaiID) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(config.backend.url + '/getuserexchangelog', {
                            clientid: config.backend.clientid,
                            clientsecret: config.backend.clientsecret,
                            thaiID: thaiID
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data[0]];
                }
            });
        });
    };
    Backend.getUserPlayLog = function (thaiID) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(config.backend.url + '/getuserplaylog', {
                            clientid: config.backend.clientid,
                            clientsecret: config.backend.clientsecret,
                            thaiID: thaiID
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data[0]];
                }
            });
        });
    };
    Backend.getUserGivenTicketLog = function (thaiID) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(config.backend.url + '/getgiveticket', {
                            clientid: config.backend.clientid,
                            clientsecret: config.backend.clientsecret,
                            thaiID: thaiID
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data[0]];
                }
            });
        });
    };
    Backend.getGameMetric = function (startDate, endDate) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(config.backend.url + '/callfunc', {
                            clientid: config.backend.clientid,
                            clientsecret: config.backend.clientsecret,
                            routine: 'backend_get_game_metric("' + startDate + '","' + endDate + '")'
                        })];
                    case 1:
                        res = _a.sent();
                        data = {
                            total_user: res.data[0][0].total_user,
                            total_game_play: res.data[1][0].total_game_play,
                            total_buy_package: res.data[2][0].total_buy_package,
                            total_truepoint: res.data[3][0].total_truepoint || 0
                        };
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Backend.getAvailableGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(config.backend.url + '/callfunc', {
                            clientid: config.backend.clientid,
                            clientsecret: config.backend.clientsecret,
                            routine: 'backend_get_available_game()'
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data[0]];
                }
            });
        });
    };
    Backend.getGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(config.backend.url + '/getgame', {
                            clientid: config.backend.clientid,
                            clientsecret: config.backend.clientsecret
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data[0]];
                }
            });
        });
    };
    Backend.giveTicket = function (trueid, ticket) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(config.backend.url + '/giveticket', {
                            clientid: config.backend.clientid,
                            clientsecret: config.backend.clientsecret,
                            trueid: trueid,
                            ticket: ticket
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    Backend.getDailyChallenge = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(config.backend.url + '/getdailychallenge', {
                            clientid: config.backend.clientid,
                            clientsecret: config.backend.clientsecret
                        })];
                    case 1:
                        res = _a.sent();
                        data = {
                            dailyChallengeDialog: {
                                daily_challenge_text: res.data[0][0].value,
                                login_stamp_footer: res.data[0][1].value,
                                login_stamp_header: res.data[0][2].value
                            },
                            prizeData: __assign({}, res.data[1][0])
                        };
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Backend.addPrize = function (prize) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(config.backend.url + '/addprize', __assign({ clientid: config.backend.clientid, clientsecret: config.backend.clientsecret }, prize))];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data];
                }
            });
        });
    };
    Backend.getPrizes = function (gameID) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(config.backend.url + '/callfunc', {
                            clientid: config.backend.clientid,
                            clientsecret: config.backend.clientsecret,
                            routine: 'backend_get_prizes(' + gameID + ')'
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data[0]];
                }
            });
        });
    };
    Backend.getWinners = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(config.backend.url + '/callfunc', {
                            clientid: config.backend.clientid,
                            clientsecret: config.backend.clientsecret,
                            routine: 'backend_get_winners()'
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data[0]];
                }
            });
        });
    };
    Backend.getGameMetricByGameID = function (gameID, startDate, endDate) {
        return __awaiter(this, void 0, void 0, function () {
            var res, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(config.backend.url + '/callfunc', {
                            clientid: config.backend.clientid,
                            clientsecret: config.backend.clientsecret,
                            routine: 'backend_get_game_metric_by_game_id("' + gameID + '","' + startDate + '","' + endDate + '")'
                        })];
                    case 1:
                        res = _a.sent();
                        data = {
                            total_game_unique_user: res.data[0][0].total_game_unique_user || 0,
                            total_game_play: res.data[1][0].total_game_play || 0
                        };
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Backend.getUserDayChallenge = function (thaiID, campaignID) {
        return __awaiter(this, void 0, void 0, function () {
            var thaiIDValue, res, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        thaiIDValue = EncryptionData.encrypt(thaiID);
                        return [4 /*yield*/, axios_1.default.post(config.backend.url + '/callfunc', {
                                clientid: config.backend.clientid,
                                clientsecret: config.backend.clientsecret,
                                routine: 'backend_get_user_day_challenge("' + thaiIDValue + '","' + campaignID + '")'
                            })];
                    case 1:
                        res = _a.sent();
                        data = {
                            combo: res.data[2][0].combo || 0,
                            total_right: res.data[2][0].total_right || 0,
                            last_stamp: res.data[2][0].last_stamp_date || 'not found',
                            remain_day: res.data[1][0].remain_day || 0,
                            total_day: res.data[1][0].total_challenge_day || 0,
                            begin_datetime: res.data[1][0].begin_datetime || 'not found',
                            end_datetime: res.data[1][0].end_datetime || 'not found',
                            logs: res.data[3] || [],
                            campaigns: res.data[4] || []
                        };
                        return [2 /*return*/, data];
                }
            });
        });
    };
    Backend.getServerStatusLog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.post(config.backend.url + '/callfunc', {
                            clientid: config.backend.clientid,
                            clientsecret: config.backend.clientsecret,
                            routine: 'backend_get_server_status_log()'
                        })];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res.data[0]];
                }
            });
        });
    };
    return Backend;
}());
exports.default = Backend;
//# sourceMappingURL=Backend.js.map