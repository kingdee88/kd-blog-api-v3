const moment = require('moment')
const svgCaptcha = require('svg-captcha')

// 格式化时间
exports.formatTime = time => moment(time).format('YYYY-MM-DD hh:mm:ss')

// 处理成功响应
exports.success = ({ ctx, res = null, msg = '请求成功' })=> {
  ctx.body = {
    code: 0,
    data: res,
    msg
  }
  ctx.status = 200
}

// 获取验证码
exports.getCheckCode = (ctx) => {
  const options = {// 参数
    width: 100,
    height: 40, // height of captcha
    fontSize: 50, // captcha text size
    color: true, // 验证码的字符是否有颜色，默认没有，如果设定了背景，则默认有
    noise: 10, // 干扰线条的数量
    ignoreChars: '0o1i', // 验证码字符中排除 0o1i
    background: '#fff' // 验证码图片背景颜色
}
const Captcha = svgCaptcha.createMathExpr(options);//生成验证码
return Captcha
}
