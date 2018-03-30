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
var react_table_1 = require("react-table");
var AddButton_1 = require("./AddButton");
var Backend_1 = require("../../lib/Backend");
var _ = require("lodash");
var moment = require("moment");
moment.locale('th');
var RankingPrizeTab = /** @class */ (function (_super) {
    __extends(RankingPrizeTab, _super);
    function RankingPrizeTab(props) {
        var _this = _super.call(this, props) || this;
        _this.handleAddPrize = function (prize) {
            _this.setState({
                isLoading: true
            });
        };
        _this.state = {
            isLoading: false,
            data: []
        };
        _this.columns = [{
                Header: 'ลำดับ',
                accessor: 'id',
                Cell: function (props) { return props.index + 1; }
            }, {
                Header: 'ชื่อของรางวัล',
                accessor: 'name',
                Cell: function (props) { return props.value; }
            }, {
                Header: 'รูปของแบรนด์',
                accessor: 'brand_icon_img_120x120',
                Cell: function (props) { return props.value != '120x120' ? React.createElement(semantic_ui_react_1.Image, { src: props.value, size: 'tiny' }) : 'ไม่พบรูปแบรนด์'; }
            }, {
                Header: 'รูปของรางวัล',
                accessor: 'myprize_img_320x200',
                Cell: function (props) { return props.value != '320x200' ? React.createElement(semantic_ui_react_1.Image, { src: props.value, size: 'medium' }) : 'ไม่พบรูปของรางวัล'; }
            }, {
                Header: 'รหัสของรางวัล',
                accessor: 'code',
            }, {
                Header: 'แจกแล้ว?',
                accessor: 'is_claimed',
                Cell: function (props) { return props.value == '1' ? 'แจกแล้ว' : 'ยังไม่แจก'; }
            }];
        return _this;
    }
    RankingPrizeTab.prototype.componentDidMount = function () {
        this.setState({
            isLoading: true
        });
        this.getPrizes();
    };
    RankingPrizeTab.prototype.getPrizes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Backend_1.default.getPrizes(this.props.game.id)];
                    case 1:
                        data = _a.sent();
                        this.setState({
                            isLoading: false,
                            data: data
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    RankingPrizeTab.prototype.render = function () {
        if (this.props.game.game_name !== this.props.active) {
            return null;
        }
        return (React.createElement(semantic_ui_react_1.Container, null,
            React.createElement(semantic_ui_react_1.Segment, { basic: true, loading: this.state.isLoading },
                React.createElement(semantic_ui_react_1.Container, null,
                    React.createElement("h2", null, "Code \u0E23\u0E2B\u0E31\u0E2A\u0E02\u0E2D\u0E07\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25"),
                    React.createElement("h3", null,
                        "Code \u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14: ",
                        this.state.data.length,
                        " "),
                    React.createElement("h3", null,
                        "Code \u0E17\u0E35\u0E48\u0E41\u0E08\u0E01\u0E41\u0E25\u0E49\u0E27: ",
                        _.reduce(this.state.data, function (accumulator, element) {
                            if (element.is_claimed == 1)
                                return accumulator + 1;
                            return accumulator;
                        }, 0),
                        " "),
                    React.createElement(semantic_ui_react_1.Container, { textAlign: "right" },
                        React.createElement(AddButton_1.default, { handleEditor: this.handleAddPrize, gameid: this.props.game.id })),
                    React.createElement(react_table_1.default, { className: "-striped", data: this.state.data, columns: this.columns })))));
    };
    return RankingPrizeTab;
}(React.Component));
exports.default = RankingPrizeTab;
//# sourceMappingURL=RankingPrizeTab.js.map