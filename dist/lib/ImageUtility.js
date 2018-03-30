"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ImageUtility = /** @class */ (function () {
    function ImageUtility() {
    }
    ImageUtility.isImageJPGOrPNG = function (file, width, height) {
        return new Promise(function (resolve, reject) {
            if ((file.type !== 'image/jpeg') && (file.type !== 'image/png')) {
                return resolve(false);
            }
            if ((width) && (height)) {
                var fileReader_1 = new FileReader();
                fileReader_1.onload = function () {
                    var image = new Image();
                    image.src = fileReader_1.result;
                    image.onload = function () {
                        if ((image.width === width) && (image.height === height)) {
                            return resolve(true);
                        }
                        return resolve(false);
                    };
                };
                fileReader_1.readAsDataURL(file);
            }
            else {
                return resolve(true);
            }
        });
    };
    return ImageUtility;
}());
exports.default = ImageUtility;
//# sourceMappingURL=ImageUtility.js.map