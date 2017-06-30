<template>
  <section class="container">
    <h2 class="title">
      请提交以下报名信息
    </h2>
    <p class="info-warn mfic-important">非394班级成员无法报名</p>
    <form class="form">
      <div :class="['input-box', isValidName ? 'mfic-right' : '']">
        姓名：<input type="text" name="username" @input="validateName"/>
      </div>
      <div :class="['input-box', isValidPhone ? 'mfic-right' : '']">
        电话：<input type="text" name="userphone" @input="validatePhone"/>
      </div>
    </form>
    <div :class="['button', (isValidName && isValidPhone) ? 'submit' : '']" 
          @click="register">
      我要报名
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
  origin
} from '../config'
import { getToken, checkRedirectUrl } from '../utils/auth'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import Toast from '~components/Toast.vue'

const domain = process.env.NODE_ENV !== env.prod ? origin.dev : origin.prod

export default {
  data () {
    return {
      inputName: '',
      inputPhone: '',
      isValidName: false,
      isValidPhone: false,
      shouldSubmit: false,
      toastConf: {
        text: '',
        icon: ''
      }
    }
  },
  methods: {
    register (event) {
      let me = this
      if (me.isValidName && me.isValidPhone) {
        axios.post(`http://${domain}/api/member/edit`,
          {
            id: this.nameId,
            name: this.inputName,
            phone: this.inputPhone,
            is_enrolled: true
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
                text: '报名成功',
                icon: 'mfic-right'
              }
            }
            me.$refs.toast.show()
          })
          .catch(err => console.log(err))
      }
    },
    validateName (event) {
      let inputText = event.target.value
      this.inputName = inputText
      axios.post(`http://${domain}/api/member/list`, {name: inputText})
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
    validatePhone (event) {
      let inputPhone = event.target.value
      let phoneReg = new RegExp('^1[0-9]{10}$')
      this.isValidPhone = phoneReg.test(inputPhone)
      this.inputPhone = inputPhone
    }
  },
  mounted () {
    let token = getToken()
    if (!token) {
      this.$router.replace(`/signin?redirect_url=${window.location.href}`)
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
  &.mfic-important::before
    margin-right 4px
.form
  margin 50px 0
.button
  &.submit
    color: $color-white;
    background-color: $color-light-pink;
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
  &.mfic-right::before
    position absolute
    right 0
    top 50%
    transform translateY(-50%)
    color $color-light-greenyellow
  input
    height 59px
    line-height 60px
    font-size 28px
</style>
