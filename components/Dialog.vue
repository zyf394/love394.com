<template>
    <transition name="dialog-fade">
      <div v-show="isShow && showFlag" class="dialog">
        <div class="dialog-content">
          <div class="dialog-title">
            <h3><i :class="icon"></i>{{title}}</h3>
          </div>
          <div class="dialog-text">
            <span>{{text}}</span>
          </div>
        </div>
        <div class="dialog-btn">
          <div class="dialog-btn-confirm" @click="btn.confirm">确定</div>
          <div class="dialog-btn-cancel" @click="btn.cancel">取消</div>
        </div>
      </div>
  </transition>
</template>
<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    time: {
      type: Number,
      default: 3000
    },
    btn:{
      type: Object,
      default: {
        confirm: {
          handler: () => {}
        },
        cancel: {
          handler: () => {}
        }
      }
    }
  },
  data() {
    return {
      showFlag: false
    }
  },
  methods: {
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '~assets/css/variable.styl'
.dialog
  position fixed
  top 50%
  left 50%
  display inline-block
  padding 10px 20px 10px 20px
  line-height 1
  text-align center
  color $color-white
  background-color rgba(0 0 0 0.6)
  transform translate(-50%, -50%)
  .dialog-content
    .dialog-title
      font-size 10px
      padding-bottom 10px
      h3
        position relative
      i::before
        position absolute
        margin-left -12px
    .dialog-text
      font-size 8px
      padding-bottom 10px
  .dialog-btn
    font-size 8px
    &-confirm, &-cancel
      display inline-block
      width 40px
      margin 0 10px
      line-height 18px
      &:hover
        cursor pointer
    &-confirm
      background-color $color-light-pink
    &-cancel
      background-color $color-light-grey-s
    
.dialog-fade-enter-active
  animation: dialog-in .6s
.dialog-fade-leave-active
  animation: dialog-out .6s
  
@keyframes dialog-in
  0%
    opacity: 0
  100%
    opacity: 0.8

@keyframes dialog-out
  0%
    opacity: 0.8
  100%
    opacity: 0
</style>