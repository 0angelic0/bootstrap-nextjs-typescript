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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var moment = require("moment");
moment.locale('th');
var PrizeDescTab = /** @class */ (function (_super) {
    __extends(PrizeDescTab, _super);
    function PrizeDescTab(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            isLoading: false,
            data: []
        };
        return _this;
    }
    PrizeDescTab.prototype.componentDidMount = function () {
        this.setState({
            isLoading: false
        });
    };
    PrizeDescTab.prototype.render = function () {
        return (React.createElement(semantic_ui_react_1.Container, null,
            React.createElement(semantic_ui_react_1.Segment, { basic: true, loading: this.state.isLoading },
                this.state.data.length > 0 &&
                    React.createElement(semantic_ui_react_1.Container, null,
                        React.createElement("h2", null, "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17\u0E02\u0E2D\u0E07\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25"),
                        React.createElement(semantic_ui_react_1.Segment, null,
                            React.createElement(semantic_ui_react_1.Header, { as: "h2", block: true }, this.state.data[0].name),
                            React.createElement("p", null,
                                React.createElement("b", null, "\u0E1B\u0E23\u0E30\u0E40\u0E20\u0E17:"),
                                " ",
                                React.createElement(semantic_ui_react_1.Segment, null, this.state.data[0].type === 1 ? 'Tax-Free' : 'Tax')),
                            React.createElement("p", null,
                                React.createElement("b", null, "\u0E21\u0E39\u0E25\u0E04\u0E48\u0E32:"),
                                " ",
                                React.createElement(semantic_ui_react_1.Segment, null, this.state.data[0].value)),
                            React.createElement("p", null,
                                React.createElement("b", null, "\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E Logo Brand (120x120):"),
                                React.createElement(semantic_ui_react_1.Segment, null,
                                    React.createElement(semantic_ui_react_1.Image, { centered: true, src: this.state.data[0].brand_icon_img_120x120 }))),
                            React.createElement("p", null,
                                React.createElement("b", null, "\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E41\u0E1A\u0E1A\u0E40\u0E25\u0E47\u0E01 (320x200):"),
                                React.createElement(semantic_ui_react_1.Segment, null,
                                    React.createElement(semantic_ui_react_1.Image, { centered: true, src: this.state.data[0].myprize_img_320x200 }))),
                            React.createElement("p", null,
                                React.createElement("b", null, "\u0E23\u0E39\u0E1B\u0E20\u0E32\u0E1E\u0E23\u0E32\u0E07\u0E27\u0E31\u0E25\u0E41\u0E1A\u0E1A\u0E43\u0E2B\u0E0D\u0E48 (570x350):"),
                                React.createElement(semantic_ui_react_1.Segment, null,
                                    React.createElement(semantic_ui_react_1.Image, { centered: true, src: this.state.data[0].myprize_full_img_570x350 }))))),
                React.createElement(semantic_ui_react_1.Divider, null))));
    };
    return PrizeDescTab;
}(React.Component));
exports.default = PrizeDescTab;
//# sourceMappingURL=PrizeDescTab.js.map