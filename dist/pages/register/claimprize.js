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
var AzureImageUploader_1 = require("../../components/AzureImageUploader");
var semantic_ui_react_1 = require("semantic-ui-react");
var CustomHead_1 = require("../../components/CustomHead");
var ClaimPrize = /** @class */ (function (_super) {
    __extends(ClaimPrize, _super);
    function ClaimPrize() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleCitizenImageChange = function (imageUrl) {
        };
        _this.handleSlipImageChange = function (imageUrl) {
        };
        return _this;
    }
    ClaimPrize.getInitialProps = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('context.req', context.req);
                if (context.req) {
                    console.log('context.req.body', context.req.body);
                }
                return [2 /*return*/, {}];
            });
        });
    };
    ClaimPrize.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement(CustomHead_1.default, null),
            React.createElement(semantic_ui_react_1.Container, { textAlign: "center" },
                React.createElement("h1", null, "\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19\u0E23\u0E31\u0E1A\u0E02\u0E2D\u0E07\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25"),
                React.createElement("h2", null, "\u0E15\u0E31\u0E4B\u0E27\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E1A\u0E34\u0E19 \u0E44\u0E1B - \u0E01\u0E25\u0E31\u0E1A \u0E21\u0E39\u0E25\u0E04\u0E48\u0E32 5,000 \u0E1A\u0E32\u0E17"),
                React.createElement("p", null, "\u0E20\u0E32\u0E29\u0E35\u0E2B\u0E31\u0E01 \u0E13 \u0E17\u0E35\u0E48\u0E08\u0E48\u0E32\u0E22 5% = 250 \u0E1A\u0E32\u0E17"),
                React.createElement("p", null, "\u0E20\u0E32\u0E29\u0E35\u0E21\u0E39\u0E25\u0E04\u0E48\u0E32\u0E40\u0E1E\u0E34\u0E48\u0E21 7% = 350 \u0E1A\u0E32\u0E17"),
                React.createElement("h2", null, "\u0E23\u0E27\u0E21\u0E22\u0E2D\u0E14\u0E0A\u0E33\u0E23\u0E30\u0E20\u0E32\u0E29\u0E35 = 600 \u0E1A\u0E32\u0E17"),
                React.createElement("p", null, "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E42\u0E2D\u0E19\u0E40\u0E07\u0E34\u0E19\u0E40\u0E02\u0E49\u0E32\u0E1A\u0E31\u0E0D\u0E0A\u0E35\u0E2D\u0E2D\u0E21\u0E17\u0E23\u0E31\u0E1E\u0E22\u0E4C \u0E18\u0E19\u0E32\u0E04\u0E32\u0E23\u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E"),
                React.createElement("p", null, "\u0E1A\u0E23\u0E34\u0E29\u0E31\u0E17 \u0E17\u0E23\u0E39 \u0E14\u0E34\u0E08\u0E34\u0E15\u0E2D\u0E25 \u0E21\u0E35\u0E40\u0E14\u0E35\u0E22 \u0E41\u0E2D\u0E19\u0E14\u0E4C\u200B \u0E41\u0E1E\u0E25\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21 \u0E08\u0E33\u0E01\u0E31\u0E14"),
                React.createElement("p", null, "\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48\u0E1A\u0E31\u0E0D\u0E0A\u0E35 xxx-x-xxxxx-x"),
                React.createElement("p", null, "\u0E41\u0E25\u0E30\u0E2D\u0E31\u0E1E\u0E42\u0E2B\u0E25\u0E14\u0E2A\u0E25\u0E34\u0E1B\u0E01\u0E32\u0E23\u0E42\u0E2D\u0E19\u0E40\u0E07\u0E34\u0E19 \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E2A\u0E33\u0E40\u0E19\u0E32\u0E1A\u0E31\u0E15\u0E23\u0E1B\u0E23\u0E30\u0E0A\u0E32\u0E0A\u0E19\u0E43\u0E19\u0E41\u0E1A\u0E1A\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E19\u0E35\u0E49")),
            React.createElement(semantic_ui_react_1.Form, null,
                React.createElement(semantic_ui_react_1.Segment, { basic: true },
                    React.createElement(semantic_ui_react_1.Form.Input, { required: true, placeholder: "ชื่อ" }),
                    React.createElement(semantic_ui_react_1.Form.Input, { required: true, placeholder: "นามสกุล" }),
                    React.createElement(semantic_ui_react_1.Form.Input, { required: true, type: "number", placeholder: "เบอร์โทร" }),
                    React.createElement(semantic_ui_react_1.Form.Input, { required: true, typt: "email", placeholder: "อีเมล" }),
                    React.createElement(semantic_ui_react_1.Form.Input, { required: true, placeholder: "เลขประจำตัวประชาชน" }),
                    React.createElement(AzureImageUploader_1.default, { label: "สำเนาบัตรประชาชน", imageUrl: '', constraintWidth: 0, constraintHeight: 0, uploadPath: "backoffice/winner/", onChange: this.handleCitizenImageChange, hiddenUrl: true }),
                    React.createElement(AzureImageUploader_1.default, { label: "สลิปการโอนเงิน", imageUrl: '', constraintWidth: 0, constraintHeight: 0, uploadPath: "backoffice/winner/", onChange: this.handleSlipImageChange, hiddenUrl: true }),
                    React.createElement(semantic_ui_react_1.Button, { fluid: true, type: "submit" }, "\u0E2A\u0E48\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25"))));
    };
    return ClaimPrize;
}(React.Component));
exports.default = ClaimPrize;
//# sourceMappingURL=claimprize.js.map