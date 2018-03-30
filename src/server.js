const express = require('express')
const next = require('next')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: 'dist' })
const handle = app.getRequestHandler()

const api = require('./api/index').default;
const config = require('./config');

app.prepare()
.then(() => {
  const server = express()

  server.use(bodyParser.urlencoded({extended: true}));
  server.use(bodyParser.json());
  server.use(cookieParser());

  server.use('/api', api);

  // Authenticate middleware
  // We will apply this middleware to every route except '/login' and '/_next' 
  server.use(unless([config.path.login, '/_next', '/static'], (req, res, next) => {
    const token = req.cookies[config.jwt.cookieName];
    if (token) {
      jwt.verify(token, config.jwt.secret, (err, decoded) => {
        if (err) {
          res.redirect(config.path.login);
        } else {
          // if everything is good, save to request for use in other routes
          req.jwtPayload = decoded;
          next();
        }
      })
    } else {
      res.redirect(config.path.login);
    }
  }))

  server.get(config.path.login, (req, res, next) => {
    const token = req.cookies[config.jwt.cookieName];
    if (token) {
      jwt.verify(token, config.jwt.secret, (err, decoded) => {
        if (err) {
          res.redirect(config.path.login);
        } else {
          // Already logged in, redirect to home
          res.redirect(config.path.home);
        }
      })
    } else { // Not logged in yet, continue to /auth/login page
      next();
    }
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})

function unless (paths, middleware) {
  return function(req, res, next) {
      let isHave = false
      paths.forEach((path) => {
        if (path === req.path || req.path.includes(path)) {
          isHave = true
          return
        }
      })
      if (isHave) {
        return next()
      } else {
          return middleware(req, res, next)
      }
  }
}