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
// data.prizeData =
// {
//   "id": 1,
//   "type": "Lotto",
//   "game_id": -1,
//   "name": "ลุ้นรางวัลประจำเดือน MacBook Pro",
//   "code": "code_macbook_pro",
//   "title": "ลุ้นรางวัลประจำเดือน MacBook Pro",
//   "description": "พิเศษ ร่วมสนุกเกม TrueYou PlayTown ครบ 15 วัน ลุ้น MacBook Pro 13นิ้ว Touch Bar & Touch ID มูลค่า 65000 บาท",
//   "condition": " ",
//   "value": 65000,
//   "tax": 0,
//   "vat": 0,
//   "brand_icon_url": "some image from server",
//   "thumbnail_img_url": "https://playtown.blob.core.windows.net/home/backoffice/news/macbook-pro.png",
//   "img_url": "https://playtown.blob.core.windows.net/home/backoffice/news/macbook-pro.png",
//   "qr_url": "https://playtown.blob.core.windows.net/home/images/qrcode/code_macbook_pro.png",
//   "month": "December",
//   "year": 2017,
//   "expired_datetime": "2017-12-31T17:00:00.000Z"
// }
var DailyChallengeSection = /** @class */ (function (_super) {
    __extends(DailyChallengeSection, _super);
    function DailyChallengeSection(props) {
        var _this = _super.call(this, props) || this;
        _this.handleHeaderChange = function (event) {
            _this.setState({
                data: {
                    dailyChallengeDialog: {
                        login_stamp_header: event.currentTarget.value
                    }
                }
            });
        };
        _this.handleFooterChange = function (event) {
            _this.setState({
                data: {
                    dailyChallengeDialog: {
                        login_stamp_footer: event.currentTarget.value
                    }
                }
            });
        };
        _this.handleConditionChange = function (event) {
            _this.setState({
                data: {
                    dailyChallengeDialog: {
                        daily_challenge_text: event.currentTarget.value
                    }
                }
            });
        };
        _this.handleDescriptionChange = function (event) {
            _this.setState({
                data: {
                    prizeData: {
                        description: event.currentTarget.value
                    }
                }
            });
        };
        _this.handleValueChange = function (event) {
            var v = Number(event.currentTarget.value);
            if (isNaN(v))
                return;
            _this.setState({
                data: {
                    prizeData: {
                        value: v
                    }
                }
            });
        };
        _this.handleTaxVATChange = function (event) {
            _this.setState({
                data: {
                    prizeData: {
                        tax: 0,
                        vat: 0
                    }
                }
            });
        };
        _this.handleMonthChange = function (event) {
            _this.setState({
                data: {
                    prizeData: {
                        month: event.currentTarget.value
                    }
                }
            });
        };
        _this.handleYearChange = function (event) {
            _this.setState({
                data: {
                    prizeData: {
                        year: Number(event.currentTarget.value)
                    }
                }
            });
        };
        _this.handleThumbnailImageChange = function (imageUrl) {
        };
        _this.handleFullImageChange = function (imageUrl) {
        };
        _this.state = {
            isLoading: true,
        };
        return _this;
    }
    DailyChallengeSection.prototype.componentDidMount = function () {
        this.getDailyChallenge();
    };
    DailyChallengeSection.prototype.getDailyChallenge = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Backend_1.default.getDailyChallenge()];
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
    DailyChallengeSection.prototype.render = function () {
        // const monthOptions: Array<any> = [
        //   {key: 'January', value: 'January', text: 'มกราคม'},
        //   {key: 'February', value: 'February', text: 'กุมภาพันธ์'},
        //   {key: 'March', value: 'March', text: 'มีนาคม'},
        //   {key: 'April', value: 'April', text: 'เมษายน'},
        //   {key: 'May', value: 'May', text: 'พฤษภาคม'},
        //   {key: 'June', value: 'June', text: 'มิถุนายน'},
        //   {key: 'July', value: 'July', text: 'กรกฎาคม'},
        //   {key: 'August', value: 'August', text: 'สิงหาคม'},
        //   {key: 'September', value: 'September', text: 'กันยายน'},
        //   {key: 'October', value: 'October', text: 'ตุลาคม'},
        //   {key: 'November', value: 'November', text: 'พฤศจิกายน'},
        //   {key: 'December', value: 'December', text: 'ธันวาคม'}
        // ];
        // const yearOptions: Array<any> = [
        //   {key: '2017', value: '2017', text: '2560'},
        //   {key: '2018', value: '2018', text: '2561'}
        // ];
        return (React.createElement(semantic_ui_react_1.Container, null,
            React.createElement("h1", null, "\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E25\u0E47\u0E2D\u0E04\u0E2D\u0E34\u0E19\u0E15\u0E48\u0E2D\u0E40\u0E19\u0E37\u0E48\u0E2D\u0E07")));
        // return (
        //   <Container>
        //     <h1>รางวัลล็อคอินต่อเนื่อง</h1>
        //     <Segment basic loading={this.state.isLoading}>
        //       <Segment>
        //         <h3>หน้า Daily Challenge</h3>
        //         {this.state.data &&
        //         <Form>
        //           <Form.Input required label='Header' value={this.state.data.dailyChallengeDialog.login_stamp_header} onChange={this.handleHeaderChange}/>
        //           <Form.Input required label='Footer' value={this.state.data.dailyChallengeDialog.login_stamp_footer} onChange={this.handleFooterChange}/>
        //           <Form.TextArea required autoHeight label='รายละเอียดเงื่อนไข' value={this.state.data.dailyChallengeDialog.daily_challenge_text} onChange={this.handleConditionChange}/>
        //         </Form>}
        //       </Segment>
        //       <Segment>
        //         <h3>หน้ารางวัลของฉัน</h3>
        //         {this.state.data &&
        //           <Form>
        //           <Form.Input required label='ชื่อรางวัล' value={this.state.data.prizeData.title} onChange={this.handleHeaderChange}/>
        //           <Form.Input required label='รายละเอียดของรางวัล' value={this.state.data.prizeData.description} onChange={this.handleDescriptionChange}/>
        //           <Form.Input required label='มูลค่าของรางวัล' tye='number' value={this.state.data.prizeData.value} onChange={this.handleValueChange}/>
        //           <Form.Checkbox required label='มีภาษีหัก ณ ที่จ่าย 5% และ ภาษีมูลค่าเพิ่ม 7% (VAT)' onChange={this.handleTaxVATChange}/>
        //           <AzureImageUploader 
        //             label="รูปแบนเนอร์" 
        //             imageUrl={this.state.data.prizeData.thumbnail_img_url}
        //             constraintWidth={500} 
        //             constraintHeight={220} 
        //             uploadPath="backoffice/news/"
        //             onChange={this.handleThumbnailImageChange} />
        //           <AzureImageUploader 
        //             label="รูปใหญ่" 
        //             imageUrl={this.state.data.prizeData.img_url}
        //             constraintWidth={500} 
        //             constraintHeight={220} 
        //             uploadPath="backoffice/news/"
        //             onChange={this.handleFullImageChange} />
        //           <Form.Select required label='ประจำเดือน' options={monthOptions} defaultValue={this.state.data.prizeData.month} onChange={this.handleMonthChange}/>
        //           <Form.Select required label='ปี' options={yearOptions} defaultValue={String(this.state.data.prizeData.year)} onChange={this.handleYearChange}/>
        //         </Form>}
        //       </Segment>
        //     </Segment>
        //   </Container>
        // );
    };
    return DailyChallengeSection;
}(React.Component));
exports.default = DailyChallengeSection;
//# sourceMappingURL=index.js.map