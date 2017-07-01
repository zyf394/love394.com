<template>
  <div>
    <nuxt/>
    <my-footer :style="{display: 'none'}"/>
    <toast :isShow="toastObj.isShow"
          :text="toastObj.text"
          :icon="toastObj.icon"
          ref="toast"/>
  </div>
</template>

<script>
import MyFooter from '~components/Footer.vue'
import Toast from '~components/Toast.vue'
import {mapGetters, mapActions, mapMutations} from 'vuex'
export default {
  middleware: 'check-auth',
  computed: {
    ...mapGetters(['toastObj'])
  },
  components: {
    MyFooter,
    Toast
  },
  head () {
    return {
      title: `394聚会官方网站`
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import '~assets/css/variable.styl'

.container
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;

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
  &:hover, &:focus
    color: #fff;
    background-color: $color-light-pink;

.title
  color: $color-grey;
  font-weight: 300;
  font-size: 72px;
  margin: 0;

input
  border none 
  -webkit-appearance none
</style>
