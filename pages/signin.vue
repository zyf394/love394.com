<template>
  <section class="container">
    <h2 class="title">
      {{isSigninSuccess ? '登录成功' : '请登录'}}
    </h2>
    <div class='login-success mfic-right' v-show="isSigninSuccess">
      
    </div>
    <form class="form" v-show="!isSigninSuccess">
      <div :class="['input-box']">
        邮箱：<input type="text" name="email" @input="validateEmail" placeholder="请输入您的邮箱"/>
        <i :class="isValidEmail ? 'mfic-right' : ''"></i>
      </div>
      <div :class="['input-box']">
        密码：<input type="password" name="password" @input="validatePassword" placeholder="请输入您的密码，不少于8位"/>
        <i :class="isValidPassword ? 'mfic-right' : ''"></i>
      </div>
    </form>
    <my-button :class="btnClass"
        :text="btnConf.text"
        :clickHandler="signin"
        v-show="!isSigninSuccess">
    </my-button>
    <nuxt-link class="button" to="/">
      返回首页
    </nuxt-link>
    <div class="register-tip" v-show="!isSigninSuccess">
      <a href="/signup">没有账号？点此注册</a>
    </div>
    <toast :isShow="toastConf.isShow"
      :text="toastConf.text"
      :icon="toastConf.icon"
      ref="toast"/>
  </section>
</template>
<script>
import axios from 'axios'
import { getToken, getQueryParams, checkRedirectUrl } from '../utils/auth'

import {
  env,
  domain
} from '../config'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import Toast from '~components/Toast.vue'
import MyButton from '~components/Button.vue'

let params = {}

export default {
  head () {
    return {
      title: `登录`
    }
  },
  data () {
    return {
      inputEmail: '',
      inputPassword: '',
      isValidEmail: false,
      isValidPassword: false,
      shouldSubmit: false,
      toastConf: {
        text: '',
        icon: ''
      },
      btnConf: {
        class: '',
        text: '登录'
      },
      isSubmitting: false,
      isSigninSuccess: false
    }
  },
  computed: {
    btnClass() {
      return [
        (this.isValidEmail && this.isValidPassword && !this.isSubmitting) ? 'submit' : '',
        this.isSubmitting ? 'disabled' : '']
    }
  },
  methods: {
    ...mapMutations(['SET_TOKEN']),
    signin (event) {
      let me = this
      if (me.isValidEmail && me.isValidPassword && !me.isSubmitting) {
        me.isSubmitting = true
        me.btnConf.text = '加载中...'

        axios.post(`http://${domain}/api/user/signin`,
          {
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
                text: '登录成功，即将跳转',
                icon: 'mfic-right'
              }
              me.isSigninSuccess = true
              me.isSubmitting = false
              me.btnConf.text = '登录'
              me['SET_TOKEN'](resData.token)
              window.localStorage.setItem('token', resData.token)
              checkRedirectUrl({delay: 3000})
            }
            me.$refs.toast.show()
          })
          .catch(err => console.log(err))
      }
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
    Toast,
    MyButton
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
  font-weight 200
  &.mfic-important::before
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
  .mfic-right::before
    position absolute
    right 0
    top 50%
    transform translateY(-50%)
    color $color-light-greenyellow
  input
    display inline-block
    width 440px
    height 59px
    line-height 60px
    font-size 28px
.login-success
  width 240px
  height 240px
  margin 0 auto
  &.mfic-right::before
    display block
    width 240px
    height 240px
    font-size 160px
    line-height 240px
    color $color-light-pink
.register-tip a
  font-size 28px
  color $color-light-grey-s
  text-decoration none
</style>
