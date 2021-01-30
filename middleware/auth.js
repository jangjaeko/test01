const {User} = require('../models/User');



let auth = (req, res, next)=>{

    //인증처리를 하는 곳

    //step1 클라이언트 쿠키에서 토큰을 가져온다
    let token = req.cookies.x_auth;
    //step2 토큰을 복호화 한 후 유저를 찾는다 
    User.findBytoken(token, (err, user)=>{
        if(err) throw err;
        if(!user) return res.json ({isAuth: false, error: true})

        req.token = token ;
        req.user = user ;
        next();
    })

    //step3 유저가 있으면 인증 okay

    //step4 유저가 없으면 인증 no

}

module.exports = {auth};