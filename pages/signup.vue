<template>
  <section class="container">
    <h2 class="title">
      创建您的个人账号
    </h2>
    <p class="info-warn"><i class="mfic-important"></i>非394班级成员无法创建账号</p>
    <form class="form">
      <div :class="['input-box']">
        姓名：<input type="text" name="username" @input="validateName" placeholder="请输入您的姓名" />
        <i :class="isValidName ? 'mfic-right' : ''"></i>
      </div>
      <div :class="['input-box']">
        邮箱：<input type="text" name="email" @input="validateEmail" placeholder="请输入您的邮箱"/>
        <i :class="isValidEmail ? 'mfic-right' : ''"></i>
      </div>
      <div :class="['input-box']">
        密码：<input type="password" name="password" @input="validatePassword" placeholder="请输入您的密码，不少于8位"/>
        <i :class="isValidPassword ? 'mfic-right' : ''"></i>
      </div>
    </form>
    <div :class="['button', (isValidName && isValidEmail && isValidPassword) ? 'submit' : 'disabled']" 
          @click="signup">
      注册
    </div>
    <nuxt-link class="button" to="/">
      返回首页
    </nuxt-link>
    <toast :isShow="toastConf.isShow"
      :text="toastConf.text"
      :icon="toastConf.icon"
      ref="toast"/>
  </section>
</template>
<script>
import axios from 'axios'
import {
  env,
  domain
} from '../config'
import Toast from '~components/Toast.vue'

export default {
  data () {
    return {
      inputName: '',
      inputEmail: '',
      inputPassword: '',
      isValidName: false,
      isValidEmail: false,
      isValidPassword: false,
      shouldSubmit: false,
      toastConf: {
        text: '',
        icon: ''
      }
    }
  },
  methods: {
    head () {
      return {
        title: `注册`
      }
    },
    signup (event) {
      let me = this
      if (me.isValidName && me.isValidEmail && me.isValidPassword) {
        axios.post(`http://${domain}/api/user/signup`,
          {
            username: this.inputName,
            email: this.inputEmail,
            password: this.inputPassword
          })
          .then((res) => {
            let resData = res.data
            if (resData.errno) {
              me.toastConf = {
                isShow: true,
                text: resData.errmsg,
                icon: 'mfic-important'
              }
            } else {
              me.toastConf = {
                isShow: true,
                text: '报名成功，即将跳转登录页面',
                icon: 'mfic-right'
              }
              window.setTimeout(() => me.$router.replace('/signin'), 3000)
            }
            me.$refs.toast.show()
          })
          .catch(err => console.log(err))
      }
    },
    validateName (event) {
      let inputName = event.target.value
      this.inputName = inputName
      axios.get(`http://${domain}/api/member/list`, {params: {name: inputName}})
        .then((res) => {
          let resData = res.data
          if (resData.length) {
            this.isValidName = true
            this.nameId = resData[0]._id
          } else {
            this.isValidName = false
          }
        })
        .catch(err => console.log(err))
    },
    validateEmail (event) {
      let inputEmail = event.target.value
      let emailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ 
      this.isValidEmail = emailReg.test(inputEmail)
      this.inputEmail = inputEmail
    },
    validatePassword (event) {
      let inputPassword = event.target.value
      let passwordReg = /^.{8,}$/
      this.isValidPassword = passwordReg.test(inputPassword)
      this.inputPassword = inputPassword
    }
  },
  components: {
    Toast
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~assets/css/variable.styl'

.title
  font-size 50px
  font-weight 300
  color $color-light-grey
.info-warn
  color $color-light-grey-s
  font-size 28px
  font-weight 100
  .mfic-important::before
    margin-right 4px
.form
  margin 50px 0
.button
  &:first-of-type
    margin-top 20px
.input-box
  position relative
  display block
  margin 0 auto
  padding 10px 0
  width 630px
  height 60px
  font-size 36px
  text-align left
  border-bottom 1px solid #e5e5e5
  input
    display inline-block
    width 440px
    height 59px
    line-height 60px
    font-size 28px
  .mfic-right::before
    position absolute
    right 0
    top 50%
    transform translateY(-50%)
    color $color-light-greenyellow
</style>
