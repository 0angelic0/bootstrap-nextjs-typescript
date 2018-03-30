"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberUtility = /** @class */ (function () {
    function NumberUtility() {
    }
    NumberUtility.formatNumberWithCommas = function (n) {
        return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    ;
    return NumberUtility;
}());
exports.default = NumberUtility;
//# sourceMappingURL=NumberUtility.js.map