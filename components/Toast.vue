<template>
    <transition name="toast-fade">
      <div v-show="isShow && showFlag" :class="['toast', icon]">
        <span>{{text}}</span>
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
      clearTimeout(this.timer)
      this.$nextTick(() => {
        if (this.time !== 0) {
          this.timer = window.setTimeout(() => {
            this.showFlag = false
          }, this.time)
        }
      })
    },
    hide () {
      this.showFlag = false
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" >
@import '~assets/css/variable.styl'
.toast-wall
  position fixed
  top 0
  width 100%
  height 100%
.toast
  position fixed
  top 50%
  left 50%
  display inline-block
  padding 20px 40px 20px 40px
  line-height 1
  font-size 28px
  text-align center
  color $color-white
  background-color rgba(0 0 0 0.6)
  transform translate(-50%, -50%)
  span
    padding-left 4px
    white-space nowrap
    
.toast-fade-enter-active
  animation: toast-in .6s
.toast-fade-leave-active
  animation: toast-out .6s
  
@keyframes toast-in
  0%
    opacity: 0
  100%
    opacity: 0.8

@keyframes toast-out
  0%
    opacity: 0.8
  100%
    opacity: 0
</style>