<template>
  <section class="container">
      <figure class="logo">
        <transition name="fadein">
          <img v-show="logoShow" src="../assets/img/love394logo.png" alt="Nuxt.js Logo" />
        </transition>
      </figure>
    <h1 class="title">
      LOVE394
    </h1>
    <h2 class="info">
      OFFICIAL WEBSITE
    </h2>
    <nuxt-link class="button" to="/about">
      聚会信息
    </nuxt-link>
    <nuxt-link class="button" to="/member">
      聚会名单
    </nuxt-link>
    <nuxt-link class="button" to="/register">
      我要报名
    </nuxt-link>
  </section>
</template>
<script>
export default {
  data () {
    return {
      logoShow: false
    }
  },
  mounted () {
    this.logoShow = true
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../assets/css/variable.styl'
.info
  font-weight: 300;
  color: $color-light-grey;
  margin: 0;
  margin-top: 10px;
  font-size 36px
.title
  margin: 50px 0 0;
.logo
  display block
  height 500px
  img
    display block
    margin 0 auto
    width 500px
    height 500px
.fadein-enter-active, .fadein-leave-active {
  transition: all 1s
}
.fadein-enter, .fadein-leave-to {
  opacity: 0
  transform: translateY(10%) 
}
</style>
