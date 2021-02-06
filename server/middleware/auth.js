const { User } = require('../models/User');

let auth = (req, res, next) => {

    //인증 처리 하는 곳

    //클라이언트 쿠키에서 토큰을 가져온다
    let token = req.cookies.x_auth;

    //토큰을 복호화 한후 유저를 찾는다
    User.findByToken(token, (err, user) => {
        if (err) throw err;
        if (!user) return res.json({ isAuth: false, error: true });

        //auth 라우터에서 user와 token정보를 사용할 수 있도록 request에 담는다.
        req.token = token;
        req.user = user;

        //middle ware에서 다음으로 넘어갈 수 있게 next를 해준다.
        next();
    })

    //유저가 있으면 인증 Okay
    //유저가 없으면 인증 No


}

module.exports = { auth };