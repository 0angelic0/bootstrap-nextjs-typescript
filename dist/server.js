var express = require('express');
var next = require('next');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var jwt = require('jsonwebtoken');
var dev = process.env.NODE_ENV !== 'production';
var app = next({ dev: dev, dir: 'dist' });
var handle = app.getRequestHandler();
var api = require('./api/index').default;
var config = require('./config');
app.prepare()
    .then(function () {
    var server = express();
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    server.use(cookieParser());
    server.use('/api', api);
    // Authenticate middleware
    // We will apply this middleware to every route except '/login' and '/_next' 
    server.use(unless([config.path.login, '/_next', '/static'], function (req, res, next) {
        var token = req.cookies[config.jwt.cookieName];
        if (token) {
            jwt.verify(token, config.jwt.secret, function (err, decoded) {
                if (err) {
                    res.redirect(config.path.login);
                }
                else {
                    // if everything is good, save to request for use in other routes
                    req.jwtPayload = decoded;
                    next();
                }
            });
        }
        else {
            res.redirect(config.path.login);
        }
    }));
    server.get(config.path.login, function (req, res, next) {
        var token = req.cookies[config.jwt.cookieName];
        if (token) {
            jwt.verify(token, config.jwt.secret, function (err, decoded) {
                if (err) {
                    res.redirect(config.path.login);
                }
                else {
                    // Already logged in, redirect to home
                    res.redirect(config.path.home);
                }
            });
        }
        else {
            next();
        }
    });
    server.get('*', function (req, res) {
        return handle(req, res);
    });
    server.listen(3000, function (err) {
        if (err)
            throw err;
        console.log('> Ready on http://localhost:3000');
    });
})
    .catch(function (ex) {
    console.error(ex.stack);
    process.exit(1);
});
function unless(paths, middleware) {
    return function (req, res, next) {
        var isHave = false;
        paths.forEach(function (path) {
            if (path === req.path || req.path.includes(path)) {
                isHave = true;
                return;
            }
        });
        if (isHave) {
            return next();
        }
        else {
            return middleware(req, res, next);
        }
    };
}
//# sourceMappingURL=server.js.map