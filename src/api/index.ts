import { Request, Response, Router } from 'express';
// import * as bodyParser from 'body-parser';
// import * as cookieParser from 'cookie-parser';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as jwt from 'jsonwebtoken';
import * as crypto from 'crypto';
import * as config from '../config';

interface RequestWithJWTPayload extends Request {
  jwtPayload: any;
}

const router: Router = Router();
router.use(cors());
router.use(morgan('dev'));
// router.use(bodyParser.urlencoded({extended: true}));
// router.use(bodyParser.json());
// router.use(cookieParser());

router.get('/', function(req: Request, res: Response) {
  res.send('[GET] Hello API!');
});

router.post('/', function(req: Request, res: Response) {
  res.send('[POST] Hello API!');
});

router.post('/auth', function(req: Request, res: Response) {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'pass') {
    const payload: any = {
      username: username,
      role: 'admin',
      xsrfToken: crypto.createHash('md5').update(username).digest('hex')
    }
    const token = jwt.sign(payload, config.jwt.secret, config.jwt.option);
    res.status(200).json({
      success: true,
      message: 'Enjoy your token',
      token: token
    })
  } else if (username === 'cs' && password === 'pass') {
    const payload: any = {
      username: username,
      role: 'cs',
      xsrfToken: crypto.createHash('md5').update(username).digest('hex')
    }
    const token = jwt.sign(payload, config.jwt.secret, config.jwt.option);
    res.status(200).json({
      success: true,
      message: 'Enjoy your token',
      token: token
    })
  } else {
    res.status(400).json({
      success: false,
      message: 'Authentication failed. Invalid Username and/or Password.'
    })
  }
});

// Api example to prevent CRSF attack
router.post('/preventCRSF', (req: RequestWithJWTPayload, res: Response) => {
  if (req.jwtPayload.xsrfToken === req.get('X-XSRF-TOKEN')) {
    res.status(200).json({
      success: true,
      message: 'Yes, this api is protected by CRSF attack'
    })
  } else {
    res.status(400).json({
      success: false,
      message: 'CRSF attack is useless'
    })
  }
})

export default router;