<template>
  <div :class="styl"
        @click="clickHandler">{{text}}</div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: '按钮'
    },
    styl: {
      type: String,
      default: 'button'
    },
    clickHandler: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      showFlag: false
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" >
@import '~assets/css/variable.styl'
.button, .button:active
  display: block;
  color: $color-light-pink;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid $color-light-pink;
  text-decoration: none;
  text-transform: uppercase;
  margin 20px 60px
  padding 25px 60px
  font-size 36px
  &.disabled, &.disabled:hover
    color $color-white
    background-color $color-light-grey-s
    border 1px solid $color-light-grey-s
    
  &.submit
    color $color-white
    background-color $color-light-pink
    border 1px solid $color-light-pink
  &:hover
    color: #fff;
    background-color: $color-light-pink;
</style>