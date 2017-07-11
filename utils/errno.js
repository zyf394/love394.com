export default {
  SUCCESS: {
    errno: 0,
    errmsg: 'success'
  },
  MEMBER_EXIST: {
    errno: 10000,
    errmsg: '成员已添加过了'
  },
  MEMBER_ENROLLED: {
    errno: 10001,
    errmsg: '您已报过名'
  },
  MEMBER_NOT_CLASSMATE: {
    errno: 10002,
    errmsg: '您非本班成员，无法报名'
  },
  MEMBER_PAYED: {
    errno: 10003,
    errmsg: '您已交费'
  },
  USER_NAME_REGISTERED: {
    errno: 20000,
    errmsg: '用户姓名已注册'
  },
  USER_EMAIL_REGISTERED: {
    errno: 20001,
    errmsg: '用户邮箱已注册'
  },
  USER_EMAIL_NOT_REGISTERED: {
    errno: 20002,
    errmsg: '用户邮箱未注册'
  },
  USER_PASSWORD_INCORRECT: {
    errno: 20003,
    errmsg: '用户密码错误'
  },
  USER_NOT_EXIST: {
    errno: 20004,
    errmsg: '用户不存在'
  }
}