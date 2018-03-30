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
var ImageUtility_1 = require("../lib/ImageUtility");
var semantic_ui_react_1 = require("semantic-ui-react");
var config = require("../config");
var AzureImageUploader = /** @class */ (function (_super) {
    __extends(AzureImageUploader, _super);
    function AzureImageUploader(props) {
        var _this = _super.call(this, props) || this;
        _this.handleFileChange = function (event) {
            var file = event.currentTarget.files[0];
            if (!file) {
                event.preventDefault();
                return;
            }
            _this.checkImageAndUpload(file);
        };
        if ((props.constraintWidth) && (props.constraintHeight)) {
            _this.isNeedValidateDimension = true;
            _this.fileValidateError = 'ไฟล์ต้องเป็นนามสกุล .jpg หรือ .png และมีขนาด ' + props.constraintWidth + ' x ' + props.constraintHeight;
        }
        else {
            _this.isNeedValidateDimension = false;
            _this.fileValidateError = 'ไฟล์ต้องเป็นนามสกุล .jpg หรือ .png';
        }
        _this.uploadError = 'อัพโหลดไม่สำเร็จ กรุณาลองใหม่อีกครั้ง';
        _this.state = {
            isUploading: false,
            isShowError: false,
            errorMsg: '',
            imageUrl: props.imageUrl
        };
        return _this;
    }
    AzureImageUploader.prototype.uploadFileToAzureBlobStorage = function (file) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var AzureStorage = window.AzureStorage;
            var blobService = AzureStorage.createBlobService(config.azureStorage.account, config.azureStorage.accessKey, config.azureStorage.host);
            var customBlockSize = file.size > 1024 * 1024 * 32 ? 1024 * 1024 * 4 : 1024 * 512;
            blobService.singleBlobPutThresholdInBytes = customBlockSize;
            blobService.createBlockBlobFromBrowserFile(config.azureStorage.container, _this.props.uploadPath + file.name, file, { blockSize: customBlockSize }, function (error, result, response) {
                if (error) {
                    // Upload blob failed
                    resolve([false, '']);
                }
                else {
                    // Upload successfully
                    resolve([true, _this.props.uploadPath + file.name]);
                }
            });
        });
    };
    AzureImageUploader.prototype.checkImageAndUpload = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var valid, _a, success, name, imageUrl;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, ImageUtility_1.default.isImageJPGOrPNG(file, this.props.constraintWidth, this.props.constraintHeight)];
                    case 1:
                        valid = _b.sent();
                        if (!valid) {
                            this.setState({
                                isShowError: true,
                                errorMsg: this.fileValidateError
                            });
                            return [2 /*return*/];
                        }
                        this.setState({
                            isShowError: false,
                            isUploading: true
                        });
                        return [4 /*yield*/, this.uploadFileToAzureBlobStorage(file)];
                    case 2:
                        _a = _b.sent(), success = _a[0], name = _a[1];
                        if (!success) {
                            this.setState({
                                isUploading: false,
                                isShowError: true,
                                errorMsg: this.uploadError
                            });
                            return [2 /*return*/];
                        }
                        imageUrl = config.azureStorage.host + '/' + config.azureStorage.container + '/' + name;
                        this.setState({
                            isUploading: false,
                            isShowError: false,
                            imageUrl: imageUrl
                        });
                        this.props.onChange(imageUrl);
                        return [2 /*return*/];
                }
            });
        });
    };
    AzureImageUploader.prototype.render = function () {
        var labelText = this.props.label;
        if (this.isNeedValidateDimension) {
            labelText += ' (ขนาด ' + this.props.constraintWidth + ' x ' + this.props.constraintHeight + ')';
        }
        return React.createElement(semantic_ui_react_1.Form.Field, { required: true },
            React.createElement("label", null, labelText),
            React.createElement(semantic_ui_react_1.Segment.Group, null,
                React.createElement(semantic_ui_react_1.Segment, { loading: this.state.isUploading },
                    React.createElement(semantic_ui_react_1.Label, { attached: 'top' },
                        this.state.imageUrl && React.createElement(semantic_ui_react_1.Icon, { name: "check" }),
                        !this.props.hiddenUrl && this.state.imageUrl),
                    React.createElement(semantic_ui_react_1.Image, { size: "medium", centered: true, src: this.state.imageUrl })),
                React.createElement(semantic_ui_react_1.Input, { type: "file", accept: "image/jpeg,image/png", onChange: this.handleFileChange }),
                this.state.isShowError && React.createElement(semantic_ui_react_1.Message, { negative: true }, this.state.errorMsg)));
    };
    return AzureImageUploader;
}(React.Component));
exports.default = AzureImageUploader;
//# sourceMappingURL=AzureImageUploader.js.map