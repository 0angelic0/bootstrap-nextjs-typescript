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
var Papa = require("papaparse");
var AzureImageUploader_1 = require("../AzureImageUploader");
var semantic_ui_react_1 = require("semantic-ui-react");
var model_1 = require("./model");
var Backend_1 = require("../../lib/Backend");
var PrizeEditor = /** @class */ (function (_super) {
    __extends(PrizeEditor, _super);
    function PrizeEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.handleTypeChange = function (event) {
            _this.setState({
                type: Number(event.currentTarget.value)
            });
        };
        _this.handleNameChange = function (event) {
            _this.setState({
                name: event.currentTarget.value
            });
        };
        _this.handleDescriptionChange = function (event) {
            _this.setState({
                description: event.currentTarget.value
            });
        };
        _this.handleConditionChange = function (event) {
            _this.setState({
                condition: event.currentTarget.value
            });
        };
        _this.handleValueChange = function (event) {
            _this.setState({
                value: Number(event.currentTarget.value)
            });
        };
        _this.handleLogoImageChange = function (url) {
            _this.setState({
                brand_icon_img_120x120: url
            });
        };
        _this.handleThumbnailImageChange = function (url) {
            _this.setState({
                myprize_img_320x200: url
            });
        };
        _this.handleFullImageChange = function (url) {
            _this.setState({
                myprize_full_img_570x350: url
            });
        };
        _this.handleHowtoChange = function (url) {
            _this.setState({
                howto_img_500x220: url
            });
        };
        _this.handleExpiredChange = function (event) {
            _this.setState({
                expired_datetime: event.currentTarget.value
            });
        };
        _this.handleFileChange = function (event) {
            var file = event.currentTarget.files[0];
            if (!file) {
                event.preventDefault();
                return;
            }
            Papa.parse(file, {
                complete: function (result) {
                    result.data.forEach(function (element) {
                        _this.codes.push(element[0]);
                    });
                    _this.setState({
                        prizeTotal: _this.codes.length
                    });
                }
            });
        };
        _this.handleSubmit = function (event) {
            _this.submit();
        };
        var prize = props.prize ? props.prize : model_1.createEmptyPrizeData();
        _this.mode = props.prize ? 'edit' : 'add';
        _this.errorMsg = '';
        _this.codes = [];
        _this.state = __assign({}, prize, { isLoading: false, prizeCounter: 0, prizeTotal: 0 });
        return _this;
    }
    PrizeEditor.prototype.submit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var vat, tax, i, prize;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState({
                            isLoading: true
                        });
                        vat = 0;
                        tax = 0;
                        if (this.state.type == 2) {
                            vat = this.state.value * 0.07;
                            tax = this.state.value * 0.05;
                        }
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < this.codes.length)) return [3 /*break*/, 4];
                        prize = Object.assign({}, this.state);
                        prize.title = 'Unused';
                        prize.gameid = this.props.gameid;
                        prize.code = this.codes[i];
                        prize.tax = tax;
                        prize.vat = vat;
                        prize.month = 'January';
                        prize.year = '2018';
                        prize.expireddatetime = prize.expired_datetime; // hot fix
                        return [4 /*yield*/, Backend_1.default.addPrize(prize)];
                    case 2:
                        _a.sent();
                        this.setState({
                            prizeCounter: i + 1
                        });
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.setState({
                            isLoading: false
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PrizeEditor.prototype.render = function () {
        var TypeOptions = [
            { key: '1', text: 'Tax-free', value: '1' },
            { key: '2', text: 'Tax', value: '2' },
        ];
        return React.createElement("div", null,
            React.createElement(semantic_ui_react_1.Form, null,
                React.createElement(semantic_ui_react_1.Form.Select, { required: true, label: 'ประเภท', options: TypeOptions, defaultValue: String(this.state.type), onChange: this.handleTypeChange }),
                React.createElement(semantic_ui_react_1.Form.Input, { required: true, label: 'ชื่อ', value: this.state.name, onChange: this.handleNameChange }),
                React.createElement(semantic_ui_react_1.Form.TextArea, { required: true, autoHeight: true, label: 'คำอธิบาย', value: this.state.description, onChange: this.handleDescriptionChange }),
                React.createElement(semantic_ui_react_1.Form.TextArea, { required: true, autoHeight: true, label: 'เงื่อนไข', value: this.state.condition, onChange: this.handleConditionChange }),
                React.createElement(semantic_ui_react_1.Form.Input, { required: true, label: 'มูลค่า', value: this.state.value, onChange: this.handleValueChange }),
                React.createElement(AzureImageUploader_1.default, { label: "รูปภาพ Logo brand", imageUrl: this.state.brand_icon_img_120x120, constraintWidth: 120, constraintHeight: 120, uploadPath: "backoffice/prize/", onChange: this.handleLogoImageChange }),
                React.createElement(AzureImageUploader_1.default, { label: "รูปภาพรางวัลแบบเล็ก", imageUrl: this.state.myprize_img_320x200, constraintWidth: 320, constraintHeight: 200, uploadPath: "backoffice/prize/", onChange: this.handleThumbnailImageChange }),
                React.createElement(AzureImageUploader_1.default, { label: "รูปภาพรางวัลแบบใหญ่", imageUrl: this.state.myprize_full_img_570x350, constraintWidth: 570, constraintHeight: 350, uploadPath: "backoffice/prize/", onChange: this.handleFullImageChange }),
                React.createElement(AzureImageUploader_1.default, { label: "รูปภาพรางวัลในหน้าวิธีการเล่น", imageUrl: this.state.howto_img_500x220, constraintWidth: 500, constraintHeight: 220, uploadPath: "backoffice/prize/", onChange: this.handleHowtoChange }),
                React.createElement(semantic_ui_react_1.Form.Input, { label: "รหัสของรางวัล (.txt/.csv)", type: "file", accept: "text/csv,text/plain", onChange: this.handleFileChange }),
                React.createElement(semantic_ui_react_1.Form.Input, { label: "วันหมดอายุ", type: 'date', onChange: this.handleExpiredChange, value: this.state.expired_datetime }),
                React.createElement(semantic_ui_react_1.Button, { color: "green", icon: 'add', labelPosition: 'left', content: "เพิ่ม", onClick: this.handleSubmit }),
                this.errorMsg && React.createElement(semantic_ui_react_1.Message, { negative: true }, this.errorMsg)),
            React.createElement(semantic_ui_react_1.Dimmer, { active: this.state.isLoading, page: true, inverted: true },
                React.createElement(semantic_ui_react_1.Progress, { value: this.state.prizeCounter, total: this.state.prizeTotal, progress: "ratio", active: true, color: 'red', inverted: true },
                    React.createElement(semantic_ui_react_1.Label, { color: 'red', inverted: true }, "Generating QR Code..."))));
    };
    return PrizeEditor;
}(React.Component));
exports.default = PrizeEditor;
//# sourceMappingURL=PrizeEditor.js.map