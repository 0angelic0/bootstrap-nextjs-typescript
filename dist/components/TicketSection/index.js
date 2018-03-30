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
var TicketSection = /** @class */ (function (_super) {
    __extends(TicketSection, _super);
    function TicketSection(props) {
        var _this = _super.call(this, props) || this;
        _this.handleGiveTicket = function (event) {
            _this.GiveTicket();
        };
        _this.handleClose = function () { return _this.setState({ modalOpen: false }); };
        _this.handleThaiID = function (event) {
            _this.setState({
                thaiid: event.currentTarget.value
            });
        };
        _this.handleTotal = function (event) {
            _this.setState({
                ticket: event.currentTarget.value
            });
        };
        _this.state = {
            searchErrorMsg: '',
            thaiid: '',
            ticket: 0,
            status: '',
            isLoading: false,
            modalOpen: false
        };
        return _this;
    }
    TicketSection.prototype.GiveTicket = function () {
        return __awaiter(this, void 0, void 0, function () {
            var respond;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // if (this.state.thaiid.length !== 13 || isNaN(Number(this.state.thaiid))) {
                        //   this.setState({
                        //     searchErrorMsg: 'กรุณากรอกเลขบัตรประชาชน 13 หลัก'
                        //   });
                        //   return;
                        // }
                        this.setState({
                            isLoading: true
                        });
                        return [4 /*yield*/, Backend_1.default.giveTicket(String(this.state.thaiid), Number(this.state.ticket))];
                    case 1:
                        respond = _a.sent();
                        this.setState({
                            searchErrorMsg: '',
                            thaiid: this.state.thaiid,
                            ticket: 0,
                            status: respond.status,
                            isLoading: false,
                            modalOpen: true
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    TicketSection.prototype.render = function () {
        var modalOpen = this.state.modalOpen;
        return (React.createElement(semantic_ui_react_1.Dimmer.Dimmable, { as: semantic_ui_react_1.Container, dimmed: this.state.isLoading },
            React.createElement(semantic_ui_react_1.Dimmer, { active: this.state.isLoading, inverted: true },
                React.createElement(semantic_ui_react_1.Loader, null, "Loading")),
            React.createElement(semantic_ui_react_1.Container, null,
                React.createElement("h1", null, "\u0E43\u0E2B\u0E49 Ticket \u0E1C\u0E39\u0E49\u0E40\u0E25\u0E48\u0E19"),
                React.createElement(semantic_ui_react_1.Form, null,
                    React.createElement(semantic_ui_react_1.Form.Input, { label: 'ผู้เล่น', placeholder: 'True ID', value: this.state.thaiid, onChange: this.handleThaiID }),
                    React.createElement(semantic_ui_react_1.Form.Input, { label: 'Total Ticket', placeholder: 'จำนวน', value: this.state.ticket, onChange: this.handleTotal }),
                    React.createElement(semantic_ui_react_1.Button, { type: 'submit', onClick: this.handleGiveTicket }, "Submit")),
                React.createElement("div", null,
                    React.createElement(semantic_ui_react_1.Modal, { size: 'mini', open: modalOpen, onClose: this.handleClose },
                        React.createElement(semantic_ui_react_1.Modal.Header, null, "Result"),
                        React.createElement(semantic_ui_react_1.Modal.Content, null,
                            React.createElement("p", null, this.state.status)),
                        React.createElement(semantic_ui_react_1.Modal.Actions, null,
                            React.createElement(semantic_ui_react_1.Button, { color: 'green', onClick: this.handleClose, inverted: true },
                                React.createElement(semantic_ui_react_1.Icon, { name: 'checkmark' }),
                                " Ok")))),
                this.state.searchErrorMsg && React.createElement(semantic_ui_react_1.Message, { error: true }, this.state.searchErrorMsg))));
    };
    return TicketSection;
}(React.Component));
exports.default = TicketSection;
//# sourceMappingURL=index.js.map