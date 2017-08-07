<template>
  <section class="container">
    <h2 class="title">
      {{isRegsterSuccess ? '报名成功' : '请提交以下报名信息'}}
    </h2>
    <div class='register-success mfic-right' v-show="isRegsterSuccess">
      
    </div>
    <p class="info-warn" v-show="!isRegsterSuccess"><i class="mfic-important"></i>非394班级成员无法报名</p>
    <form class="form" v-show="!isRegsterSuccess">
      <div class="input-box disabled">
        姓名：<input type="text" name="username" v-model="user.username" @input="validateName" disabled/>
        <i :class="user.username.length ? 'mfic-right' : ''"></i>
      </div>
      <div :class="['input-box']">
        电话：<input type="text" name="userphone" @input="validatePhone"/>
        <i :class="isValidPhone ? 'mfic-right' : ''"></i>
      </div>
    </form>
    <my-button :class="btnClass"
            :text="btnConf.text"
            :clickHandler="register"
            v-show="!isRegsterSuccess">
    </my-button>
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
import { getToken, checkRedirectUrl } from '../utils/auth'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import Toast from '~components/Toast.vue'
import MyButton from '~components/Button.vue'
export default {
  head () {
    return {
      title: `报名`
    }
  },
  data () {
    return {
      user: {
        username: ''
      },
      inputPhone: '',
      isValidPhone: false,
      shouldSubmit: false,
      toastConf: {
        text: '',
        icon: ''
      },
      btnConf: {
        class: '',
        text: '我要报名'
      },
      isSubmitting: false,
      isRegsterSuccess: false
    }
  },
  computed: {
    inputName () {
      return this.user.username
    },
    nameId () {
      return this.user._id
    },
    isValidName(){
      return this.user.username.length > 0
    },
    btnClass() {
      return [
        (this.isValidName && this.isValidPhone && !this.isSubmitting) ? 'submit' : '',
        this.isSubmitting ? 'disabled' : '']
    }
  },
  asyncData ({ req, params, isServer }) {
    const token = getToken(req)
    return axios.post(`http://${domain}/api/user/get`, { token })
            .then((res) => {
              let resData = res.data
              if (resData.errno) {
                return { user: { username: '' } }
              } else {
                return { user: resData.data.user }
              }
            })
            .catch(err => console.log(err))
  },
  methods: {
    register (event) {
      let me = this
      if (me.isValidName && me.isValidPhone && !me.isSubmitting) {
        me.isSubmitting = true
        me.btnConf.text = '加载中...'

        axios.post(`http://${domain}/api/member/edit`,
          {
            _id: this.nameId,
            name: this.inputName,
            phone: this.inputPhone,
            is_enrolled: 1
          })
          .then((res) => {
            let resData = res.data
            if (resData.errno) {
              me.toastConf = {
                isShow: true,
                text: resData.errmsg,
                icon: 'mfic-important'
              }
              me.$refs.toast.show()
            } else {
              me.isRegsterSuccess = true
            }
            me.isSubmitting = false
            me.btnConf.text = '我要报名'
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
    validatePhone (event) {
      let inputPhone = event.target.value
      let phoneReg = new RegExp('^1[0-9]{10}$')
      this.isValidPhone = phoneReg.test(inputPhone)
      this.inputPhone = inputPhone
    }
  },
  mounted () {
    let token = getToken()
    if (!token || token === 'undefined' || token === 'null') {
      this.$router.replace(`/signin?redirect_url=${window.location.href}`)
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
  .mfic-important::before
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
  .mfic-right::before
    position absolute
    right 0
    top 50%
    transform translateY(-50%)
    color $color-light-greenyellow
  input
    height 59px
    line-height 60px
    font-size 28px
.register-success
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
</style>
