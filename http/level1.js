import express from 'express'

const app = new express()

app.use(express.json())

//为了方便测试设置了静态的账号密码，正常应该从数据库获取
const user = {
  name: 'root',
  pass: '123456',
}

app.post('/login', (req, res) => {
  const { name, pass, remember } = req.body
  
  if (name === user.name && pass === user.pass) {
    //如果帐号密码正确且勾选自动登录则进行cookie设置，送回客户端保存
    if (remember) {
      const setCookies = []
      setCookies.push('name=' + name)
      setCookies.push('pass=' + pass)
      setCookies.push('remember=' + remember)
      //时限设置一天
      const expires =
        ';expires=' +
        new Date(
          parseInt(new Date().getTime()) + 60 * 60 * 24 * 1000
        ).toUTCString()
      //设置可访问域
      const path = ';path=' + '/'
    
      const Cookies = setCookies.map((cur) => {
        return cur + expires + path
      })
      
      res.set({
        'Set-Cookie': Cookies,
      })
    }

    res.send({ msg: '登录成功' })
  } else {
    res.send({ msg: '帐号或密码错误' })
  }
})

app.listen(3000, () => {
  console.log('启动成功')
})
