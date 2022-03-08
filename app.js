const express = require('express');
const path = require('path');
const morgan = require('morgan');

const { sequelize } = require('./models'); // 시퀄라이즈
const app = express();

app.set('port', process.env.PORT || 3000);

// PUG 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
sequelize
    .sync({ force: false })
    .then(() => {
        console.log('데이터베이스 연결됨.');
    })
    .catch((err) => {
        console.error(err);
    });

app.use(morgan('dev')); // 로그
app.use(express.static(path.join(__dirname, 'public'))); // 요청시 기본 경로 설정
app.use(express.json()); // json 파싱
app.use(express.urlencoded({ extended: false })); // uri 파싱

app.use((req, res, next) => {
    const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});
