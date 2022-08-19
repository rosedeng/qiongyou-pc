const express=require('express')
const cors=require('cors')
const jwt=require('jsonwebtoken')
const secret=require('./secret')
const app=express()

app.use(cors())

app.get('/',(req,res)=>{
    res.send('测试成功')
})

app.get('/login',(req,res)=>{
    let user=req.query.username;
    let pwd=req.query.password;
    const token = jwt.sign({user,id:'213'},secret.key,{expiresIn:2000})
    res.send({
        state:200,
        msg:'success',
        token
    })
})


app.post('/getuser',(req,res)=>{
    let token=req.headers.authorization;
    console.log('token',token)
    if(token){
        jwt.verify(token,secret.key,(err,decoded)=>{
            if(err){
                switch(err.name){
                    case 'JsonWebTokenError':
                        res.send({success:false,status:403,code:-1,msg:'无效的token'});
                        break;
                    case 'TokenExpiredError':
                        res.send({success:false,status:403,code:-1,msg:'token过期'});
                        break;
                }
            }else{
                res.send({
                    status:200,
                    success:true,
                    info:"token验证成功--返回请求的数据",
                    result:[1,2,3,4]

                })
            }
        })
    }else{
        res.send({
            success:false,
            status:403,
            info:"需要携带token参数"
        })
    }
})


app.listen('7878',()=>{
    console.log('服务器启动成功啦。。。。。')
    console.log('http://localhost:7878')
})