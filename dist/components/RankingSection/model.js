"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createEmptyPrizeData() {
    return {
        id: 0,
        type: 1,
        game_id: 0,
        name: '',
        code: '',
        title: '',
        description: '',
        condition: '',
        value: 0,
        tax: 0,
        vat: 0,
        brand_icon_img_120x120: '',
        myprize_img_320x200: '',
        myprize_full_img_570x350: '',
        qr_url: '',
        month: 0,
        year: 0,
        expired_datetime: '',
        is_claimed: 0
    };
}
exports.createEmptyPrizeData = createEmptyPrizeData;
function createEmptyPrizeDescData() {
    return {
        id: 0,
        type: 1,
        display_reward_type: 0,
        game_id: 0,
        name: '',
        text_display_on_reward: '',
        text_after_use: '',
        value: 0,
        tax: 0,
        vat: 0,
        brand_icon_img_120x120: '',
        myprize_img_320x200: '',
        myprize_full_img_570x350: ''
    };
}
exports.createEmptyPrizeDescData = createEmptyPrizeDescData;
//# sourceMappingURL=model.js.map