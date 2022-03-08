import { Request, Response, NextFunction } from 'express';
import logging from '../config/logging';
import jwt from 'jsonwebtoken';
import config from '../config/config';

const NAMESPACE = 'Auth';

const extractJWT = (req: Request, res: Response, next: NextFunction) => {
    logging.info(NAMESPACE, 'Validating token');

    let token = req.headers.authorization?.split(' ')[1];
    if (token) {
        /*jwt를 verify함수로 검증, 이때, token, 비밀 키, 콜백함수를 사용한다. 
        콜백에는 매개변수로 error와 decoded를 사용*/
        jwt.verify(token, config.server.token.secret, (error, decoded) => {
            // 만약 매개변수로 에러가 뜨면
            if (error) {
                // 흔히 보듯 404 상태를 반환
                return res.status(404).json({
                    // 메시지로는 error가 뜨게
                    message: error,
                    error
                });
            } else {
                /* 에러가 안 뜰 경우, response.locals(변수들을 저장하고 함수나 미들웨어에 이 payload next로)
                값을 넘긴다. 이 값에 해독된 값을 넣으면 바로 가서 next()를 넣을 수 있다*/
                res.locals.jwt = decoded;
                next();
            }
        });
    } else {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
};

export default extractJWT;
