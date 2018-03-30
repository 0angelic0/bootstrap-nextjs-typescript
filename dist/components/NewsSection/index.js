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
var AzureImageUploader_1 = require("../AzureImageUploader");
var semantic_ui_react_1 = require("semantic-ui-react");
var react_table_1 = require("react-table");
var Backend_1 = require("../../lib/Backend");
var model_1 = require("./model");
var NewsEditor = /** @class */ (function (_super) {
    __extends(NewsEditor, _super);
    function NewsEditor(props) {
        var _this = _super.call(this, props) || this;
        _this.handleDisplayOrderChange = function (event) {
            var v = Number(event.currentTarget.value);
            if (isNaN(v))
                return;
            _this.setState({
                display_order: v
            });
        };
        _this.handleTitleChange = function (event) {
            _this.setState({
                title: event.currentTarget.value
            });
        };
        _this.handleDescriptionChange = function (event) {
            _this.setState({
                description: event.currentTarget.value
            });
        };
        _this.handleThumbnailImageChange = function (imageUrl) {
            _this.setState({
                thumbnail_image_url: imageUrl
            });
        };
        _this.handleFullImageChange = function (imageUrl) {
            _this.setState({
                full_image_url: imageUrl
            });
        };
        _this.handleSubmit = function (event) {
            if ((_this.state.title === '') ||
                (_this.state.description === '') ||
                (_this.state.thumbnail_image_url === '') ||
                (_this.state.full_image_url === '')) {
                _this.errorMsg = 'กรุณากรอกข้อมูลให้ครบถ้วน';
                _this.forceUpdate();
                return;
            }
            _this.errorMsg = '';
            _this.forceUpdate();
            _this.props.handleEditor(_this.state);
        };
        _this.news = props.news ? props.news : model_1.createEmptyNewsData();
        _this.mode = props.news ? 'edit' : 'add';
        _this.errorMsg = '';
        _this.state = __assign({}, _this.news);
        return _this;
    }
    NewsEditor.prototype.render = function () {
        return React.createElement(semantic_ui_react_1.Form, null,
            React.createElement(semantic_ui_react_1.Form.Input, { required: true, label: 'ลำดับ', tye: 'number', placeholder: '1', value: this.state.display_order, onChange: this.handleDisplayOrderChange }),
            React.createElement(semantic_ui_react_1.Form.Input, { required: true, label: 'หัวข้อข่าว', placeholder: 'เล่นเลย รับเพียบ!', value: this.state.title, onChange: this.handleTitleChange }),
            React.createElement(semantic_ui_react_1.Form.TextArea, { required: true, autoHeight: true, label: 'เนื้อหาข่าว', placeholder: 'มาเล่นกันได้เลย ตั้งแต่วันนี้...', value: this.state.description, onChange: this.handleDescriptionChange }),
            React.createElement(AzureImageUploader_1.default, { label: "รูปภาพหัวข้อ", imageUrl: this.state.thumbnail_image_url, constraintWidth: 500, constraintHeight: 220, uploadPath: "backoffice/news/", onChange: this.handleThumbnailImageChange }),
            React.createElement(AzureImageUploader_1.default, { label: "รูปภาพเนื้อหา", imageUrl: this.state.full_image_url, constraintWidth: 500, constraintHeight: 220, uploadPath: "backoffice/news/", onChange: this.handleFullImageChange }),
            (this.mode === 'add') && React.createElement(semantic_ui_react_1.Button, { color: "green", icon: 'add', labelPosition: 'left', content: "เพิ่ม", onClick: this.handleSubmit }),
            (this.mode === 'edit') && React.createElement(semantic_ui_react_1.Button, { color: "yellow", icon: 'edit', labelPosition: 'left', content: "แก้ไข", onClick: this.handleSubmit }),
            this.errorMsg && React.createElement(semantic_ui_react_1.Message, { negative: true }, this.errorMsg));
    };
    return NewsEditor;
}(React.Component));
///////////////////////////////////////////////////////////////////////////////
// Modal
///////////////////////////////////////////////////////////////////////////////
var AddButton = /** @class */ (function (_super) {
    __extends(AddButton, _super);
    function AddButton(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOpen = function (event) {
            _this.setState({
                open: true
            });
        };
        _this.handleClose = function (event) {
            _this.setState({
                open: false
            });
        };
        _this.handleEditor = function (news) {
            _this.setState({
                open: false
            });
            _this.props.handleEditor(news);
        };
        _this.state = {
            open: false
        };
        return _this;
    }
    AddButton.prototype.render = function () {
        return React.createElement(semantic_ui_react_1.Modal, { size: "mini", open: this.state.open, closeOnEscape: true, closeOnDimmerClick: true, trigger: React.createElement(semantic_ui_react_1.Button, { basic: true, color: "green", onClick: this.handleOpen }, "\u0E40\u0E1E\u0E34\u0E48\u0E21"), onClose: this.handleClose, closeIcon: true },
            React.createElement(semantic_ui_react_1.Modal.Header, null, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E02\u0E48\u0E32\u0E27"),
            React.createElement(semantic_ui_react_1.Modal.Content, null,
                React.createElement(NewsEditor, { handleEditor: this.handleEditor })));
    };
    return AddButton;
}(React.Component));
var EditButton = /** @class */ (function (_super) {
    __extends(EditButton, _super);
    function EditButton(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOpen = function (event) {
            _this.setState({
                open: true
            });
        };
        _this.handleClose = function (event) {
            _this.setState({
                open: false
            });
        };
        _this.handleEditor = function (news) {
            _this.setState({
                open: false
            });
            _this.props.handleEditor(news);
        };
        _this.state = {
            open: false
        };
        return _this;
    }
    EditButton.prototype.render = function () {
        return React.createElement(semantic_ui_react_1.Modal, { size: "mini", open: this.state.open, closeOnEscape: true, closeOnDimmerClick: true, trigger: React.createElement(semantic_ui_react_1.Button, { basic: true, color: "yellow", onClick: this.handleOpen }, "\u0E41\u0E01\u0E49\u0E44\u0E02"), onClose: this.handleClose, closeIcon: true },
            React.createElement(semantic_ui_react_1.Modal.Header, null, "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E02\u0E48\u0E32\u0E27"),
            React.createElement(semantic_ui_react_1.Modal.Content, null,
                React.createElement(NewsEditor, { news: this.props.news, handleEditor: this.handleEditor })));
    };
    return EditButton;
}(React.Component));
var RemoveButton = /** @class */ (function (_super) {
    __extends(RemoveButton, _super);
    function RemoveButton(props) {
        var _this = _super.call(this, props) || this;
        _this.handleOpen = function (event) {
            _this.setState({
                open: true
            });
        };
        _this.handleClose = function (event) {
            _this.setState({
                open: false
            });
        };
        _this.handleClick = function (event) {
            _this.setState({
                open: false
            });
            _this.props.handleRemoveNews(_this.props.id);
        };
        _this.state = {
            open: false
        };
        return _this;
    }
    RemoveButton.prototype.render = function () {
        return React.createElement(semantic_ui_react_1.Modal, { size: "mini", open: this.state.open, closeOnEscape: true, closeOnDimmerClick: false, trigger: React.createElement(semantic_ui_react_1.Button, { basic: true, color: "red", onClick: this.handleOpen }, "\u0E25\u0E1A"), onClose: this.handleClose, closeIcon: true },
            React.createElement(semantic_ui_react_1.Modal.Header, null, "\u0E25\u0E1A\u0E02\u0E48\u0E32\u0E27"),
            React.createElement(semantic_ui_react_1.Modal.Content, null,
                React.createElement("p", null, this.props.title)),
            React.createElement(semantic_ui_react_1.Modal.Actions, null,
                React.createElement(semantic_ui_react_1.Button, { color: "red", icon: 'delete', labelPosition: 'left', content: "ลบ", onClick: this.handleClick })));
    };
    return RemoveButton;
}(React.Component));
var NewsSection = /** @class */ (function (_super) {
    __extends(NewsSection, _super);
    function NewsSection(props) {
        var _this = _super.call(this, props) || this;
        _this.handleRemoveNews = function (id) {
            _this.setState({
                isLoading: true
            });
            _this.removeNews(id);
        };
        _this.handleAddNews = function (news) {
            _this.setState({
                isLoading: true
            });
            _this.addNews(news);
        };
        _this.handleEditNews = function (news) {
            _this.setState({
                isLoading: true
            });
            _this.editNews(news);
        };
        _this.state = {
            isLoading: true,
            data: []
        };
        _this.columns = [{
                Header: 'id',
                accessor: 'id',
                minWidth: 30
            }, {
                Header: 'ลำดับ',
                accessor: 'display_order',
                minWidth: 30
            }, {
                Header: 'หัวข้อ',
                accessor: 'title',
            }, {
                Header: 'เนื้อหา',
                accessor: 'description',
            }, {
                Header: 'รูปภาพหัวข้อ',
                accessor: 'thumbnail_image_url',
                Cell: function (props) { return React.createElement(semantic_ui_react_1.Image, { src: props.value }); }
            }, {
                Header: 'รูปภาพเนื้อหา',
                accessor: 'full_image_url',
                Cell: function (props) { return React.createElement(semantic_ui_react_1.Image, { src: props.value }); }
            }, {
                Header: 'คำสั่ง',
                accessor: '',
                Cell: function (props) { return React.createElement("div", null,
                    React.createElement(EditButton, { news: props.row, handleEditor: _this.handleEditNews }),
                    React.createElement(RemoveButton, { id: props.row.id, title: props.row.title, handleRemoveNews: _this.handleRemoveNews })); }
            }];
        return _this;
    }
    NewsSection.prototype.componentDidMount = function () {
        this.getNews();
    };
    NewsSection.prototype.getNews = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Backend_1.default.getNews()];
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
    NewsSection.prototype.removeNews = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Backend_1.default.removeNews(id)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, Backend_1.default.getNews()];
                    case 2:
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
    NewsSection.prototype.addNews = function (news) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Backend_1.default.addNews(news)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, Backend_1.default.getNews()];
                    case 2:
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
    NewsSection.prototype.editNews = function (news) {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Backend_1.default.editNews(news)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, Backend_1.default.getNews()];
                    case 2:
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
    NewsSection.prototype.render = function () {
        return (React.createElement(semantic_ui_react_1.Container, null,
            React.createElement("h1", null, "\u0E02\u0E48\u0E32\u0E27\u0E2A\u0E32\u0E23"),
            React.createElement(semantic_ui_react_1.Segment, { basic: true, loading: this.state.isLoading },
                React.createElement(semantic_ui_react_1.Container, { textAlign: "right" },
                    React.createElement(AddButton, { handleEditor: this.handleAddNews })),
                React.createElement(react_table_1.default, { className: "-striped", data: this.state.data, columns: this.columns }))));
    };
    return NewsSection;
}(React.Component));
exports.default = NewsSection;
//# sourceMappingURL=index.js.map