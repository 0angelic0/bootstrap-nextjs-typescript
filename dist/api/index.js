"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
// import * as bodyParser from 'body-parser';
// import * as cookieParser from 'cookie-parser';
var morgan = require("morgan");
var cors = require("cors");
var jwt = require("jsonwebtoken");
var crypto = require("crypto");
var config = require("../config");
var router = express_1.Router();
router.use(cors());
router.use(morgan('dev'));
// router.use(bodyParser.urlencoded({extended: true}));
// router.use(bodyParser.json());
// router.use(cookieParser());
router.get('/', function (req, res) {
    res.send('[GET] Hello API!');
});
router.post('/', function (req, res) {
    res.send('[POST] Hello API!');
});
router.post('/auth', function (req, res) {
    var _a = req.body, username = _a.username, password = _a.password;
    if (username === 'admin' && password === 'pass') {
        var payload = {
            username: username,
            role: 'admin',
            xsrfToken: crypto.createHash('md5').update(username).digest('hex')
        };
        var token = jwt.sign(payload, config.jwt.secret, config.jwt.option);
        res.status(200).json({
            success: true,
            message: 'Enjoy your token',
            token: token
        });
    }
    else if (username === 'cs' && password === 'pass') {
        var payload = {
            username: username,
            role: 'cs',
            xsrfToken: crypto.createHash('md5').update(username).digest('hex')
        };
        var token = jwt.sign(payload, config.jwt.secret, config.jwt.option);
        res.status(200).json({
            success: true,
            message: 'Enjoy your token',
            token: token
        });
    }
    else {
        res.status(400).json({
            success: false,
            message: 'Authentication failed. Invalid Username and/or Password.'
        });
    }
});
// Api example to prevent CRSF attack
router.post('/preventCRSF', function (req, res) {
    if (req.jwtPayload.xsrfToken === req.get('X-XSRF-TOKEN')) {
        res.status(200).json({
            success: true,
            message: 'Yes, this api is protected by CRSF attack'
        });
    }
    else {
        res.status(400).json({
            success: false,
            message: 'CRSF attack is useless'
        });
    }
});
exports.default = router;
//# sourceMappingURL=index.js.map